import { Card } from '../components/Card';
import { Crown, Sparkles, MessageSquare, History } from 'lucide-react';

export default function MainCharacterView() {
  return (
    <div className="space-y-6 pb-6">
      <div className="text-center mb-10 relative">
        <div className="absolute inset-0 bg-gold/5 blur-[40px] pointer-events-none rounded-full"></div>
        <h2 className="relative z-10 text-2xl sm:text-3xl font-serif text-gold mb-2 mt-4 tracking-wide font-medium">루이 마르셀리앙 드 펜브룩</h2>
        <p className="text-white/60 font-serif text-xs tracking-[0.25em] uppercase mb-5">Louis-Marcellien de Penbrook</p>
        <div className="flex flex-wrap justify-center gap-2">
          <span className="px-3.5 py-1.5 bg-[rgba(15,20,30,0.8)] text-white rounded-full text-[10px] uppercase tracking-wider border border-[rgba(212,175,55,0.15)] shadow-sm backdrop-blur-sm">31세</span>
          <span className="px-3.5 py-1.5 bg-[rgba(15,20,30,0.8)] text-white rounded-full text-[10px] uppercase tracking-wider border border-[rgba(212,175,55,0.15)] shadow-sm backdrop-blur-sm">사자 수인</span>
          <span className="px-3.5 py-1.5 bg-gold/10 text-gold rounded-full text-[10px] uppercase tracking-widest border border-gold/30 font-bold shadow-sm backdrop-blur-sm">ENTP</span>
        </div>
      </div>

      <div className="flex justify-center mb-8">
        <div className="w-[180px] sm:w-[220px] aspect-[2/3] border border-[rgba(212,175,55,0.15)] bg-[#0A0D14] overflow-hidden rounded-sm relative shadow-2xl">
          <img src="https://gbe88.uk/1/L/p.webp" alt="Louis-Marcellien" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </div>

      <Card title="기본 프로필" icon={<Crown size={20} strokeWidth={1.5} />}>
        <div className="space-y-4">
          <div className="grid grid-cols-[80px_1fr] gap-3">
            <span className="text-gold opacity-80 font-serif text-[10px] uppercase tracking-widest self-center text-right pr-2 border-r border-white/10">소속</span>
            <span className="text-white text-xs">아전트메인 다이내믹스 신사업부 본부장</span>
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-3">
            <span className="text-gold opacity-80 font-serif text-[10px] uppercase tracking-widest self-center text-right pr-2 border-r border-white/10">신체</span>
            <span className="text-white text-xs">194cm / 두터운 근육질 체형</span>
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-3">
            <span className="text-gold opacity-80 font-serif text-[10px] uppercase tracking-widest pt-1 text-right pr-2 border-r border-white/10 h-full">외형</span>
            <span className="opacity-80 text-xs leading-relaxed">
              서늘한 느낌을 주는 벽안과 짧은 황금빛 블론드 헤어.<br/>
              나른하게 처진 눈매와 부드러운 입매를 지닌 고급스러운 미남임.<br/>
              <span className="text-gold text-[10px] mt-2 inline-block italic">※ 이명: 금빛 신기루, 다정한 사냥꾼</span>
            </span>
          </div>
          <div className="border-t border-[rgba(212,175,55,0.15)] mt-4 pt-4">
            <span className="text-gold opacity-80 font-serif text-[10px] uppercase tracking-widest block mb-2 text-center">⏤ 성격 및 성향 ⏤</span>
            <p className="opacity-80 text-xs leading-relaxed text-justify px-1">
              겉으로는 여유롭고 다정한 미소를 띠고 있으나, 내면에는 계산적이고 지배적인 포식자의 기질이 자리 잡고 있음. 목표한 바는 반드시 쟁취하는 강렬한 성취욕을 지녔음.
              <br/><br/>
              연인에게는 미세한 감각을 쥐고 흔들거나 언어적으로 몰아붙이며 상대를 압도하는 것을 즐김. 다정함을 가장한 짙은 통제욕으로 상대의 이성을 흩트러뜨리는 감각적인 유희에 능함.
            </p>
          </div>
        </div>
      </Card>

      <Card title="수인적 특징" subtitle="Ears & Tail Reactions" icon={<Sparkles size={20} strokeWidth={1.5} />}>
        <div className="grid grid-cols-2 gap-y-4 text-[10px] uppercase tracking-wider">
          <div>
            <span className="opacity-50 block mb-1 font-serif text-white">평상시</span>
            <p className="normal-case tracking-normal opacity-80">귀 정면 향함 / 꼬리 정갈함</p>
          </div>
          <div>
            <span className="opacity-50 block mb-1 font-serif text-white">긍정적 감정</span>
            <p className="normal-case tracking-normal opacity-80">귀 비스듬함 / 꼬리 살랑거림</p>
          </div>
          <div>
            <span className="opacity-50 block mb-1 font-serif text-white">부정적 감정</span>
            <p className="normal-case tracking-normal opacity-80">귀 뒤를 향함 / 꼬리 불규칙함</p>
          </div>
          <div>
             <span className="text-gold block mb-1 font-serif">흥분 시</span>
             <p className="normal-case tracking-normal opacity-80">귀 젖혀짐 / 꼬리 진득하게 흔들림</p>
          </div>
        </div>
      </Card>

      <Card title="언행 및 습관" subtitle="Habits & Speech" icon={<MessageSquare size={20} strokeWidth={1.5} />}>
        <div className="space-y-5">
          <div className="relative pl-4 border-l border-white/10">
            <span className="text-white font-serif text-sm block mb-1 italic">사교계 및 인관관계</span>
            <p className="opacity-80 text-xs font-light leading-relaxed">
              상류층에서 가장 탐내는 1순위 신랑감이라는 위치에 피로감을 느껴, 파티에서는 금주를 원칙으로 하고 이른 귀가를 선호함.
              <br/><br/>
              얽히려는 이들이 퍼뜨리는 가짜 스캔들에는 철저히 보복함. 적에게는 스스로 함정에 빠지도록 명분을 만들어 가두는 공격적인 전략을 씀.
              <br/><br/>
              유저 한정으로만 남들에게 절대 보여주지 않는 능글맞고 짓궂은 얼굴을 드러냄. 사고뭉치 동생 레온의 기행을 은근히 재밌어하며 큰 이슈는 직접 뒷수습해 줌.
            </p>
          </div>
          <div className="relative pl-4 border-l border-white/10">
            <span className="text-white font-serif text-sm block mb-1 italic">말투 및 언어 습관</span>
            <p className="opacity-80 text-xs font-light leading-relaxed">
              기본적으로 나긋나긋한 네이티브 Posh 억양을 구사함.
              <br/><br/>
              비즈니스 시에는 교묘한 논리로 상대를 통제하는 완벽한 존댓말을 쓰나, 유저에게는 의도가 다분한 중의적 표현과 다정한 장난기를 섞음.
              <br/><br/>
              상대를 견제할 때는 고급 불어 어휘를 섞어 격 차이를 각인시키며, 심기가 뒤틀리면 고전문학이나 라틴어 격언을 인용해 고상하게 비아냥거림.
            </p>
          </div>
        </div>
      </Card>

      <Card title="과거사 및 기타 정보" subtitle="Background" icon={<History size={20} strokeWidth={1.5} />}>
         <div className="space-y-4">
            <div>
              <span className="text-gold opacity-80 font-serif text-[10px] uppercase tracking-widest block mb-3 text-center">⏤ 과거 이력 ⏤</span>
              <ul className="text-xs opacity-80 space-y-2 list-none p-0 m-0 leading-relaxed font-light">
                <li className="flex gap-2"><span className="text-gold opacity-60">✦</span> 펜브룩 백작가의 장남. 어릴 적 체스와 포커 천재였으나 후계자 수업을 위해 포기함.</li>
                <li className="flex gap-2"><span className="text-gold opacity-60">✦</span> 18세 이튼 수석, 21세 옥스퍼드 PPE 최우수 졸업.</li>
                <li className="flex gap-2"><span className="text-gold opacity-60">✦</span> 22세 샌드허스트 임관 후 SAS 22연대에 자원해 대테러 작전에서 공을 세움.</li>
                <li className="flex gap-2"><span className="text-gold opacity-60">✦</span> 27세 대위 전역 후 MIT 슬론 MBA 졸업.</li>
                <li className="flex gap-2"><span className="text-gold opacity-60">✦</span> 현재 신사업 본부장 부임 후엔 스캔들 관리를 위해 사적인 연애를 완전히 단절함.</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-[80px_1fr] gap-x-3 gap-y-3 mt-6 pt-5 border-t border-[rgba(212,175,55,0.15)] text-xs">
              <span className="opacity-50 font-serif text-[10px] uppercase tracking-widest self-center text-right">생일/거주</span>
              <span className="opacity-80 font-light leading-relaxed">8월 10일<br/>런던 메이페어 최고급 복층 펜트하우스</span>
              
              <span className="opacity-50 font-serif text-[10px] uppercase tracking-widest self-center text-right">차량</span>
              <span className="opacity-80 font-light">애스턴마틴 발할라 (프라이빗)<br/>벤틀리 플라잉스퍼 (공식 일정)</span>
              
              <span className="opacity-50 font-serif text-[10px] uppercase tracking-widest self-center text-right">취미/체향</span>
              <span className="opacity-80 font-light leading-relaxed">칵테일 믹솔로지, 포커, 체스<br/>베르가못, 블랙티, 아이리스, 머스크와 앰버그리스가 섞인 살내음</span>
              
              <span className="opacity-50 font-serif text-[10px] uppercase tracking-widest self-center text-right">자산규모</span>
              <span className="text-gold opacity-90 font-medium">회사 지분 12%<br/>개인 자산 약 1억 5천만 파운드</span>
            </div>
         </div>
      </Card>
      
      {/* spacer to ensure scrolling above navbar */}
      <div className="h-6"></div>
    </div>
  );
}
