import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    const { org_name, manager, phone, email, message } = data;

    if (!org_name || !manager || !phone || !email || !message) {
      return NextResponse.json(
        { error: "필수 항목을 모두 입력해주세요." },
        { status: 400 },
      );
    }

    // 1) DB 저장
    const supabase = await createAdminClient();
    const { error: dbError } = await supabase.from("inquiries").insert({
      org_name,
      manager,
      phone,
      email,
      grade: data.grade || null,
      program: data.program || null,
      headcount: data.headcount ? parseInt(data.headcount) : null,
      desired_date: data.desired_date || null,
      message,
    });

    if (dbError) throw dbError;

    // 2) Google Apps Script Webhook 호출 → Gmail 발송
    const gasUrl = process.env.GAS_WEBHOOK_URL;
    const gasSecret = process.env.GAS_WEBHOOK_SECRET;

    if (gasUrl && gasSecret) {
      try {
        await fetch(gasUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            secret: gasSecret,
            org_name,
            manager,
            phone,
            email,
            grade: data.grade || "",
            program: data.program || "",
            headcount: data.headcount || "",
            desired_date: data.desired_date || "",
            message,
          }),
        });
      } catch (mailError) {
        // 메일 실패는 DB 저장 성공을 막지 않음 (관리자가 DB에서 확인 가능)
        console.error("Gmail 발송 실패:", mailError);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("문의 접수 오류:", error);
    const message =
      typeof error === "object" && error !== null && "message" in error
        ? (error as { message: string }).message
        : "알 수 없는 오류";
    return NextResponse.json(
      { error: `문의 접수 중 오류가 발생했습니다. (${message})` },
      { status: 500 },
    );
  }
}
