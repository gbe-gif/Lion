import { useState } from 'react';
import { Lock } from 'lucide-react';

export default function GalleryView() {
  const [activeSubTab, setActiveSubTab] = useState<'common' | 'secret'>('common');
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === '83920471L') {
      setIsUnlocked(true);
      setPasswordInput('');
    } else {
      alert('오답입니다');
    }
  };

  const commonImages = Array.from({ length: 14 }, (_, i) => i + 1).concat([24, 25]);
  const secretImages = Array.from({ length: 9 }, (_, i) => i + 15);

  return (
    <div className="space-y-6 pb-6">
      <div className="flex justify-center gap-2 mb-6 border-b border-white/5 pb-2">
        <button 
          onClick={() => setActiveSubTab('common')}
          className={`px-4 py-2 font-serif text-sm transition-all ${activeSubTab === 'common' ? 'text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]' : 'text-[#C0C0C0] opacity-50 hover:opacity-100'}`}
        >
          수록 이미지
        </button>
        <span className="text-white/10 self-center">|</span>
        <button 
          onClick={() => setActiveSubTab('secret')}
          className={`px-4 py-2 font-serif text-sm transition-all ${activeSubTab === 'secret' ? 'text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]' : 'text-[#C0C0C0] opacity-50 hover:opacity-100'}`}
        >
          언세이프 전용 이미지
        </button>
      </div>

      <div style={{ display: activeSubTab === 'common' ? 'block' : 'none' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-max">
          {commonImages.map(num => (
            <div key={num} className="bg-[#0A0D14] border border-[rgba(212,175,55,0.15)] flex items-center justify-center p-2 rounded-sm shadow-lg overflow-hidden min-h-[200px]">
              <img src={`https://gbe88.uk/L/${num}.webp`} alt={`Gallery image ${num}`} className="w-full h-auto object-contain max-h-[1000px]" referrerPolicy="no-referrer" loading="lazy" />
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: activeSubTab === 'secret' ? 'block' : 'none' }}>
        <div className="min-h-[400px]">
          <div style={{ display: isUnlocked ? 'none' : 'flex' }} className="flex-col items-center justify-center p-8 bg-[rgba(15,20,30,0.8)] border border-[rgba(212,175,55,0.15)] rounded-sm h-full shadow-lg min-h-[400px] mb-8">
            <Lock className="text-gold mb-5 opacity-80" size={32} strokeWidth={1.5} />
            <p className="text-[11px] text-white opacity-80 mb-6 text-center tracking-wide leading-relaxed">
              언세이프 버전 상세 정보에 있는<br/>비밀번호를 입력해주세요!
            </p>
            <form onSubmit={handlePasswordSubmit} className="flex gap-2 w-full max-w-[240px]">
              <input 
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                className="bg-[#0A0D14] border border-[rgba(212,175,55,0.3)] text-amber-100 px-3 py-2 text-sm outline-none focus:border-gold w-full rounded-sm placeholder-white/20"
                placeholder="Password"
              />
              <button type="submit" className="bg-gold/10 text-gold border border-gold/40 px-4 py-2 font-serif text-[10px] uppercase tracking-widest hover:bg-gold/20 transition-colors rounded-sm shadow-[inset_0_0_10px_rgba(212,175,55,0.1)]">
                Unlock
              </button>
            </form>
          </div>
          
          <div style={{ display: isUnlocked ? 'grid' : 'none' }} className="grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-max">
            {secretImages.map(num => (
              <div key={num} className="bg-[rgba(20,5,5,0.6)] border border-red-900/40 flex items-center justify-center p-2 rounded-sm shadow-[0_0_15px_rgba(255,0,0,0.05)] overflow-hidden min-h-[200px]">
                <img src={`https://gbe88.uk/L/${num}.webp`} alt={`Secret image ${num}`} className="w-full h-auto object-contain max-h-[1000px]" referrerPolicy="no-referrer" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-4"></div>
    </div>
  );
}
