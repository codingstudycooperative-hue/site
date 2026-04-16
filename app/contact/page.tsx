import PageBanner from "@/components/ui/PageBanner";
import ContactForm from "@/components/ui/ContactForm";
import { ORGANIZATION_INFO } from "@/lib/constants";

export const metadata = {
  title: "수업의뢰 및 문의 | 코딩스터디 협동조합",
  description: "코딩스터디 협동조합에 수업을 의뢰하거나 문의하세요.",
};

const PROCESS_STEPS = [
  {
    number: "01",
    title: "문의 접수",
    description: "온라인 폼을 통해 문의를 접수합니다.",
  },
  {
    number: "02",
    title: "상담 및 일정 조율",
    description: "담당자가 연락하여 상세한 상담을 진행합니다.",
  },
  {
    number: "03",
    title: "교육 계획 수립",
    description: "맞춤형 교육 계획을 수립합니다.",
  },
  {
    number: "04",
    title: "교육 진행",
    description: "계획된 일정에 따라 교육을 진행합니다.",
  },
  {
    number: "05",
    title: "사후 관리",
    description: "교육 후 피드백과 사후 관리를 제공합니다.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageBanner
        title="Contact"
        subtitle="수업의뢰 및 문의"
        description="문의 주시면 빠르고 친절하게 답변드리겠습니다."
      />

      {/* 연락처 카드 */}
      <section className="py-16 px-6 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-5 items-center p-8 rounded-2xl border border-slate-100 bg-slate-50 transition-all hover:bg-white hover:border-primary-200 hover:shadow-sm">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl">
                📞
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-400 mb-1">
                  전화 문의
                </h3>
                <a
                  href={`tel:${ORGANIZATION_INFO.phoneHref}`}
                  className="text-2xl font-black text-slate-900 hover:text-primary-600 transition-colors"
                >
                  {ORGANIZATION_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-5 items-center p-8 rounded-2xl border border-slate-100 bg-slate-50 transition-all hover:bg-white hover:border-primary-200 hover:shadow-sm">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-3xl">
                📧
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-400 mb-1">
                  이메일 문의
                </h3>
                <a
                  href={`mailto:${ORGANIZATION_INFO.email}`}
                  className="text-xl sm:text-2xl font-black text-slate-900 hover:text-primary-600 transition-colors break-all"
                >
                  {ORGANIZATION_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 의뢰 절차 */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 justify-center">
            <h2 className="text-3xl font-bold text-slate-900">의뢰 절차</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.number}
                className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-primary-200 hover:shadow-sm transition-all text-center relative"
              >
                <div className="text-primary-200 text-5xl font-black leading-none mb-4 tracking-tighter">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed word-break">
                  {step.description}
                </p>
                {/* 화살표 장식 (PC 크기) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-slate-200">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 문의 폼 */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              온라인 문의 접수
            </h2>
            <p className="text-slate-500 text-lg">
              아래 폼을 작성하여 접수해주시면, 확인 후 연락드리겠습니다.
            </p>
          </div>

          <div className="bg-white border text-left border-slate-100 rounded-3xl p-8 sm:p-10 shadow-sm leading-relaxed">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
