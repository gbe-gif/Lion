import { Card } from '../components/Card';
import { Terminal, Smartphone, Newspaper, FastForward } from 'lucide-react';

const CommandItem = ({ name, desc, example }: { name: string, desc: string, example?: React.ReactNode }) => (
  <div className="border-b border-[rgba(212,175,55,0.15)] pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
    <div className="flex items-center gap-2 mb-1.5">
      <span className="font-mono text-gold bg-gold/10 border border-gold/20 px-2 py-0.5 rounded-sm text-xs tracking-wider shadow-sm">{name}</span>
    </div>
    <p className="text-xs text-[#C0C0C0] opacity-90 leading-relaxed mb-2.5">
      {desc}
    </p>
    {example && (
      <div className="bg-[#0A0D14] border border-white/5 p-3 rounded-sm text-[11px] text-white/60 leading-relaxed whitespace-pre-wrap">
        {example}
      </div>
    )}
  </div>
);

export default function CommandsView() {
  return (
    <div className="space-y-6 pb-6">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-serif text-[#C0C0C0] mb-2 mt-4 italic">인터랙티브 명령어</h2>
        <p className="opacity-50 text-[10px] font-sans tracking-widest uppercase">Interactive Commands</p>
      </div>

      <Card title="시스템 제어" subtitle="System Controls" icon={<Terminal size={20} strokeWidth={1.5} />}>
        <CommandItem 
          name="/사칭"
          desc="AI가 유저의 행동이나 대사를 대신 작성(사칭)했을 때 하지마! 때리기"
        />
        <CommandItem 
          name="/AS (내용)"
          desc="AI가 앵무새처럼 유저의 응답을 따라 하거나, 문체 및 발화 형식이 붕괴되었을 때 전반적인 교정(A/S)을 지시함"
          example={<><span className="text-gold/60 block mb-1">예시:</span>/AS (발화 형식이 무너졌어요. 다시 묘사해 주세요.)</>}
        />
        <CommandItem 
          name="/이미지 (내용)"
          desc="삽입된 이미지가 정상적으로 출력되지 않거나 누락되었을 때 재출력을 요청함"
          example={<><span className="text-gold/60 block mb-1">예시:</span>/이미지 (빅토르 이미지가 안 나옴)</>}
        />
        <CommandItem 
          name="/요약"
          desc="장기기억에 넣기 좋게 가공된 요약 기능을 제공함. 15~20턴 사이에 사용하는 걸 적극 권장함 (자동 저장이 쌓일 시, 오히려 찐빠가 잦아져요)"
          example={
            <>
              <span className="text-gold/60 block mb-2">예시:</span>
              <span className="text-white/80">🔸 <strong>사교계 팬픽과 인스타 도발</strong><br/>
              [2026.06.26/18:32~19:25]<br/>
              - 사교계 익명 게시판에 레온과 ㅇㅇ의 오빠를 엮은 광기의 팬픽이 올라와 회사와 루이를 경악하게 함<br/>
              - 루이는 헥터에게 해당 게시판 폐쇄 및 ㅇㅇ의 오빠 이동 지연을 지시함<br/>
              - 자택 연금 중인 ㅇㅇ가 타이트한 옷을 입고 인스타에 향수 홍보 사진을 올려 루이를 도발함<br/>
              - 루이 → ㅇㅇ: [후원자 / 어이없음과 기특함 / 통제와 소유욕]</span>
            </>
          }
        />
      </Card>

      <Card title="세계관 엿보기" subtitle="Sneak Peek" icon={<Smartphone size={20} strokeWidth={1.5} />}>
        <CommandItem 
          name="/루이"
          desc="루이의 개인 휴대폰을 몰래 훔쳐보는 기믹으로, 구매 내역이나 검색 기록 등을 확인 가능함"
          example={
            <>
              <span className="text-gold/60 block mb-2">예시:</span>
              <span className="text-white/80">📱 <strong>[2026.07.27]</strong><br/>
              ➤ <strong>구매 내역:</strong> [개인 카드] 프라이빗 갤러리 경매 - 19세기 프랑스 앤틱 은제 조향 도구 세트: 45,000 GBP (배송 대기)<br/>
              ➤ <strong>검색 내역:</strong> "런던 핫플레이스 임대료 시세"</span>
            </>
          }
        />
        <CommandItem 
          name="/친구톡 (추가 인물)"
          desc="루이, 레온, 빅토르가 있는 단톡방을 엿봄. 유저 노트로 만든 추가 인물을 초대할 수도 있음"
          example={
            <>
              <span className="text-gold/60 block mb-2">예시: /친구톡 (에이든, 노아도 추가)</span>
              <span className="text-white/80">[에이든]✔️ 야 이 미친 사자새끼야 ㅡㅡ 너 내 동생 어딨는지 안다며. 이게 무슨 개소리야.<br/>
              [노아]✔️ L. ㅇㅇ이 털끝 하나 건드리지 말고 당장 본가로 데려와.<br/>
              [레온]✔️ [📷성당 정원 한구석에서 짐 챙기는 뒷모습 줌인 사진] 형 미쳤어? ㅋㅋㅋㅋ 진짜 헬기 띄운 거야? ㅋㅋㅋㅋ 환장하겠다 ㅋㅋㅋㅋ<br/>
              [빅토르]✔️ 루이... 제발 이성적으로 생각해. 지금 네가 ㅇㅇ 양을 데리고 나타나면 엘라 체스터가 무슨 기사를 쓸지 상상도 안 가?<br/>
              [루이]✔️ 헥터가 알아서 잘 포장할 거야.</span>
            </>
          }
        />
        <CommandItem 
          name="/가족톡"
          desc="펜브룩 가문의 가족 단톡방을 엿봄"
          example={
            <>
              <span className="text-gold/60 block mb-2">예시:</span>
              <span className="text-white/80">[레온]✔️ [📷아부다비에서 찍은 셀카] 잘생긴 아들 보고 가세요~<br/>
              [아빠]✔️ 루이, 오늘 본가에 들리거라.</span>
            </>
          }
        />
        <CommandItem 
          name="/어플"
          desc="루이와 비서 헥터의 보안 메신저 내역이나 루이의 은밀한 개인 일기를 확인함"
          example={
            <>
              <span className="text-gold/60 block mb-2">예시:</span>
              <span className="text-white/80">🛡️ <strong>[Protected by Argentmane.D]</strong><br/>
              🗨️ [19:49] → 헥터 발렌 발신: 알렉세이 동향 체크해<br/>
              📝 <strong>[개인 메모]</strong> 나를 너무 쉽게 믿는다. 에이든의 친구라는 이유 하나만으로. 그 무방비함이, 그 예측 불가능함이 미치도록 사람을 홀린다.</span>
            </>
          }
        />
      </Card>

      <Card title="미디어 & 반응" subtitle="Media & Reactions" icon={<Newspaper size={20} strokeWidth={1.5} />}>
        <CommandItem 
          name="/찌라시"
          desc="파파라치 엘라 체스터가 작성한 자극적인 타블로이드 기사를 확인함"
          example={
            <>
              <span className="text-gold/60 block mb-2">예시:</span>
              <span className="text-white/80">🗞️ 🔥 <strong>Chester Exclusive</strong> 🔥<br/>
              [단독] "대서양을 건너온 로맨스?" 재벌가 막내딸 T양, 미국 유명 쿼터백의 헬멧 속 여인으로 지목!<br/>
              ✍️ Reporter: E.C ｜ 🕒 10 mins ago ｜ 👀 845,210</span>
            </>
          }
        />
        <CommandItem 
          name="/SNS"
          desc="루이의 공식 인스타 본계정과 은밀한 부계정의 최신 게시물을 확인함"
          example={
            <>
              <span className="text-gold/60 block mb-2">예시:</span>
              <span className="text-white/80">👤 <strong>@louis_m_penbrook</strong>👑<br/>
              📍Heathrow VIP Terminal (❤️ 14,235 💬 892 ↗️)<br/><br/>
              👤 <strong>@Lion_Stealth</strong>👑<br/>
              📍Somewhere in a Bentley (❤️ 4 💬 3 ↗️)</span>
            </>
          }
        />
        <CommandItem 
          name="/사교계팬픽"
          desc="사교계 익명 게시판에 올라온 핫가이 대상 광기의 허접한 팬픽을 감상함 (프로챗 2.5 강력 권장, 언셒의 경우 19금 팬픽)"
          example={
            <>
              <span className="text-gold/60 block mb-2">예시:</span>
              <span className="text-white/80">[⚠️이 내용은 픽션입니다]<br/>
              『엘라이언스x레니온｜광기의 레이싱』<br/>
              끼이익! 검은 스포츠카가 메이페어 한복판을 가로질렀다. 운전석에는 F1계의 천재 레이서 레니온이 앉아 있었다. 그의 은빛 장발이 휘날렸고, 짙은 회색 눈동자는 옆자리 남자를 향해 이글거렸다. "큭큭... 형, 오늘따라 왜 이렇게 까칠해? 마치 발정 난 고양이처럼 ( ͡° ͜ʖ ͡°)" 레니온이 조수석에 구겨진 195cm의 거구 엘라이언스를 쳐다봤다. 엘라이언스의 흑발 사이로 쫑긋 솟은 늑대 귀가 불만스럽게 파닥거렸다.</span>
            </>
          }
        />
        <CommandItem 
          name="/캐럿"
          desc="세계관 내 동네 중고 거래 앱의 뜬금없는 매물을 확인함"
          example={
            <>
              <span className="text-gold/60 block mb-2">예시:</span>
              <span className="text-white/80">🥕 <strong>우리동네 매물 확인</strong><br/>
              🛍️ 남성 의류｜아르만 수트 자켓 (사이즈 XL)<br/>
              소호｜3시간 전｜£300 (네고 ⭕)<br/>
              👤 짐승남의눈물 (🌡️36.2) : 가슴 근육 키우다 작아져서 못 입습니다. 입고 두 번 외출했어요. 직거래 선호. (💬3 ❤️8 👥115)</span>
            </>
          }
        />
        <CommandItem 
          name="/사내"
          desc="아전트메인 다이내믹스 사내 익명 커뮤니티의 동향을 확인함"
          example={
            <>
              <span className="text-gold/60 block mb-2">예시:</span>
              <span className="text-white/80">[🗣️사내소식｜👤커피머신도둑｜제목: 야 신사업부 지금 분위기 왜 저래?] (👀 842 💬 15)<br/>
              아니 나 방금 결재받으러 22층 올라갔는데 분위기 살벌하다. 본부장님이 비서실장님 호출해서 익명 서버 하나 터트리라고 지시하심. (❤️ 145 ⭐ 32)<br/>
              ↳ 👤보안팀막내: 내가 살짝 주워들었는데... 약점은 아니고... 엄청난 팬픽이 하나... (말잇못) (👍 105 👎 0)</span>
            </>
          }
        />
        <CommandItem 
          name="/댓글반응"
          desc="이 상황이 웹툰으로 연재 중이라면 달렸을 독자들의 실시간 가상 댓글을 확인함"
          example={
            <>
               <span className="text-gold/60 block mb-2">예시:</span>
               <span className="text-white/80">🖥️ <strong>『나쁜 사자 17화』 댓글</strong><br/>
               ◽ 흉부빵빵: 루이 폭스련아!!! 겉옷 다시 입혀주면서 백허그 하는 거 미쳤나고ㅠㅠ (👍4,521 👎12)<br/>
               ↳ ▫️ 루이의플라잉스퍼: 제임스 기사님 룸미러로 백허그 직관 중...</span>
            </>
          }
        />
        <CommandItem 
          name="/아줌마반응"
          desc="이 상황이 멜로 드라마라면 달렸을 시청자 게시판의 리얼한 가상 반응을 확인함"
          example={
            <>
               <span className="text-gold/60 block mb-2">예시:</span>
               <span className="text-white/80">📺 <strong>『나쁜 사자 24화』 봤어?</strong><br/>
               ◻️ 최미자: 우리 바깥양반도 옛날엔 왕자 복근 있었는데 지금은 배불뚝이 고릴라야 ㅋㅋㅋ 에휴 내 팔자야~<br/>
               ↳ ▫️ 박순옥: 울 남편도 고릴라긴 한데 근육은 없고 털만 많아 ㅋㅋㅋㅠㅠ</span>
            </>
          }
        />
      </Card>

      <Card title="서사 전개" subtitle="Narrative Flow" icon={<FastForward size={20} strokeWidth={1.5} />}>
        <CommandItem 
          name="/돌발"
          desc="갑자기 뜬금없는 기행을 일삼는 인물이 난입하여 상황을 와장창 깨버리는 개그 전개를 유도함"
        />
        <CommandItem 
          name="/스킵"
          desc="현재 상황에서 일주일~한 달 사이의 시간을 점프하여, 서사의 새로운 국면 직전으로 곧바로 이동함"
        />
      </Card>
      
      <div className="h-4"></div>
    </div>
  );
}
