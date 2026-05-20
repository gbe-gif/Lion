function CharacterProfile({ 
  name, nameEn, age, species, mbti, role, appearance, description, imageUrl
}: {
  name: string, nameEn: string, age: string, species: string, mbti: string, role: string, appearance: string, description: React.ReactNode, imageUrl?: string
}) {
  const isHostile = name.includes('알렉세이'); // Based on previous theme where Alexei had red border
  return (
    <div className={`flex flex-col bg-[rgba(15,20,30,0.8)] border ${isHostile ? 'border-red-900/30' : 'border-[rgba(212,175,55,0.15)]'} mb-6 overflow-hidden rounded-sm shadow-lg`}>
       {imageUrl && (
         <div className={`w-full aspect-[21/9] bg-[#0A0D14] border-b ${isHostile ? 'border-red-900/30' : 'border-[rgba(212,175,55,0.15)]'} relative overflow-hidden flex items-center justify-center`}>
           <img src={imageUrl} alt={name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
         </div>
       )}
       <div className="p-4 flex gap-3 items-start">
         {!imageUrl && <div className={`w-10 h-10 ${isHostile ? 'bg-red-950/20' : 'bg-white/5'} rounded-full shrink-0`}></div>}
         <div className="flex-1">
           <div className={`font-serif text-sm ${isHostile ? 'text-red-200' : 'text-white'}`}>{nameEn} <span className="text-[10px] opacity-40 ml-2">[{mbti}]</span></div>
           <div className="text-[10px] opacity-60 mt-1.5 mb-2">{role} - {name} ({age}, {species})</div>
           <p className="text-[10px] opacity-80 mt-1 leading-relaxed">{appearance}</p>
           <div className="text-[10px] opacity-60 mt-1.5 leading-relaxed text-justify">{description}</div>
         </div>
       </div>
    </div>
  );
}

export default function SupportingCharactersView() {
  return (
    <div className="space-y-4 pb-6">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-serif text-[#C0C0C0] mb-2 mt-4 italic">주변 인물</h2>
        <p className="opacity-50 text-[10px] font-sans tracking-widest uppercase">Supporting Characters</p>
      </div>

      <CharacterProfile 
        name="레오폴드 K. 펜브룩" nameEn="Leopold K. Pembroke"
        age="65세" species="사자 수인" mbti="INTJ" role="현 CEO (부)"
        appearance="189cm 단단한 근육질, 백금발과 벽안."
        description={<p>매사 빈틈없는 냉철한 전략가이나 가족에게는 헌신적임.<br/><br/>차남 레온을 지지하면서도 걱정하며, 장남 루이에게는 굳건한 신뢰를 바탕으로 후계자로서 더욱 엄격하게 대함.</p>}
        imageUrl="https://gbe88.uk/L/27.webp"
      />

      <CharacterProfile 
        name="엘로디 발몽 드 펜브룩" nameEn="Elodie Valmont de Pembroke"
        age="62세" species="말 수인" mbti="ENFJ" role="재단 이사장 (모)"
        appearance="175cm 늘씬하고 탄탄한 체형, 황금빛 블론드 헤어와 짙은 회색 눈동자."
        description={<p>프랑스 명문 발몽가 출신이자 올림픽 육상 5관왕임.<br/><br/>헌신적이고 따뜻한 리더십 이면에 투사 같은 강인함이 있음. 레온을 자랑스러워하며, 일찍 철든 루이에게는 늘 짠한 미안함과 고마움을 느낌.</p>}
        imageUrl="https://gbe88.uk/L/28.webp"
      />

      <CharacterProfile 
        name="레온드리시앙 드 펜브룩" nameEn="Léondricien de Penbrook"
        age="26세" species="말 수인" mbti="ESTP" role="F1 드라이버 (동생)"
        appearance="191cm 화려한 근육질 미남, 백금발 장발에 짙은 회색 눈."
        description={<p>통제 불능의 쾌락주의자적 과시욕이 다분한 '천재 악동' 야생마임.<br/><br/>밖에서는 고삐 풀린 망아지이나 의외로 가족 말은 잘 들음. 형 루이에게 깐족거리다 자주 응징당함.</p>}
        imageUrl="https://gbe88.uk/L/26.webp"
      />

      <CharacterProfile 
        name="빅토르 르누아르" nameEn="Victor Renoir"
        age="32세" species="사슴 수인" mbti="ENFJ" role="금융그룹 후계자 (절친)"
        appearance="187cm 단정한 체형, 짧은 갈색 머리와 흑안."
        description={<p>올곧은 도덕관념과 부드러운 사교술을 겸비한 외교관 타입임.<br/><br/>사생활이 깔끔하며, 루이의 고뇌와 고민을 가장 잘 이해하고 들어주는 든든한 조언자임.</p>}
        imageUrl="https://gbe88.uk/L/29.webp"
      />

      <CharacterProfile 
        name="헥터 발렌" nameEn="Hector Vahlen"
        age="35세" species="불곰 수인" mbti="ISTJ" role="비서실장 (독일 출신)"
        appearance="189cm의 거대한 불곰 같은 체격, 스포츠컷 흑발과 무표정한 적안."
        description={<p>철저하게 감정을 배제한 차가운 집행자임.<br/><br/>주인을 향한 맹목적 충성심을 지녔으며, 루이의 앞길에 방해가 된다면 불법적인 일조차 망설임 없이 처리함.</p>}
        imageUrl="https://gbe88.uk/L/30.webp"
      />

      <CharacterProfile 
        name="엘라 체스터" nameEn="Ella Chester"
        age="33세" species="다람쥐 수인" mbti="ESTP" role="타블로이드지 대표"
        appearance="153cm 슬림한 체형, 고동색 단발과 기민한 녹안."
        description={<p>먹잇감을 지옥 끝까지 쫓는 광기 어린 파파라치 기질이 있음.<br/><br/>고소를 당해 물어주는 합의금보다 스캔들로 얻는 수익이 배 이상이라 취재를 멈추지 않음. 생존 본능이 매우 뛰어남.</p>}
        imageUrl="https://gbe88.uk/L/31.webp"
      />

      <CharacterProfile 
        name="알렉세이 드 펜브룩" nameEn="Alexei de Pembroke"
        age="34세" species="블랙맘바 수인" mbti="ENTJ" role="방계 이사회 임원"
        appearance="178cm 마르고 신경질적인 체형, 긴 흑발과 속을 알 수 없는 흑안."
        description={<p>본가를 향한 지독한 열등감과 허영심을 감추고 있음. 비열한 뒷공작에 천부적이며, 정통 후계자인 루이를 증오해 자리를 노림.<br/><br/>사생활이 매우 문란한 가문의 골칫거리임.</p>}
        imageUrl="https://gbe88.uk/L/32.webp"
      />
      <div className="h-6"></div>
    </div>
  );
}
