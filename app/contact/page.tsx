import PageBanner from "@/components/ui/PageBanner";
import ContactForm from "@/components/ui/ContactForm";

export const metadata = {
  title: "수업의뢰 및 문의 | 코딩스터디 협동조합",
  description: "코딩스터디 협동조합에 수업을 의뢰하거나 문의하세요.",
};

const PROCESS_STEPS = [
  {
    number: 1,
    title: "문의 접수",
    description: "온라인 폼을 통해 문의를 접수합니다.",
  },
  {
    number: 2,
    title: "상담 및 일정 조율",
    description: "담당자가 연락하여 상세한 상담을 진행합니다.",
  },
  {
    number: 3,
    title: "교육 계획 수립",
    description: "맞춤형 교육 계획을 수립합니다.",
  },
  {
    number: 4,
    title: "교육 진행",
    description: "계획된 일정에 따라 교육을 진행합니다.",
  },
  {
    number: 5,
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
        description="문의 주시면 빠른시일내에 답변드리겠습니다."
      />

      {/* 연락처 카드 */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* 전화 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-semibold mb-2">전화 문의</h3>
              <p className="text-slate-600 mb-4">
                전화로 빠르게 상담받으실 수 있습니다.
              </p>
              <a
                href="tel:05053002452"
                className="text-blue-600 font-semibold hover:underline"
              >
                0505-300-2452
              </a>
            </div>

            {/* 이메일 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-lg font-semibold mb-2">이메일 문의</h3>
              <p className="text-slate-600 mb-4">
                이메일로 상세한 문의를 보내실 수 있습니다.
              </p>
              <a
                href="mailto:codingstudy0206@gmail.com"
                className="text-blue-600 font-semibold hover:underline"
              >
                codingstudy0206@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 의뢰 절차 */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">의뢰 절차</h2>

          {/* 타임라인 */}
          <div className="space-y-8">
            {PROCESS_STEPS.map((step, index) => (
              <div key={step.number} className="flex gap-6">
                {/* 숫자 원 */}
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white font-bold">
                    {step.number}
                  </div>
                </div>

                {/* 내용 */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>

                {/* 연결선 (마지막 제외) */}
                {index < PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-6 w-0.5 h-12 bg-blue-200 translate-y-12" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 문의 폼 */}
      <section className="py-12 sm:py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-3">문의 접수</h2>
          <p className="text-center text-slate-600 mb-10">
            아래 폼을 작성하여 문의를 접수해주세요.
          </p>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
