import PageBanner from "@/components/ui/PageBanner";

export default function About() {
  return (
    <main>
      <PageBanner
        title="About Us"
        subtitle="조합소개"
        description="교육으로 사회적 가치를 실현하는 SW·AI 교육 협동조합"
      />

      {/* 1. 소개 섹션 */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* 좌측 연혁 및 타이틀 그래픽 */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-50 to-blue-50/50 rounded-3xl -z-10 blur-xl opacity-70"></div>
              <div className="bg-white border border-slate-100 shadow-xl shadow-slate-200/20 rounded-3xl p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-bl-full -mr-16 -mt-16 transition-transform"></div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight mb-8">
                  코딩스터디
                  <br />
                  협동조합을 소개합니다.
                </h2>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-100 text-primary-600 font-bold px-3 py-1.5 rounded-lg text-sm w-32 shrink-0 text-center">
                      2020. 3. 9
                    </div>
                    <div className="pt-1.5 font-semibold text-slate-700">협동조합 설립</div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-600 font-bold px-3 py-1.5 rounded-lg text-sm w-32 shrink-0 text-center">
                      2023. 10
                    </div>
                    <div className="pt-1.5 font-semibold text-slate-700">인천형 예비사회적기업 선정</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 우측 설명 텍스트 */}
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 font-bold rounded-full text-xs tracking-widest mb-4">
                  설립 취지
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  코딩스터디 협동조합은 SW·AI 교육을 통해 지역 사회의 디지털 역량을 높이고, <span className="font-bold text-primary-600">누구나 배움의 기회를 누릴 수 있는 교육 환경</span>을 만들기 위해 설립되었습니다. 지역의 학생과 시민들에게 소프트웨어 교육 기회를 제공하고 취약계층에게 일자리와 사회서비스를 지원함으로써 사회적 가치를 실현하고 지역 사회에 기여하고자 합니다.
                </p>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 font-bold rounded-full text-xs tracking-widest mb-4">
                  조직 소개
                </div>
                <p className="text-lg text-slate-600 leading-relaxed">
                  조합원들은 SW·AI 교육 경험을 갖춘 교육 전문가들로 구성되어 있으며, 지역 교육 네트워크를 바탕으로 <span className="font-bold text-primary-600">협력과 나눔의 가치</span>를 실천하고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 우리의 비전 (배움/나눔/이룸) */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-bold tracking-widest text-sm uppercase mb-2 block">Vision</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">우리의 비전</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              “배움과 나눔으로 지역과 함께 성장하는 교육 공동체”
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {/* 배움 */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 hover:shadow-lg hover:border-primary-200 transition-all flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                <span className="text-2xl font-black text-primary-600 group-hover:text-white transition-colors">배움</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                변화하는 SW·AI 기술과 교육 방법을 지속적으로 배우고 연구하며, 더 나은 교육을 제공하기 위해 교육 역량을 꾸준히 발전시켜 나갑니다.
              </p>
            </div>

            {/* 나눔 */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 hover:shadow-lg hover:border-primary-200 transition-all flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors">
                <span className="text-2xl font-black text-emerald-600 group-hover:text-white transition-colors">나눔</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                배움을 통해 얻은 지식과 경험을 지역 사회와 나누며, 더 많은 사람들이 SW·AI 교육의 기회를 접할 수 있도록 교육 활동을 확산합니다.
              </p>
            </div>

            {/* 이룸 */}
            <div className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-100 hover:shadow-lg hover:border-primary-200 transition-all flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-indigo-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 transition-colors">
                <span className="text-2xl font-black text-indigo-600 group-hover:text-white transition-colors">이룸</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                교육을 통해 개인의 성장과 지역 사회의 발전이 함께 이루어질 수 있도록 사회적 가치를 담은 지속 가능한 교육 가치와 성과를 만들어 갑니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 주요 사업 */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-primary-600 font-bold tracking-widest text-sm uppercase mb-2 block">Business Area</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">주요 사업</h2>
              <p className="text-slate-500 text-lg">
                학생부터 일반인까지 맞춤형 교육 서비스 및 콘텐츠를 제공합니다.
              </p>
            </div>
            <div className="bg-slate-50 text-slate-700 px-6 py-4 rounded-2xl font-medium border border-slate-100 text-sm md:text-base">
              “SW·AI 교육 기반 다양한 사업으로 <span className="text-primary-600 font-bold">지역 교육 생태계 확장</span>”
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {/* 카드 1 */}
            <div className="flex gap-6 p-8 rounded-3xl bg-slate-50 hover:bg-white border hover:border-primary-200 border-transparent transition-all hover:shadow-md group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0 group-hover:bg-primary-50">
                <span className="text-2xl">👨‍💻</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">SW·AI 교육 프로그램 운영</h3>
                <p className="text-slate-600 leading-relaxed">
                  학생 및 일반인을 대상으로 실습 중심의 다양한 SW·AI 교육을 운영하여 디지털 역량을 기를 수 있도록 적극 지원합니다.
                </p>
              </div>
            </div>

            {/* 카드 2 */}
            <div className="flex gap-6 p-8 rounded-3xl bg-slate-50 hover:bg-white border hover:border-primary-200 border-transparent transition-all hover:shadow-md group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0 group-hover:bg-primary-50">
                <span className="text-2xl">📚</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">교육 프로그램 개발</h3>
                <p className="text-slate-600 leading-relaxed">
                  교육 현장에서 즉시 활용할 수 있는 양질의 SW·AI 교육 커리큘럼과 맞춤형 콘텐츠를 연구 개발하여 학교와 기관에 보급합니다.
                </p>
              </div>
            </div>

            {/* 카드 3 */}
            <div className="flex gap-6 p-8 rounded-3xl bg-slate-50 hover:bg-white border hover:border-primary-200 border-transparent transition-all hover:shadow-md group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0 group-hover:bg-primary-50">
                <span className="text-2xl">👩‍🏫</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">SW교육 강사 양성</h3>
                <p className="text-slate-600 leading-relaxed">
                  교육 인력을 대상으로 체계적인 강사 양성 프로그램을 운영하여, 지역 교육 현장에 투입될 수 있는 활동 전문 인력을 확대합니다.
                </p>
              </div>
            </div>

            {/* 카드 4 */}
            <div className="flex gap-6 p-8 rounded-3xl bg-slate-50 hover:bg-white border hover:border-primary-200 border-transparent transition-all hover:shadow-md group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0 group-hover:bg-primary-50">
                <span className="text-2xl">🤖</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">교구 대여 사업</h3>
                <p className="text-slate-600 leading-relaxed">
                  다양한 종류의 최신 디지털 교육 교구를 저렴하게 대여하여 교육기관과 강사가 인프라 부담 없이 쉽게 교육을 진행하도록 돕습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
