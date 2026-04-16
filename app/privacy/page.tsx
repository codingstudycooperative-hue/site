import PageBanner from "@/components/ui/PageBanner";
import { ORGANIZATION_INFO } from "@/lib/constants";

export default function Privacy() {
  return (
    <main>
      <PageBanner title="Privacy" subtitle="개인정보처리방침" />

      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="prose prose-sm max-w-none">
          <div className="text-sm text-slate-500 mb-8">
            최종 업데이트: 2025년 1월 1일
          </div>

          {/* 제1조 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              제1조 개인정보의 처리 목적
            </h2>
            <p className="text-slate-600 mb-4">
              코딩스터디 협동조합(이하 &quot;회사&quot;)은 다음과 같은 목적으로
              개인정보를 처리합니다.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>수업 신청 및 계약 이행</li>
              <li>고객 상담 및 문의 처리</li>
              <li>공지사항 및 뉴스레터 발송</li>
              <li>교육 품질 개선 및 서비스 개선</li>
              <li>법적 의무 이행</li>
            </ul>
          </section>

          {/* 제2조 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              제2조 수집하는 개인정보의 항목
            </h2>
            <p className="text-slate-600 mb-4">
              회사는 다음과 같은 개인정보를 수집합니다.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>필수항목: 이름, 휴대폰 번호, 이메일 주소, 학년(나이)</li>
              <li>선택항목: 학교명, 기관명, 특별히 원하는 교구</li>
              <li>자동수집: IP 주소, 쿠키, 서비스 이용기록</li>
            </ul>
          </section>

          {/* 제3조 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              제3조 개인정보의 보유 및 이용 기간
            </h2>
            <p className="text-slate-600 mb-4">
              회사는 개인정보를 수집한 날부터 다음 기간 동안 보유 및 이용합니다.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>회원정보: 회원 탈퇴 시까지</li>
              <li>수업신청정보: 수업 완료 후 3년</li>
              <li>상담기록: 상담 종료 후 1년</li>
              <li>기타 정보: 법령 규정에 따른 보관 기간</li>
            </ul>
          </section>

          {/* 제4조 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              제4조 개인정보의 제3자 제공
            </h2>
            <p className="text-slate-600 mb-4">
              회사는 원칙적으로 개인정보를 제3자에게 제공하지 않습니다. 단,
              다음의 경우는 예외입니다.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>본인의 동의를 받은 경우</li>
              <li>법령의 규정에 의거하거나 수사기관의 요청이 있는 경우</li>
              <li>협력학교·기관과 수업 정보 공유가 필요한 경우</li>
            </ul>
          </section>

          {/* 제5조 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              제5조 개인정보의 안전성 확보
            </h2>
            <p className="text-slate-600 mb-4">
              회사는 개인정보의 안전성 확보를 위해 다음의 조치를 취합니다.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>개인정보의 암호화</li>
              <li>접근권한의 제한 및 관리</li>
              <li>보안 시스템의 구축 및 운영</li>
              <li>개인정보 처리 담당자의 교육</li>
            </ul>
          </section>

          {/* 제6조 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              제6조 개인정보 수정 및 삭제
            </h2>
            <p className="text-slate-600 mb-4">
              이용자는 다음과 같은 방법으로 자신의 개인정보를 수정하거나 삭제할
              수 있습니다.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>홈페이지의 마이페이지에서 수정</li>
              <li>고객센터에 요청 (전화 또는 이메일)</li>
              <li>회원 탈퇴 신청</li>
            </ul>
          </section>

          {/* 제7조 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              제7조 개인정보 침해 시 대응
            </h2>
            <p className="text-slate-600 mb-4">
              개인정보 침해 관련 불만사항이 있는 경우 다음으로 연락하시기
              바랍니다.
            </p>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>전화: {ORGANIZATION_INFO.phone}</li>
              <li>이메일: {ORGANIZATION_INFO.email}</li>
              <li>개인정보보호위원회: www.pipc.go.kr</li>
            </ul>
          </section>

          {/* 제8조 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              제8조 쿠키와 유사한 기술의 사용
            </h2>
            <p className="text-slate-600 mb-4">
              회사는 이용자의 편의를 위해 쿠키를 사용합니다. 이용자는 브라우저
              설정을 통해 쿠키 사용을 거부할 수 있습니다. 단, 쿠키 거부 시
              서비스 이용이 제한될 수 있습니다.
            </p>
          </section>

          {/* 제9조 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              제9조 개인정보처리방침의 변경
            </h2>
            <p className="text-slate-600 mb-4">
              본 방침은 관련 법령의 변경이나 회사의 정책 변경에 따라 수정될 수
              있습니다. 변경사항은 홈페이지를 통해 공지합니다.
            </p>
          </section>

          {/* 문의 */}
          <section className="mt-12 bg-slate-50 rounded-lg p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              개인정보 관련 문의
            </h2>
            <p className="text-slate-600 mb-2">
              개인정보 관련 문의사항이 있으시면 아래로 연락주시기 바랍니다.
            </p>
            <ul className="text-slate-600 space-y-1">
              <li>
                <strong>전화:</strong> {ORGANIZATION_INFO.phone}
              </li>
              <li>
                <strong>이메일:</strong> {ORGANIZATION_INFO.email}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
