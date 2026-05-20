import { Circle, CircleDot, Lock } from 'lucide-react';

export default function RomanceView() {
  return (
    <div className="space-y-6 pb-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-serif text-[#C0C0C0] mb-2 mt-4 italic">로맨스 가이드</h2>
        <p className="opacity-50 text-[10px] font-sans tracking-widest uppercase">Romance Dynamics</p>
      </div>

      <div className="relative border-l border-white/10 ml-4 pl-6 pb-2">
        <div className="absolute -left-[13px] top-0 bg-[#080B12] p-1 rounded-full">
          <Circle size={16} className="text-[#C0C0C0] opacity-50" />
        </div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-serif text-[#C0C0C0] tracking-wide italic">Phase ⚪: Logic & Instinct</h3>
          <span className="text-[10px] py-1 px-2 border border-white/20 rounded-full hidden sm:inline-block">CURRENT</span>
        </div>
        
        <div className="bg-[rgba(15,20,30,0.8)] border border-[rgba(212,175,55,0.15)] rounded-sm p-5 mb-4 space-y-5">
          <div>
            <h4 className="text-gold font-serif text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
              현재 상황
            </h4>
            <p className="text-xs font-light text-[#C0C0C0] opacity-80 leading-relaxed">
              안정적인 경영권 승계와 영향력 확대를 위해 유력 가문들과 정략결혼을 논의 중임.<br/>
              이사진의 견제와 파파라치의 타겟이 되어 철저히 스캔들을 조심해야 하는 상태임.
            </p>
          </div>
          <div className="border-t border-[rgba(212,175,55,0.15)] pt-4">
            <h4 className="text-gold font-serif text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
              관계 방향성
            </h4>
            <p className="text-sm font-serif italic text-gold/80 leading-relaxed">
              "루이의 고뇌하는 방어기제에서 발현되는 밀당"
            </p>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"></div>

      <div className="mt-4 p-4 bg-black/40 text-[10px] text-center italic tracking-widest uppercase border border-white/5 mx-4 mb-6">
          Transition: [ 🔒 스포성 정보: 메인댓글 확인 ]
      </div>

      <div className="relative border-l border-gold/40 ml-4 pl-6 pt-2">
        <div className="absolute -left-[13px] top-0 bg-[#080B12] p-1 rounded-full">
          <CircleDot size={16} className="text-gold" />
        </div>
        <div className="flex justify-between items-center mb-4 opacity-50">
          <h3 className="text-xl font-serif text-[#C0C0C0] tracking-wide italic">Phase ⚫: Pure Obsession</h3>
          <span className="text-gold text-[10px] hidden sm:inline-block">🔒 LOCKED</span>
        </div>
        
        <div className="bg-[rgba(15,20,30,0.8)] border border-[rgba(212,175,55,0.15)] rounded-sm p-5 mb-4 space-y-5 relative overflow-hidden">
          <div>
            <h4 className="text-gold font-serif text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
              현재 상황
            </h4>
            <p className="text-xs font-light text-[#C0C0C0] opacity-80 leading-relaxed">
              모든 방해 요소를 통제하고 승계 구도 안정화를 끝마침.<br/>더 이상 억누를 것 없이 유저를 향해 온전히 직진할 수 있는 환경이 조성됨.
            </p>
          </div>
          <div className="border-t border-[rgba(212,175,55,0.15)] pt-4">
            <h4 className="text-gold font-serif text-[10px] uppercase tracking-widest mb-2 flex items-center gap-2">
              관계 방향성
            </h4>
            <p className="text-sm font-serif italic text-gold/80 leading-relaxed">
              "책임을 기반으로 한 관능적 직진 로맨스"
            </p>
          </div>
        </div>
      </div>
      <div className="h-4"></div>
    </div>
  );
}
