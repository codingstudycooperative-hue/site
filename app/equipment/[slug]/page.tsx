import { notFound } from "next/navigation";
import Link from "next/link";
import PageBanner from "@/components/ui/PageBanner";
import { equipment } from "@/data/equipment";

interface EquipmentDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return equipment.map((item) => ({
    slug: item.slug,
  }));
}

export default async function EquipmentDetailPage({
  params,
}: EquipmentDetailPageProps) {
  const { slug } = await params;
  const item = equipment.find((e) => e.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main>
      <PageBanner title={item.name} subtitle={item.category} />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          {/* 뒤로가기 링크 */}
          <Link
            href="/equipment"
            className="mb-8 inline-flex items-center text-primary-600 hover:text-primary-800"
          >
            <span className="mr-2">←</span> 보유교구 목록으로
          </Link>

          {/* 교구 상세 정보 */}
          <div className="rounded-lg border border-gray-200 p-8">
            <div className="mb-8 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  {item.name}
                </h2>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm font-semibold text-gray-600">
                    카테고리
                  </p>
                  <p className="mt-2 text-lg text-gray-800">{item.category}</p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm font-semibold text-gray-600">
                    교육 대상
                  </p>
                  <p className="mt-2 text-lg text-gray-800">{item.target}</p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm font-semibold text-gray-600">
                    최대인원
                  </p>
                  <p className="mt-2 text-lg text-gray-800">
                    {item.maxHeadcount}명
                  </p>
                </div>

                <div className="rounded-lg bg-gray-50 p-4">
                  <p className="text-sm font-semibold text-gray-600">
                    사용 권장
                  </p>
                  <p className="mt-2 text-lg text-gray-800">1~2시간</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  교구 설명
                </h3>
                <p className="whitespace-pre-wrap text-gray-700">
                  {item.description}
                </p>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="mb-4 text-xl font-bold text-gray-800">
                  대여 안내
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3 text-primary-600">•</span>
                    <span>
                      협동조합 회원사를 통한 대여 서비스를 제공합니다.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary-600">•</span>
                    <span>교육 기관 및 단체 단위 대여 가능합니다.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-primary-600">•</span>
                    <span>
                      자세한 대여 조건은 문의를 통해 확인할 수 있습니다.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-primary-50 p-6">
                <h3 className="mb-3 font-bold text-gray-800">
                  더 자세히 알아보기
                </h3>
                <p className="mb-4 text-gray-700">
                  이 교구에 대해 더 알고 싶으신가요? 문의 페이지에서 상담을
                  요청할 수 있습니다.
                </p>
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-primary-600 px-6 py-2 text-white hover:bg-primary-700"
                >
                  문의하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
