import { Card } from '../components/Card';
import { Globe2, Building2, Flag, Shield } from 'lucide-react';

export default function WorldView() {
  return (
    <div className="space-y-6 pb-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif text-[#C0C0C0] mb-2 mt-4 italic">세계관</h2>
        <p className="opacity-50 text-[10px] font-sans tracking-widest uppercase">World & Lore</p>
      </div>

      <Card title="시대 및 종족 배경" subtitle="Era & Species" icon={<Globe2 size={24} strokeWidth={1.5} />}>
        <ul className="space-y-3 list-disc list-inside marker:text-gold marker:opacity-50">
          <li><span className="text-white font-medium">2026년</span> 현대 사회를 배경으로 함.</li>
          <li className="leading-relaxed">전체 인구의 <span className="text-gold font-medium">9%인 인간과 91%인 수인</span>이 평화롭게 공존하는 세계임.</li>
          <li className="leading-relaxed">수인은 단순한 동물과 명확히 구분되는 지성체로, 종에 상관없이 기본적으로 잡식성임.</li>
          <li>종족 간의 차별이나 계급이 존재하지 않는 완전한 평등 사회를 이룸.</li>
          <li className="leading-relaxed">이종 간(인간 포함) 결혼 및 자녀 출산 시, 자녀는 50%의 확률로 부모 중 한쪽의 종족을 그대로 물려받음.</li>
        </ul>
      </Card>

      <Card title="아전트메인 다이내믹스" subtitle="Argentmane Dynamics" icon={<Building2 size={24} strokeWidth={1.5} />}>
        <ul className="space-y-3 list-disc list-inside marker:text-gold marker:opacity-50">
          <li className="leading-relaxed">19세기 말에 창립되어 영국 런던에 본사를 둔 거대 글로벌 방위산업체임.</li>
          <li>현 CEO는 '레오폴드 K. 펜브룩'임.</li>
          <li className="leading-relaxed">유럽 내 1위, 글로벌 방산 업계 <span className="text-gold font-medium">5위권 이내의 압도적인 기업 규모</span>를 자랑함.</li>
          <li className="leading-relaxed">항공·우주 추진 기술, 스텔스기, 첨단 무기 시스템, 소형 원자로 및 신에너지 분야를 주도함.</li>
          <li className="leading-relaxed">다수의 NATO 국가와 굵직한 군수 계약을 맺고 있으며, 신사업인 로봇과 첨단 드론 분야에서도 선두를 달리고 있음.</li>
        </ul>
      </Card>

      <Card title="블랙 메인 F1 팀" subtitle="Black Mane F1 Team" icon={<Flag size={24} strokeWidth={1.5} />}>
        <ul className="space-y-3 list-disc list-inside marker:text-gold marker:opacity-50">
          <li>아전트메인 산하의 F1 레이싱 팀으로 2022년에 신규 엔트리됨.</li>
          <li>서킷 위에서 불리는 별명은 <span className="text-white font-medium">검은 사자</span>임.</li>
          <li className="leading-relaxed">퍼스트 드라이버인 '레온드리시앙'의 활약에 힘입어 2025년 시즌 우승을 거머쥠.</li>
          <li className="leading-relaxed">F1 머신의 파워트레인에 아전트메인의 군용 추진 기술이 몰래 적용되었다는 은밀한 루머가 돌고 있음.</li>
        </ul>
      </Card>

      <Card title="주요 가문" subtitle="Families" icon={<Shield size={24} strokeWidth={1.5} />}>
        <div className="space-y-5">
          <div className="bg-[#0A0D14] p-4 border border-white/5 relative overflow-hidden">
            <h3 className="font-serif text-sm text-gold mb-2 uppercase">펜브룩 백작가 (Pembroke)</h3>
            <p className="text-xs leading-relaxed opacity-80 text-[#C0C0C0]">
              고결한 '백사자' 문양을 상징으로 삼는 영국의 유서 깊은 백작 가문임.
              <br/><br/>
              대대로 내려오는 전통적인 귀족의 명예와 막강한 군수 산업 자본을 동시에 쥐고 있는 권력의 핵심임.
            </p>
          </div>
          <div className="bg-[#0A0D14] p-4 border border-white/5 relative overflow-hidden">
            <h3 className="font-serif text-sm text-gold mb-2 uppercase">발몽 가문 (Valmont)</h3>
            <p className="text-xs leading-relaxed opacity-80 text-[#C0C0C0]">
              루이의 외가이자, 프랑스 귀족 사회를 배경으로 한 뼈대 있는 명문가임.
              <br/><br/>
              상류 사회 내에서 절대적인 명예와 사회적 영향력을 보유하며, 다수의 유명 정치인과 세계적인 스포츠 스타를 배출해 낸 정치·외교·스포츠계의 큰손임.
            </p>
          </div>
        </div>
      </Card>
      <div className="h-4"></div>
    </div>
  );
}
