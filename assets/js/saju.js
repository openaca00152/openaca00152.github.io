
const STEMS=[
 {k:'갑',h:'甲',el:'목',yin:'양',img:'큰 나무',easy:'방향을 정하고 꾸준히 밀고 가는 힘'},
 {k:'을',h:'乙',el:'목',yin:'음',img:'풀과 덩굴',easy:'환경을 읽고 유연하게 연결하는 힘'},
 {k:'병',h:'丙',el:'화',yin:'양',img:'태양',easy:'표현하고 분위기를 움직이는 힘'},
 {k:'정',h:'丁',el:'화',yin:'음',img:'등불',easy:'한곳에 집중해 섬세하게 밝히는 힘'},
 {k:'무',h:'戊',el:'토',yin:'양',img:'산과 대지',easy:'큰 틀을 지키고 책임지는 힘'},
 {k:'기',h:'己',el:'토',yin:'음',img:'밭과 정원',easy:'정리하고 가꾸며 균형을 만드는 힘'},
 {k:'경',h:'庚',el:'금',yin:'양',img:'쇠와 원석',easy:'기준을 세우고 결단하는 힘'},
 {k:'신',h:'辛',el:'금',yin:'음',img:'보석과 세공',easy:'정밀하게 다듬고 완성도를 높이는 힘'},
 {k:'임',h:'壬',el:'수',yin:'양',img:'큰 강과 바다',easy:'정보와 가능성을 넓게 탐색하는 힘'},
 {k:'계',h:'癸',el:'수',yin:'음',img:'비와 이슬',easy:'세밀하게 관찰하고 조용히 축적하는 힘'}
];
const BRANCHES=[
 {k:'자',h:'子',el:'수',animal:'쥐',hidden:[9]},
 {k:'축',h:'丑',el:'토',animal:'소',hidden:[9,7,5]},
 {k:'인',h:'寅',el:'목',animal:'호랑이',hidden:[4,2,0]},
 {k:'묘',h:'卯',el:'목',animal:'토끼',hidden:[1]},
 {k:'진',h:'辰',el:'토',animal:'용',hidden:[1,9,4]},
 {k:'사',h:'巳',el:'화',animal:'뱀',hidden:[4,6,2]},
 {k:'오',h:'午',el:'화',animal:'말',hidden:[5,3]},
 {k:'미',h:'未',el:'토',animal:'양',hidden:[3,1,5]},
 {k:'신',h:'申',el:'금',animal:'원숭이',hidden:[4,8,6]},
 {k:'유',h:'酉',el:'금',animal:'닭',hidden:[7]},
 {k:'술',h:'戌',el:'토',animal:'개',hidden:[7,3,4]},
 {k:'해',h:'亥',el:'수',animal:'돼지',hidden:[4,0,8]}
];
const ELEMENTS=['목','화','토','금','수'];
const ELSYMBOL={목:'성장·기획',화:'표현·활동',토:'관리·안정',금:'판단·정리',수:'관찰·정보'};
const GOD_TEXT={
 '비견':'자기주도·동료','겁재':'경쟁·협업','식신':'생산·꾸준한 표현','상관':'개선·창의적 표현',
 '편재':'기회·외부 자원','정재':'예산·축적·관리','편관':'압력 대응·결단','정관':'책임·규칙',
 '편인':'직관·전문 탐구','정인':'학습·지원·정리'
};
const TWELVE=['장생','목욕','관대','건록','제왕','쇠','병','사','묘','절','태','양'];
const CHANGSHENG_START=[11,6,2,9,2,9,5,0,8,3]; // 甲亥 乙午 丙寅 丁酉 戊寅 己酉 庚巳 辛子 壬申 癸卯
const CITIES={
 '서울':126.9780,'부산':129.0756,'대구':128.6014,'인천':126.7052,'광주':126.8526,'대전':127.3845,
 '울산':129.3114,'세종':127.2890,
 '경기 수원':127.0286,'경기 성남':127.1262,'경기 고양':126.8320,'경기 용인':127.1776,'경기 안양':126.9568,
 '경기 부천':126.7660,'경기 안산':126.8308,'경기 화성':126.8315,'경기 평택':127.1127,'경기 의정부':127.0338,
 '경기 파주':126.7799,'경기 김포':126.7158,'경기 광주':127.2551,'경기 양평':127.4875,'경기 연천':127.0746,
 '강원 춘천':127.7298,'강원 원주':127.9202,'강원 강릉':128.8761,'강원 속초':128.5918,'강원 동해':129.1143,
 '강원 태백':128.9856,'강원 삼척':129.1650,'강원 홍천':127.8887,'강원 횡성':127.9850,'강원 양구':127.9901,
 '강원 인제':128.1705,'강원 고성':128.4678,'강원 양양':128.6191,
 '충북 청주':127.4890,'충북 충주':127.9259,'충북 제천':128.1909,'충북 보은':127.7295,'충북 옥천':127.5714,
 '충북 영동':127.7834,'충북 진천':127.4358,'충북 괴산':127.7867,'충북 음성':127.6905,'충북 단양':128.3656,
 '충남 천안':127.1522,'충남 공주':127.1190,'충남 보령':126.6128,'충남 아산':127.0046,'충남 서산':126.4503,
 '충남 논산':127.0988,'충남 계룡':127.2486,'충남 당진':126.6458,'충남 금산':127.4880,'충남 부여':126.9098,
 '충남 서천':126.6913,'충남 청양':126.8023,'충남 홍성':126.6608,'충남 예산':126.8440,'충남 태안':126.2979,
 '전북 전주':127.1480,'전북 군산':126.7366,'전북 익산':126.9578,'전북 정읍':126.8560,'전북 남원':127.3903,
 '전북 김제':126.8808,'전북 완주':127.1622,'전북 진안':127.4248,'전북 무주':127.6608,'전북 장수':127.5212,
 '전북 임실':127.2890,'전북 순창':127.1374,'전북 고창':126.7020,'전북 부안':126.7330,
 '전남 목포':126.3922,'전남 여수':127.6622,'전남 순천':127.4872,'전남 나주':126.7108,'전남 광양':127.6959,
 '전남 담양':126.9882,'전남 곡성':127.2922,'전남 구례':127.4628,'전남 고흥':127.2849,'전남 보성':127.0800,
 '전남 화순':126.9887,'전남 장흥':126.9071,'전남 강진':126.7672,'전남 해남':126.5991,'전남 영암':126.6970,
 '전남 무안':126.4817,'전남 함평':126.5166,'전남 영광':126.51245,'전남 장성':126.7849,'전남 완도':126.7554,
 '전남 진도':126.2635,'전남 신안':126.3523,
 '경북 포항':129.3435,'경북 경주':129.2247,'경북 김천':128.1137,'경북 안동':128.7294,'경북 구미':128.3446,
 '경북 영주':128.6241,'경북 영천':128.9408,'경북 상주':128.1590,'경북 문경':128.1868,'경북 경산':128.7415,
 '경북 의성':128.6970,'경북 청송':129.0571,'경북 영양':129.1124,'경북 영덕':129.3659,'경북 청도':128.7341,
 '경북 고령':128.2629,'경북 성주':128.2835,'경북 칠곡':128.4017,'경북 예천':128.4376,'경북 봉화':128.7326,
 '경북 울진':129.4006,'경북 울릉':130.9055,
 '경남 창원':128.6811,'경남 진주':128.1076,'경남 통영':128.4332,'경남 사천':128.0642,'경남 김해':128.8894,
 '경남 밀양':128.7466,'경남 거제':128.6213,'경남 양산':129.0371,'경남 의령':128.2616,'경남 함안':128.4065,
 '경남 창녕':128.4922,'경남 고성':128.3222,'경남 남해':127.8925,'경남 하동':127.7513,'경남 산청':127.8739,
 '경남 함양':127.7252,'경남 거창':127.9095,'경남 합천':128.1658,
 '제주 제주시':126.5312,'제주 서귀포':126.5600
};
const PAIRS={
 stemCombine:[[0,5],[1,6],[2,7],[3,8],[4,9]],
 clash:[[0,6],[1,7],[2,8],[3,9],[4,10],[5,11]],
 six:[[0,1],[2,11],[3,10],[4,9],[5,8],[6,7]],
 harm:[[0,7],[1,6],[2,5],[3,4],[8,11],[9,10]],
 break:[[0,9],[1,4],[2,11],[3,6],[5,8],[7,10]]
};
const THREE=[
 {b:[8,0,4],el:'수'},{b:[11,3,7],el:'목'},{b:[2,6,10],el:'화'},{b:[5,9,1],el:'금'}
];

function mod(n,m){return ((n%m)+m)%m}
function pad(n){return String(n).padStart(2,'0')}
function fmtPillar(p){return `${STEMS[p.si].h}${BRANCHES[p.bi].h}(${STEMS[p.si].k}${BRANCHES[p.bi].k})`}
function cycleIndex(si,bi){for(let i=0;i<60;i++)if(i%10===si&&i%12===bi)return i;return 0}
function tenGod(daySi,otherSi){
 const d=STEMS[daySi],o=STEMS[otherSi],di=ELEMENTS.indexOf(d.el),oi=ELEMENTS.indexOf(o.el),same=d.yin===o.yin;
 if(di===oi)return same?'비견':'겁재';
 if((di+1)%5===oi)return same?'식신':'상관';
 if((di+2)%5===oi)return same?'편재':'정재';
 if((oi+1)%5===di)return same?'편인':'정인';
 return same?'편관':'정관';
}
function twelveStage(daySi,bi){
 const start=CHANGSHENG_START[daySi], forward=(daySi%2===0);
 const n=forward?mod(bi-start,12):mod(start-bi,12);
 return TWELVE[n];
}
function termRecords(year){
 const a=window.SAJU_SOLAR_TERMS[String(year)]||[];
 return a.map((sec,i)=>({ms:sec*1000,...window.SAJU_TERM_META[i]}));
}
function allTermsAround(year){
 return [year-1,year,year+1].flatMap(termRecords).sort((a,b)=>a.ms-b.ms);
}
function liChunMs(year){return termRecords(year)[2]?.ms}
function yearPillarByUtc(utcMs,gregYear){
 let y=gregYear;
 if(utcMs<liChunMs(gregYear))y--;
 const i=mod(y-1984,60);
 return {i,si:i%10,bi:i%12,year:y};
}
const JIE_MAP={285:11,315:0,345:1,15:2,45:3,75:4,105:5,135:6,165:7,195:8,225:9,255:10};
function monthPillarByUtc(utcMs,yearP){
 const terms=allTermsAround(yearP.year);
 const jie=terms.filter(t=>JIE_MAP[t.lon]!==undefined&&t.ms<=utcMs).pop();
 const mi=JIE_MAP[jie.lon],base=[2,4,6,8,0][yearP.si%5];
 return {si:(base+mi)%10,bi:(2+mi)%12,mi,jie};
}
function localDateToUtc(y,m,d,h,min){
 // Iteratively solve Asia/Seoul historical civil time using browser IANA timezone data.
 const target=Date.UTC(y,m-1,d,h,min,0);
 const fmt=new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Seoul',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'});
 let guess=target-9*3600000;
 for(let i=0;i<4;i++){
   const p=Object.fromEntries(fmt.formatToParts(new Date(guess)).filter(x=>x.type!=='literal').map(x=>[x.type,x.value]));
   const represented=Date.UTC(+p.year,+p.month-1,+p.day,+p.hour,+p.minute,+p.second);
   guess += target-represented;
 }
 return guess;
}
function dateFromPseudoMs(ms){const x=new Date(ms);return {y:x.getUTCFullYear(),m:x.getUTCMonth()+1,d:x.getUTCDate(),h:x.getUTCHours(),min:x.getUTCMinutes()}}
function dayOfYear(y,m,d){return Math.floor((Date.UTC(y,m-1,d)-Date.UTC(y,0,1))/86400000)+1}
function equationOfTimeMinutes(y,m,d,h){
 const N=dayOfYear(y,m,d),g=2*Math.PI/365*(N-1+(h-12)/24);
 return 229.18*(0.000075+0.001868*Math.cos(g)-0.032077*Math.sin(g)-0.014615*Math.cos(2*g)-0.040849*Math.sin(2*g));
}
function trueSolarParts(utcMs,longitude){
 const u=new Date(utcMs),e=equationOfTimeMinutes(u.getUTCFullYear(),u.getUTCMonth()+1,u.getUTCDate(),u.getUTCHours()+u.getUTCMinutes()/60);
 return dateFromPseudoMs(utcMs+(longitude*4+e)*60000);
}
function dayPillar(parts,boundary){
 let ms=Date.UTC(parts.y,parts.m-1,parts.d);
 if(boundary==='23'&&parts.h>=23)ms+=86400000;
 const base=Date.UTC(2000,0,7),i=mod(Math.round((ms-base)/86400000),60);
 return {i,si:i%10,bi:i%12};
}
function hourPillar(parts,dp){
 const bi=Math.floor(((parts.h+1)%24)/2),base=[0,2,4,6,8][dp.si%5];
 return {si:(base+bi)%10,bi,h:parts.h,min:parts.min};
}
function hiddenWeights(branch){
 const a=branch.hidden;
 if(a.length===1)return [[a[0],1]];
 if(a.length===2)return [[a[0],.3],[a[1],.7]];
 return [[a[0],.15],[a[1],.25],[a[2],.6]];
}
function weightedElements(ps){
 const c={목:0,화:0,토:0,금:0,수:0};
 ps.forEach((p,idx)=>{
   if(!p)return;
   c[STEMS[p.si].el]+=1;
   hiddenWeights(BRANCHES[p.bi]).forEach(([si,w])=>c[STEMS[si].el]+=w*(idx===1?1.5:1));
 });
 return c;
}
function strength(daySi,c){
 const de=STEMS[daySi].el,di=ELEMENTS.indexOf(de),resource=ELEMENTS[mod(di-1,5)];
 const support=c[de]+c[resource],total=Object.values(c).reduce((a,b)=>a+b,0),ratio=support/total;
 const label=ratio>=.60?'강한 편':ratio<=.40?'약한 편':'중간·균형권';
 let helpers;
 if(ratio>=.60)helpers=[ELEMENTS[(di+1)%5],ELEMENTS[(di+2)%5],ELEMENTS[(di+3)%5]];
 else if(ratio<=.40)helpers=[resource,de];
 else helpers=[ELEMENTS[(di+1)%5],resource];
 return {ratio,label,helpers};
}
function findRelations(ps){
 const out=[],st=ps.filter(Boolean).map(p=>p.si),br=ps.filter(Boolean).map(p=>p.bi);
 PAIRS.stemCombine.forEach(([a,b])=>{if(st.includes(a)&&st.includes(b))out.push(`천간합 ${STEMS[a].h}${STEMS[b].h}`)});
 [['충',PAIRS.clash],['육합',PAIRS.six],['해',PAIRS.harm],['파',PAIRS.break]].forEach(([name,arr])=>{
   arr.forEach(([a,b])=>{if(br.includes(a)&&br.includes(b))out.push(`${name} ${BRANCHES[a].h}${BRANCHES[b].h}`)})
 });
 THREE.forEach(x=>{if(x.b.every(b=>br.includes(b)))out.push(`삼합 ${x.b.map(b=>BRANCHES[b].h).join('')} → ${x.el}`)});
 const unique=new Set(br);
 [4,6,9,11].forEach(b=>{if(br.filter(x=>x===b).length>=2)out.push(`자형 ${BRANCHES[b].h}${BRANCHES[b].h}`)});
 if(unique.has(0)&&unique.has(3))out.push('형 子卯');
 if([2,5,8].filter(x=>unique.has(x)).length>=2)out.push('형 寅巳申');
 if([1,7,10].filter(x=>unique.has(x)).length>=2)out.push('형 丑未戌');
 return [...new Set(out)];
}
function nextPrevJie(utcMs,direction,year){
 const ts=allTermsAround(year).filter(t=>JIE_MAP[t.lon]!==undefined);
 if(direction==='forward')return ts.find(t=>t.ms>utcMs);
 return [...ts].reverse().find(t=>t.ms<utcMs);
}
function luckDirection(yearSi,gender){
 if(!gender)return null;
 const yang=yearSi%2===0;
 return ((gender==='male'&&yang)||(gender==='female'&&!yang))?'forward':'backward';
}
function luckCycles(mp,utcMs,yp,gender){
 const dir=luckDirection(yp.si,gender); if(!dir)return null;
 const term=nextPrevJie(utcMs,dir,yp.year);
 const days=Math.abs(term.ms-utcMs)/86400000,startAge=days/3;
 const base=cycleIndex(mp.si,mp.bi),step=dir==='forward'?1:-1;
 const cycles=[];
 for(let n=1;n<=8;n++){const i=mod(base+step*n,60);cycles.push({n,i,si:i%10,bi:i%12,age:startAge+(n-1)*10})}
 return {dir,term,startAge,cycles};
}
function ageText(v){const y=Math.floor(v),m=Math.round((v-y)*12);return `${y}년 ${m}개월경`}
function formatKoreaTime(ms){
 return new Intl.DateTimeFormat('ko-KR',{timeZone:'Asia/Seoul',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(new Date(ms));
}
function seasonalName(mi){return ['봄','봄','봄','여름','여름','여름','가을','가을','가을','겨울','겨울','겨울'][mi]}
function dominantGod(daySi,ps){
 const c={};
 ps.filter(Boolean).forEach((p,idx)=>{
   if(idx!==2){const g=tenGod(daySi,p.si);c[g]=(c[g]||0)+1}
   hiddenWeights(BRANCHES[p.bi]).forEach(([si,w])=>{const g=tenGod(daySi,si);c[g]=(c[g]||0)+w})
 });
 return Object.entries(c).sort((a,b)=>b[1]-a[1]).slice(0,3);
}


const DAY_STYLE={
 목:{
  person:'새로운 가능성을 찾고 조금씩 키워가는 성향이 강한 편입니다. 한 번 방향을 정하면 시간이 걸리더라도 성장시키려는 힘이 있고, 주변의 변화에도 비교적 민감하게 반응합니다.',
  person2:'다만 계획이 많아지면 동시에 여러 가지를 벌이기 쉬우므로 “무엇을 키우고 무엇을 정리할지” 우선순위를 세우는 것이 중요합니다.',
  work:'기획·교육·성장·개선처럼 무언가를 발전시키는 일에서 보람을 느끼기 쉽습니다.',
  study:'큰 흐름을 이해한 뒤 세부 내용을 연결하고, 배운 것을 자기 방식으로 확장할 때 기억이 오래가는 편입니다.',
  relation:'관계를 단번에 판단하기보다 시간을 두고 키워가려는 성향이 있을 수 있습니다.',
  money:'돈도 단기 승부보다는 성장 가능성과 장기 계획을 보며 움직이는 방식이 잘 맞는 편입니다.',
  caution:'새로운 일을 계속 추가하다가 이미 시작한 일을 마무리하지 못하는 패턴이 없는지 살펴보세요.'
 },
 화:{
  person:'생각과 감정을 밖으로 표현하고 주변의 분위기를 움직이는 힘이 비교적 잘 드러나는 편입니다. 사람들의 반응이 빠르게 돌아오는 환경에서 에너지를 얻기 쉽습니다.',
  person2:'활동성이 장점이지만 속도가 너무 빨라지면 흥미가 식는 순간 집중력이 떨어질 수 있으므로 중요한 일에는 반복 가능한 리듬을 만드는 것이 도움이 됩니다.',
  work:'발표·영업·콘텐츠·교육·서비스처럼 사람에게 전달하고 반응을 얻는 일에서 강점을 살리기 쉽습니다.',
  study:'읽기만 하기보다 말로 설명하거나 직접 문제를 풀고 즉시 피드백을 받는 방식이 효과적일 수 있습니다.',
  relation:'따뜻하고 빠른 소통을 좋아하지만 감정이 올라왔을 때 말을 너무 앞세우지 않는 균형이 중요합니다.',
  money:'경험·사람·활동에 돈을 쓰는 만족감이 큰 편일 수 있어 즐거움 예산과 장기 자금을 분리하는 방식이 잘 맞습니다.',
  caution:'기분과 분위기에 따라 결정이 빨라지지 않는지, 중요한 선택일수록 한 번 더 확인하는 습관을 가져보세요.'
 },
 토:{
  person:'안정된 기준을 만들고 흐트러진 것을 정리하며 꾸준히 관리하는 성향이 잘 나타날 수 있습니다. 급하게 움직이기보다 상황을 정돈한 뒤 책임 있게 이어가는 방식이 편합니다.',
  person2:'주변에서는 믿음직하고 현실적인 사람으로 보일 수 있지만, 익숙한 방식을 지키려다 변화가 필요한 시점을 늦추는 경향이 없는지도 살펴볼 필요가 있습니다.',
  work:'운영·관리·조정·교육·행정처럼 구조를 유지하고 여러 일을 안정적으로 굴리는 역할에서 강점을 느끼기 쉽습니다.',
  study:'반복, 정리, 체크리스트, 자신만의 노트처럼 내용을 체계화할 때 성과가 좋아질 수 있습니다.',
  relation:'화려한 표현보다 약속을 지키고 오래 관계를 유지하는 것을 중요하게 생각하는 편일 수 있습니다.',
  money:'큰 모험보다 계획, 현금흐름, 관리 가능한 범위 안에서 움직일 때 마음이 편한 유형입니다.',
  caution:'안전하다는 이유만으로 오래된 선택을 계속 유지하고 있지는 않은지 정기적으로 점검해 보세요.'
 },
 금:{
  person:'무엇이 맞고 틀린지 기준을 세우고 불필요한 부분을 정리하며 완성도를 높이는 힘이 비교적 분명합니다. 정확성, 약속, 품질에 민감할 수 있습니다.',
  person2:'좋은 기준은 큰 장점이지만 기준이 너무 높아지면 자신과 타인을 동시에 피곤하게 만들 수 있으므로 “충분히 좋은 수준”에서 마무리하는 연습도 중요합니다.',
  work:'판단·분석·품질관리·기술·재무·법규처럼 기준이 분명하고 결과를 점검하는 업무에 잘 집중할 수 있습니다.',
  study:'틀린 부분을 찾아 수정하고 핵심을 압축해 정리하는 방식이 잘 맞을 수 있습니다.',
  relation:'예의와 약속, 서로의 경계를 중요하게 생각하며 애매한 관계보다 분명한 관계를 선호할 수 있습니다.',
  money:'낭비를 줄이고 효율을 따지는 능력이 장점이지만 지나친 보수성 때문에 필요한 투자까지 미루지 않는지 살펴보세요.',
  caution:'완벽하게 준비한 뒤 움직이려다 시작이 늦어지거나, 작은 실수에 오래 매달리지 않는지 점검해 보세요.'
 },
 수:{
  person:'흐름을 읽고 정보를 모으며 여러 가능성을 비교하는 힘이 비교적 잘 드러납니다. 겉으로 조용해 보여도 머릿속에서는 많은 선택지를 동시에 검토하는 편일 수 있습니다.',
  person2:'상황을 넓게 보는 장점이 있지만 생각이 길어지면 결정이 늦어질 수 있으므로 일정 시점에는 정보를 멈추고 실행으로 옮기는 기준이 필요합니다.',
  work:'조사·기획·상담·정보·연구·연결처럼 변화가 많고 여러 자료를 종합하는 일에서 강점을 느낄 수 있습니다.',
  study:'한 가지 교재만 보기보다 여러 자료를 비교해 맥락을 이해할 때 흥미와 이해도가 높아질 수 있습니다.',
  relation:'상대의 말뿐 아니라 분위기와 맥락을 세밀하게 읽는 편이라 깊은 대화를 중요하게 여길 수 있습니다.',
  money:'기회를 넓게 보고 유연하게 움직일 수 있지만 선택지가 많을수록 자신의 손실 기준과 예산 기준을 먼저 정해두는 것이 좋습니다.',
  caution:'생각·검색·정보수집이 길어져 행동을 미루는 패턴이 없는지 살펴보세요.'
 }
};

const GOD_STYLE={
 비견:{work:'자기 기준을 세우고 직접 책임지는 환경',study:'자기주도 학습과 반복',relation:'서로 간섭이 적고 동등한 관계',money:'내가 이해하고 통제할 수 있는 방식의 자금관리',strength:'꾸준한 자기주도성과 독립성',caution:'도움을 받아야 할 때까지 혼자 버티는 습관'},
 겁재:{work:'경쟁과 협업이 동시에 일어나는 환경',study:'비교·토론·실전 경쟁',relation:'활발한 교류와 네트워크',money:'기회 포착과 공동 자원 활용',strength:'빠른 대응과 사람을 움직이는 힘',caution:'경쟁심 때문에 지출·결정이 빨라지는 부분'},
 식신:{work:'꾸준히 결과물을 만들고 반복해서 개선하는 일',study:'반복·실습·남에게 설명하기',relation:'편안하고 안정적인 교류',money:'생활 리듬과 안정적 현금흐름',strength:'지속성·생산성·생활력',caution:'익숙하고 편한 방식에만 머무르는 부분'},
 상관:{work:'문제를 찾아 고치고 새 방식으로 표현하는 일',study:'질문·토론·응용·창작',relation:'솔직하고 빠른 피드백',money:'새로운 아이디어와 기회를 통한 수입',strength:'창의적 개선 능력과 표현력',caution:'말과 행동이 너무 앞서 규칙과 충돌하는 부분'},
 편재:{work:'사람·시장·기회·외부 자원을 빠르게 연결하는 일',study:'폭넓게 경험하고 바로 적용하기',relation:'활발하고 넓은 교류',money:'기회를 빠르게 포착하고 자금을 움직이는 감각',strength:'확장성·사업감각·기회 포착',caution:'기회가 많아 보일 때 자금이 분산되는 부분'},
 정재:{work:'예산·일정·자원을 안정적으로 관리하는 일',study:'계획표와 누적 학습',relation:'약속과 책임을 지키는 관계',money:'예산·저축·현금흐름을 꾸준히 관리하는 힘',strength:'현실감각·신뢰·지속성',caution:'안전성을 지나치게 중시해 필요한 변화를 미루는 부분'},
 편관:{work:'압박 속에서 기준을 세우고 결단해야 하는 일',study:'목표와 마감이 분명한 방식',relation:'책임감과 긴장감이 함께 있는 관계',money:'위험을 통제하고 손실 한도를 세우는 관리',strength:'결단력·위기대응·승부근성',caution:'자기압박과 과도한 긴장'},
 정관:{work:'규칙·책임·역할이 분명한 조직과 환경',study:'정규 과정과 단계별 학습',relation:'예의·신뢰·공식적인 약속이 분명한 관계',money:'계획적이고 규칙적인 관리',strength:'책임감·신뢰·안정성',caution:'규칙과 체면 때문에 유연성을 잃는 부분'},
 편인:{work:'전문지식·분석·직관·특수기술을 활용하는 일',study:'한 분야를 깊게 파고드는 탐구',relation:'깊지만 선택적인 교류',money:'정보를 충분히 확인한 뒤 결정하는 방식',strength:'전문성·직관·탐구력',caution:'생각이 복잡해져 행동을 늦추는 부분'},
 정인:{work:'배우고 정리하고 가르치거나 지원하는 역할',study:'이론·정리·복습·자격 학습',relation:'돌봄과 신뢰가 있는 관계',money:'안정성과 정보에 기반한 관리',strength:'학습력·정리력·지원능력',caution:'준비가 완벽해질 때까지 시작을 미루는 부분'}
};

const HEALTH_SYMBOL={
 목:{symbol:'전통 오행에서는 목을 간·담, 눈, 근육과 성장 리듬에 상징적으로 연결합니다.',life:'몸을 오래 굳혀두기보다 가벼운 걷기·스트레칭처럼 규칙적으로 움직이고, 일과 휴식의 리듬을 일정하게 만드는 것이 생활 관리에 도움이 됩니다.'},
 화:{symbol:'전통 오행에서는 화를 심장·혈액순환, 열과 활동성에 상징적으로 연결합니다.',life:'과도하게 흥분하거나 쉬지 않고 달리는 생활보다 수면과 휴식 시간을 일정하게 두고, 활동 뒤 회복 시간을 확보하는 습관이 중요합니다.'},
 토:{symbol:'전통 오행에서는 토를 소화·비위와 식사 리듬에 상징적으로 연결합니다.',life:'규칙적인 식사와 수면, 무리하지 않는 운동처럼 기본 생활 패턴을 안정시키는 것이 가장 현실적인 관리법입니다.'},
 금:{symbol:'전통 오행에서는 금을 폐·호흡, 피부와 정리·수축의 리듬에 상징적으로 연결합니다.',life:'오래 앉아 있거나 긴장한 상태를 풀 수 있도록 가벼운 유산소 활동과 충분한 휴식, 쾌적한 생활환경을 유지하는 습관이 좋습니다.'},
 수:{symbol:'전통 오행에서는 수를 신장·방광, 수분과 휴식의 리듬에 상징적으로 연결합니다.',life:'무리한 밤샘이나 장시간의 과로를 줄이고 충분한 수분·수면과 일정한 생활 리듬을 유지하는 쪽에 초점을 맞추는 것이 좋습니다.'}
};

const YEAR_GUIDE={
 비견:{domain:'나 자신·동료',flow:'내 기준과 선택이 중요해지고, 비슷한 위치의 사람들과 비교하거나 협력할 일이 늘기 쉬운 시기로 읽습니다.',caution:'고집이나 경쟁심 때문에 불필요한 지출·갈등이 생기지 않도록 기준을 명확히 해두세요.'},
 겁재:{domain:'경쟁·협업·네트워크',flow:'사람과 기회가 빠르게 움직일 수 있어 혼자 하기보다 협업이나 경쟁 속에서 방향이 만들어지기 쉽습니다.',caution:'공동자금, 급한 투자, 충동적인 약속처럼 경계가 흐려지는 선택을 특히 조심하세요.'},
 식신:{domain:'성과·생산·생활',flow:'꾸준히 만들고 반복하는 힘이 중요해지는 시기입니다. 일의 결과물과 생활 기반을 안정시키는 데 초점을 맞추기 좋습니다.',caution:'편안함에 머물러 중요한 도전을 미루지 않는지 살펴보세요.'},
 상관:{domain:'변화·표현·개선',flow:'기존 방식의 문제점이 눈에 잘 들어오고 새로운 아이디어를 밖으로 꺼내기 쉬운 시기입니다.',caution:'표현이 강해져 조직의 규칙이나 가까운 사람과 충돌하지 않도록 말의 속도를 조절하세요.'},
 편재:{domain:'재물·기회·사업',flow:'외부 사람, 시장, 새로운 거래처럼 움직이는 자원에 관심이 커질 수 있는 시기입니다.',caution:'기회가 많아 보인다고 자금을 지나치게 분산하지 말고 손실 한도와 현금흐름을 먼저 확인하세요.'},
 정재:{domain:'재물·저축·현실',flow:'수입과 지출, 자산과 생활비처럼 현실적인 자원 관리가 중요해지기 쉬운 시기입니다.',caution:'지나치게 안전만 추구해 필요한 투자나 경험까지 미루지 않는지 균형을 보세요.'},
 편관:{domain:'책임·압박·승부',flow:'해결해야 할 일과 책임이 분명해지고 빠른 판단력이 필요한 상황이 늘 수 있는 시기입니다.',caution:'성과를 내기 위해 자신을 지나치게 몰아붙이지 말고 위험을 수치와 기준으로 관리하세요.'},
 정관:{domain:'직업·책임·공식관계',flow:'직위, 역할, 계약, 조직생활처럼 공식적인 책임과 신뢰가 중요해지는 시기로 읽습니다.',caution:'체면이나 규칙만 지키느라 실제 상황의 변화에 대응하지 못하지 않는지 살펴보세요.'},
 편인:{domain:'전문성·전환·탐구',flow:'익숙하지 않은 분야를 깊이 파고들거나 기존 경로와 다른 방법을 찾는 데 관심이 커질 수 있습니다.',caution:'생각과 준비만 길어지지 않도록 작은 결과물을 실제로 만들어보세요.'},
 정인:{domain:'학습·지원·정리',flow:'배움, 자격, 문서, 조언, 지원처럼 지식을 쌓고 기반을 정리하는 일이 중요해질 수 있습니다.',caution:'준비가 충분하다고 느낄 때까지 행동을 미루지 말고 일정 안에서 실행하세요.'}
};

function godScores(daySi,ps){
 const out={비견:0,겁재:0,식신:0,상관:0,편재:0,정재:0,편관:0,정관:0,편인:0,정인:0};
 ps.filter(Boolean).forEach((p,idx)=>{
   if(idx!==2){const g=tenGod(daySi,p.si);out[g]+=1}
   hiddenWeights(BRANCHES[p.bi]).forEach(([si,w])=>{out[tenGod(daySi,si)]+=w*(idx===1?1.5:1)});
 });
 return out;
}
function groupGodScores(scores){
 return {
  비겁:scores.비견+scores.겁재,
  식상:scores.식신+scores.상관,
  재성:scores.편재+scores.정재,
  관성:scores.편관+scores.정관,
  인성:scores.편인+scores.정인
 };
}
function groupLeader(groups){
 return Object.entries(groups).sort((a,b)=>b[1]-a[1])[0];
}
function pairRelationLabels(a,b){
 const found=[];
 const check=(pairs,name)=>pairs.some(([x,y])=>(a===x&&b===y)||(a===y&&b===x))&&found.push(name);
 check(PAIRS.six,'육합'); check(PAIRS.clash,'충'); check(PAIRS.harm,'해'); check(PAIRS.break,'파');
 if((a===0&&b===3)||(a===3&&b===0))found.push('형');
 if([2,5,8].includes(a)&&[2,5,8].includes(b)&&a!==b)found.push('형');
 if([1,7,10].includes(a)&&[1,7,10].includes(b)&&a!==b)found.push('형');
 return found;
}
function dayBranchRelations(dp,ps){
 const labels=[];
 ps.filter(Boolean).forEach((p,idx)=>{
   if(idx===2)return;
   const r=pairRelationLabels(dp.bi,p.bi);
   if(r.length)labels.push(`${['연지','월지','일지','시지'][idx]} ${BRANCHES[p.bi].h}(${BRANCHES[p.bi].k}) · ${r.join('·')}`);
 });
 return labels;
}
function birthAge(x){
 const now=new Date();
 let age=now.getFullYear()-x.y;
 if((now.getMonth()+1<x.m)||((now.getMonth()+1===x.m)&&now.getDate()<x.d))age--;
 return Math.max(0,age);
}
function currentLuckCycle(luck,age){
 if(!luck)return null;
 return luck.cycles.find(c=>age>=c.age&&age<c.age+10)||null;
}
function yearInfo(daySi,dayBi,year){
 const i=mod(year-1984,60),si=i%10,bi=i%12,g=tenGod(daySi,si),guide=YEAR_GUIDE[g];
 const rel=pairRelationLabels(dayBi,bi);
 let flow=guide.flow;
 if(rel.includes('육합'))flow+=` 특히 일지와 그해의 지지가 육합 관계를 이루므로, 가까운 관계나 협력에서 서로 맞춰갈 기회가 늘어나는 흐름으로 참고할 수 있습니다.`;
 if(rel.includes('충'))flow+=` 일지와 그해의 지지가 충 관계를 이루므로, 생활 방식이나 가까운 관계에서 변화와 조정의 필요가 커질 수 있는 흐름으로 참고합니다.`;
 if(rel.includes('해')||rel.includes('파'))flow+=` 가까운 관계나 약속에서 작은 오해가 커지지 않도록 확인 과정을 두는 편이 좋습니다.`;
 return {year,i,si,bi,g,guide,rel,flow};
}
function moneyProfile(daySi,scores,str){
 const wealth=scores.편재+scores.정재;
 const text=wealth>=2.2
  ?'재성의 존재감이 비교적 분명합니다. 전통 명리에서는 현실적인 자원, 돈의 흐름, 거래와 관리에 관심이 생기기 쉬운 구조로 봅니다. 돈을 벌 기회 자체보다 “들어온 자원을 어떻게 지키고 배분하느냐”가 실제 결과를 크게 좌우하는 유형으로 읽는 편이 안전합니다.'
  :wealth>=1
  ?'재성이 적당히 드러납니다. 돈이나 현실 문제를 완전히 멀리하기보다 필요할 때 계산하고 관리하는 감각을 사용할 수 있는 구조입니다. 한 번의 큰 기회만 기다리기보다 자신의 주된 일에서 꾸준히 수입 기반을 만들고 관리하는 방식이 더 잘 맞을 수 있습니다.'
  :'사주 구성에서 재성이 아주 두드러지는 편은 아닙니다. 이것이 재물이 없다는 뜻은 아닙니다. 돈 자체를 좇기보다 전문성·직업·표현 같은 다른 강점을 먼저 키우고 그 결과가 수입으로 연결되도록 만드는 방식이 더 자연스러울 수 있습니다.';
 return {wealth,text};
}
function loveProfile(dp,ps,scores,gender){
 const dr=dayBranchRelations(dp,ps);
 let spouse='';
 if(gender==='male'){
  const s=scores.편재+scores.정재;
  spouse=`고전 명리의 남성 명식에서는 재성을 배우자 관련 보조지표로 보기도 하는데, 현재 재성의 상대적 비중은 ${s.toFixed(1)} 정도입니다.`;
 }else if(gender==='female'){
  const s=scores.편관+scores.정관;
  spouse=`고전 명리의 여성 명식에서는 관성을 배우자 관련 보조지표로 보기도 하는데, 현재 관성의 상대적 비중은 ${s.toFixed(1)} 정도입니다.`;
 }else{
  spouse='성별을 선택하지 않았으므로 성별에 따라 배우자 상징을 달리 보는 고전적 해석 규칙은 적용하지 않고 일지와 전체 관계 패턴을 중심으로 봅니다.';
 }
 const movement=dr.length?`일지는 다른 지지와 ${dr.join(', ')} 관계가 있어 가까운 관계에서 변화·조율의 주제가 비교적 눈에 띌 수 있습니다.`:'일지가 다른 지지와 강한 충돌 관계를 많이 만들지 않아 가까운 관계에서는 급격한 변화보다 신뢰와 생활 리듬을 맞추는 과정이 중요하게 읽힙니다.';
 return {text:`사주에서 일지는 나 자신과 가장 가까운 생활공간, 배우자·연인 관계를 살펴보는 자리로 많이 사용합니다. ${movement} ${spouse} 다만 이것은 현대의 성별 역할이나 결혼 결과를 정하는 규칙이 아니라 전통 해석 관행을 참고하는 수준입니다.`,basis:dr};
}
function healthProfile(counts){
 const sorted=Object.entries(counts).sort((a,b)=>b[1]-a[1]),high=sorted[0][0],low=sorted.at(-1)[0];
 const h=HEALTH_SYMBOL[high],l=HEALTH_SYMBOL[low];
 return {
  text:`오행에서는 ${high} 기운이 상대적으로 많이 드러나고 ${low} 기운은 비교적 적게 나타납니다. ${h.symbol} ${l.symbol} 하지만 오행의 많고 적음으로 실제 질병이나 장기 상태를 판단할 수는 없습니다. 생활에서는 ${h.life} 특히 부족하다고 표시된 오행을 음식이나 보충제로 억지로 채우기보다 수면·활동·식사·스트레스 관리처럼 검증된 기본 습관을 우선하는 것이 좋습니다.`,
  high,low
 };
}
function careerProfile(groups,gods){
 const [leader]=groupLeader(groups),topGod=gods[0]?.[0]||'비견';
 const map={
  비겁:'독립성·주도권·동료와의 경쟁이나 협력',
  식상:'생산·표현·기술·콘텐츠·문제해결',
  재성:'사업·영업·현실자원·성과관리',
  관성:'조직·책임·관리·공식적인 역할',
  인성:'전문지식·교육·문서·연구·지원'
 };
 return {leader,text:`십성을 다섯 역할군으로 묶어 보면 “${leader}” 역할군이 상대적으로 두드러집니다. 이 역할군은 ${map[leader]} 같은 능력을 어떻게 사용하는지와 관련해 읽습니다. 주요 십성은 ${topGod}(${GOD_TEXT[topGod]})입니다. 실제 직업에서는 “${GOD_STYLE[topGod].work}” 같은 환경이 자신에게 잘 맞는지 살펴볼 가치가 있습니다. 특정 직업명을 맞히기보다 “어떤 방식으로 일할 때 힘이 나고 성과가 나는가”를 확인하는 편이 더 유용합니다.`};
}
function buildPersonalReport(daySi,dp,mp,ps,counts,gods,str,rel,x,luck){
 const day=STEMS[daySi],el=day.el,d=DAY_STYLE[el],topGod=gods[0]?.[0]||'비견',g=GOD_STYLE[topGod];
 const sorted=Object.entries(counts).sort((a,b)=>b[1]-a[1]),topEl=sorted[0][0],lowEl=sorted.at(-1)[0];
 const scores=godScores(daySi,ps),groups=groupGodScores(scores);
 const money=moneyProfile(daySi,scores,str),love=loveProfile(dp,ps,scores,x.gender),health=healthProfile(counts),career=careerProfile(groups,gods);
 const now=new Date().getFullYear(),yi=yearInfo(daySi,dp.bi,now);
 const currentLuck=currentLuckCycle(luck,birthAge(x));
 const currentLuckGod=currentLuck?tenGod(daySi,currentLuck.si):null;

 return {
  personality:`${d.person} ${day.img}에 비유되는 ${day.h}(${day.k}) 일간은 쉽게 말해 “${day.easy}”을 자신의 기본 방식으로 삼는 사람으로 풀이할 수 있습니다. ${d.person2} 현재 오행 분포를 보면 ${topEl} 기운이 상대적으로 두드러지고, ${lowEl} 기운은 비교적 적게 나타납니다. 어느 한쪽이 많거나 적다고 좋고 나쁜 것은 아닙니다. 생각이나 행동이 한 방향으로 치우칠 때 반대되는 성향도 의식적으로 써보는 것이 균형에 도움이 됩니다.`,
  personalityBasis:`왜 이렇게 보나요? 일간 ${day.h}(${day.k}) · 일간의 오행 ${day.el} · 월지 ${BRANCHES[mp.bi].h}(${BRANCHES[mp.bi].k}) · 태어난 계절 ${seasonalName(mp.mi)} · 상대적으로 많은 오행 ${topEl} · 적은 오행 ${lowEl}`,
  work:`${d.work} ${career.text} 한 가지 직업 이름을 맞히는 식보다, 책임이 분명한 조직형인지, 자유롭게 결과를 만드는 프로젝트형인지, 전문성을 오래 쌓는 연구형인지처럼 자신의 “일하는 방식”을 확인해 보는 것이 더 정확합니다. 지금까지 가장 성과가 좋았던 환경과 비교해 보세요.`,
  workBasis:`해석 근거: 십성 역할군 ${career.leader} 우세 · 주요 십성 ${topGod} · 일간 ${day.el}`,
  study:`${d.study} ${g.study} 방식도 잘 맞을 가능성이 있습니다. 단순히 오래 앉아 있기보다 자신의 일간과 십성에 맞는 학습법을 쓰는 것이 중요합니다. 예를 들어 식상이 강하면 직접 만들어보고 설명하는 방식, 인성이 강하면 이론을 구조화해 복습하는 방식이 더 편할 수 있습니다. 배운 내용을 실제 문제나 업무에 연결했을 때 이해가 깊어지는지 확인해 보세요.`,
  studyBasis:`해석 근거: 일간 ${day.el} · 주요 십성 ${topGod}(${GOD_TEXT[topGod]}) · 인성 ${groups.인성.toFixed(1)} / 식상 ${groups.식상.toFixed(1)}`,
  relation:`${d.relation} 관계에서는 특히 “${g.relation}” 같은 방식을 편하게 느끼는지도 살펴볼 수 있습니다. 가까운 관계에서는 “내 방식대로 해야 마음이 편한지”, “상대에게 맞추다가 속마음을 늦게 말하는지”를 살펴보면 자신의 관계 패턴이 더 잘 보입니다. ${love.basis.length?`원국의 일지에는 ${love.basis.join(', ')} 같은 움직임이 보여 관계에서 조율과 변화가 중요한 주제가 될 수 있습니다.`:'일지 쪽에 강한 충돌 표시는 많지 않아 꾸준한 신뢰와 생활 리듬을 맞추는 과정이 중요하게 읽힙니다.'}`,
  relationBasis:`해석 근거: 일간 ${day.el} · 일지 ${BRANCHES[dp.bi].h} · 주요 십성 ${topGod}${love.basis.length?' · '+love.basis.join(', '):''}`,
  money:`${d.money} ${money.text} ${g.money} 같은 방식이 자신의 실제 돈 관리 습관과 겹치는지도 확인해 보세요. 재물운을 볼 때는 “언제 큰돈이 생기나”보다 수입을 만드는 능력, 지키는 능력, 위험을 관리하는 능력이 어떻게 조합되는지를 보는 편이 현실적입니다. 투자나 복권 당첨 가능성을 이 결과로 판단해서는 안 됩니다.`,
  moneyBasis:`해석 근거: 재성 점수 ${money.wealth.toFixed(1)} · 정재 ${scores.정재.toFixed(1)} / 편재 ${scores.편재.toFixed(1)} · 주요 십성 ${topGod}`,
  love:`${love.text} 관계운은 ‘언제 결혼한다’보다 어떤 상대에게 편안함을 느끼고 갈등이 생겼을 때 어떻게 반응하는지를 보는 것이 더 도움이 됩니다. ${d.relation} 올해 세운의 중심 십성은 ${yi.g}입니다. 따라서 “${YEAR_GUIDE[yi.g].domain}”이라는 주제가 관계에서도 어떤 모습으로 나타나는지 관찰해 보세요.`,
  loveBasis:`해석 근거: 일지 ${BRANCHES[dp.bi].h} · ${love.basis.length?love.basis.join(', '):'강한 일지 충돌 표시 적음'} · 올해 ${yi.g}`,
  health:`${health.text}`,
  healthBasis:`해석 근거: 오행 상위 ${health.high} / 하위 ${health.low}. 전통 오행 대응은 건강 진단이 아니라 상징적 생활 참고입니다.`,
  strength:`대표적인 강점 키워드는 “${g.strength}”입니다. 오행 쪽에서는 “${ELSYMBOL[topEl]}” 성향도 눈에 띕니다. 두 특징을 함께 활용하면 자신의 장점을 더 분명하게 만들 수 있습니다. 특히 어려운 상황에서 남들이 기대하는 방식보다 실제로 내가 반복해서 잘해온 행동을 찾아보세요. 강점은 사주에 적힌 단어가 아니라 경험 속에서 확인될 때 의미가 있습니다.`,
  strengthBasis:`해석 근거: 상대적으로 높은 오행 ${topEl} · 주요 십성 ${topGod} · ${career.leader} 역할군`,
  caution:`${d.caution} 동시에 ${g.caution}도 반복되는지 살펴보세요. 강한 기운은 장점으로 쓰일 때 힘이 되지만 과해지면 같은 행동을 너무 오래 반복하게 만들 수 있습니다. 중요한 결정을 앞두고는 나와 반대되는 관점의 사람에게 한 번 의견을 듣는 방식도 균형에 도움이 됩니다.`,
  cautionBasis:`해석 근거: 일간의 오행 ${day.el} · 주요 십성 ${topGod} · 상대적으로 적게 나타나는 오행 ${lowEl}`,
  year:`${now}년은 ${STEMS[yi.si].h}${BRANCHES[yi.bi].h}(${STEMS[yi.si].k}${BRANCHES[yi.bi].k})년이고, 일간 기준으로 ${yi.g}의 역할이 들어옵니다. ${yi.flow} 올해의 핵심 키워드는 “${yi.guide.domain}”입니다. 이 키워드를 기준으로 올해 무엇에 힘을 쓰고 무엇을 조심할지 계획해 보세요. ${currentLuckGod?`현재 대운의 중심 십성은 ${currentLuckGod}입니다. 10년 흐름의 핵심 분야는 “${YEAR_GUIDE[currentLuckGod].domain}”, 올해의 핵심 분야는 “${yi.guide.domain}”으로 읽습니다. 두 흐름이 겹치는 부분을 우선적으로 살펴보면 좋습니다.`:'성별을 선택하면 현재 대운까지 겹쳐서 더 자세히 볼 수 있습니다.'}`,
  yearBasis:`해석 근거: ${now}년 ${STEMS[yi.si].h}${BRANCHES[yi.bi].h} · 세운 십성 ${yi.g}${yi.rel.length?' · 일지와 '+yi.rel.join('·'):''}${currentLuckGod?' · 현재 대운 '+currentLuckGod:''}`,
  pro:{scores,groups,money,love,health,career,currentLuck,currentLuckGod,yearInfo:yi}
 };
}

function easySummary(day,counts,gods,str,rel){
 const sorted=Object.entries(counts).sort((a,b)=>b[1]-a[1]),top=sorted[0][0],low=sorted.at(-1)[0],g=gods[0]?.[0]||'비견';
 return {
  one:`당신의 기준점인 일간은 ${day.stem.h}(${day.stem.k}), ${day.stem.yin}${day.stem.el}입니다. ${day.stem.img}에 비유하며, 쉽게 말하면 “${day.stem.easy}”을 중심 이미지로 봅니다.`,
  two:`오행 분포에서는 ${top} 기운이 상대적으로 두드러지고, ${low} 기운은 비교적 적게 나타납니다. 기초 균형 참고값은 “${str.label}”입니다. 이것은 좋고 나쁨을 매기는 점수가 아니라 전체 균형을 살펴보는 보조 지표입니다.`,
  three:`십성 관계에서는 ${g}(${GOD_TEXT[g]})의 언어가 비교적 눈에 띕니다. 실제 생활에서는 업무·학습·관계에서 이런 패턴이 나타나는지 확인해 보는 방식으로 활용하세요.`,
  four:rel.length?`원국 안에는 ${rel.slice(0,3).join(', ')} 같은 관계가 보입니다. 이를 사건 예언이 아니라 서로 다른 기운이 부딪히거나 연결되는 구조적 신호로 해석합니다.`:'강하게 표시되는 합·충 관계가 많지 않습니다. 한 항목만으로 성격이나 사건을 확정하지 않는 것이 중요합니다.'
 };
}
function pillarCard(p,label,daySi){
 const s=STEMS[p.si],b=BRANCHES[p.bi],god=label==='일주'?'일간':tenGod(daySi,p.si);
 const h=b.hidden.map(si=>`${STEMS[si].h}${tenGod(daySi,si)}`).join(' · ');
 return `<div class="pillar-pro"><div class="label">${label}</div><div class="hanja">${s.h}${b.h}</div><div class="ko">${s.k}${b.k}</div><div class="mini">${god}</div><div class="mini">지장간 ${h}</div><div class="mini">12운성 ${twelveStage(daySi,p.bi)}</div></div>`;
}
function renderElementBars(c){
 const max=Math.max(...Object.values(c),1);
 document.getElementById('elementBars').innerHTML=ELEMENTS.map(e=>`<div class="element-row"><b>${e}</b><div class="bar"><i style="width:${Math.max(8,c[e]/max*100)}%"></i></div><span>${c[e].toFixed(1)}</span></div>`).join('');
}
function annualRows(daySi,dayBi,fromYear){
 let rows='';
 for(let y=fromYear;y<fromYear+6;y++){
   const info=yearInfo(daySi,dayBi,y);
   rows+=`<tr>
    <td><b>${y}</b></td>
    <td>${STEMS[info.si].h}${BRANCHES[info.bi].h}<br><small>${STEMS[info.si].k}${BRANCHES[info.bi].k}</small></td>
    <td>${info.g}</td>
    <td>${info.guide.domain}</td>
    <td>${info.flow}</td>
    <td>${info.guide.caution}</td>
   </tr>`;
 }
 document.getElementById('annualRows').innerHTML=rows;
}
function renderLuck(luck,daySi,birthY){
 const box=document.getElementById('luckSection');
 if(!luck){box.innerHTML='<div class="notice info"><strong>대운을 더 자세히 보려면 성별을 선택하세요.</strong><br>전통 명리의 순행·역행 대운 계산에는 성별 규칙을 사용합니다. 성별을 선택하지 않아도 원국과 세운 분석은 볼 수 있습니다.</div>';return}
 const dir=luck.dir==='forward'?'순행':'역행',age=Math.max(0,new Date().getFullYear()-birthY);
 let cards=luck.cycles.map(x=>{
   const g=tenGod(daySi,x.si),active=age>=x.age&&age<x.age+10;
   return `<div class="luck-card ${active?'active-luck':''}">
    ${active?'<span class="current-badge">현재 대운</span>':''}
    <b>${fmtPillar(x)}</b>
    <span>${ageText(x.age)} 시작 · 약 10년</span>
    <span><strong>${g}</strong> · ${YEAR_GUIDE[g].domain}</span>
    <small>${YEAR_GUIDE[g].flow}</small>
   </div>`;
 }).join('');
 box.innerHTML=`<div class="notice info"><strong>${dir} · 대운 시작 약 ${ageText(luck.startAge)}</strong><br>기준 절입: ${luck.term.ko} ${formatKoreaTime(luck.term.ms)}. 절입까지의 시간 ÷ 3 규칙을 사용한 근사 시작연령입니다. 학파에 따라 계산법 차이가 있습니다.</div><div class="luck-grid">${cards}</div>`;
}
function getInput(){
 const cal=document.getElementById('calendarType').value;
 let y,m,d,converted=null,lunarInfo=null;
 if(cal==='solar'){
   const date=document.getElementById('birthDate').value;
   if(!date)throw new Error('양력 생년월일을 입력해주세요.');
   [y,m,d]=date.split('-').map(Number);
   if(y<=2050)lunarInfo=KLunar.solarToLunar(y,m,d);
 }else{
   y=+document.getElementById('lunarYear').value;
   m=+document.getElementById('lunarMonth').value;
   d=+document.getElementById('lunarDay').value;
   const leap=document.getElementById('leapMonth').checked;
   converted=KLunar.lunarToSolar(y,m,d,leap);
   if(!converted)throw new Error('선택한 음력 날짜와 윤달 여부를 확인해주세요.');
   lunarInfo={y,m,d,leap}; y=converted.y;m=converted.m;d=converted.d;
 }
 const unknown=document.getElementById('unknownTime').checked;
 const [hh,mm]=(unknown?'12:00':document.getElementById('birthTime').value).split(':').map(Number);
 const utcMs=localDateToUtc(y,m,d,hh,mm);
 const timeMode=document.getElementById('timeMode').value;
 let place='대한민국 표준시',placeLabel='대한민국 표준시',lon=null;
 if(timeMode==='solar'){
   place=document.getElementById('birthPlace').value;
   placeLabel=place;
   lon=CITIES[place];
   if(place==='기타 대한민국 지역'){
     placeLabel=document.getElementById('otherPlaceName').value.trim()||'기타 대한민국 지역';
     const custom=Number(document.getElementById('customLongitude').value);
     if(Number.isFinite(custom)&&custom>=124&&custom<=132)lon=custom;
   }
 }
 let basis={y,m,d,h:hh,min:mm},solar=null;
 if(!unknown&&timeMode==='solar'){
   if(!Number.isFinite(lon))throw new Error('진태양시 보정을 사용하려면 가까운 기준 도시를 선택하거나 대한민국 경도(약 124~132°E)를 입력해주세요.');
   solar=trueSolarParts(utcMs,lon);basis=solar;
 }
 return {cal,y,m,d,hh,mm,unknown,utcMs,place:placeLabel,lon,timeMode,basis,solar,lunarInfo,converted,gender:document.getElementById('gender').value,boundary:document.getElementById('dayBoundary').value};
}
function showSaju(){
 try{
  const x=getInput(),yp=yearPillarByUtc(x.utcMs,x.y),mp=monthPillarByUtc(x.utcMs,yp);
  const dp=dayPillar(x.basis,x.boundary),hp=x.unknown?null:hourPillar(x.basis,dp),ps=[yp,mp,dp,hp];
  const day={stem:STEMS[dp.si],branch:BRANCHES[dp.bi]},counts=weightedElements(ps),gods=dominantGod(dp.si,ps),str=strength(dp.si,counts),rel=findRelations(ps);
  const luck=luckCycles(mp,x.utcMs,yp,x.gender),easy=easySummary(day,counts,gods,str,rel),personal=buildPersonalReport(dp.si,dp,mp,ps,counts,gods,str,rel,x,luck);

  document.getElementById('inputSummary').textContent=`양력 ${x.y}-${pad(x.m)}-${pad(x.d)} · ${x.unknown?'생시 모름':pad(x.hh)+':'+pad(x.mm)}${x.timeMode==='solar'?' · '+x.place+' 기준 진태양시 근사 보정':''}`;
  document.getElementById('lunarSummary').textContent=x.lunarInfo?`음력 참고: ${x.lunarInfo.y}-${pad(x.lunarInfo.m)}-${pad(x.lunarInfo.d)}${x.lunarInfo.leap?' 윤달':''}`:'';
  document.getElementById('easyDay').textContent=`${day.stem.h}(${day.stem.k}) · ${day.stem.yin}${day.stem.el}`;
  document.getElementById('easySeason').textContent=`${seasonalName(mp.mi)} · ${mp.jie.ko} 이후 ${BRANCHES[mp.bi].k}월`;
  document.getElementById('easyStrength').textContent=`${str.label} · 보완 참고 ${str.helpers.join('·')}`;
  document.getElementById('easyGod').textContent=gods.slice(0,2).map(x=>x[0]).join(' · ');
  document.getElementById('personalityText').textContent=personal.personality;
  document.getElementById('personalityBasis').textContent=personal.personalityBasis;
  document.getElementById('workText').textContent=personal.work;
  document.getElementById('workBasis').textContent=personal.workBasis;
  document.getElementById('studyText').textContent=personal.study;
  document.getElementById('studyBasis').textContent=personal.studyBasis;
  document.getElementById('relationEasyText').textContent=personal.relation;
  document.getElementById('relationEasyBasis').textContent=personal.relationBasis;
  document.getElementById('moneyText').textContent=personal.money;
  document.getElementById('moneyBasis').textContent=personal.moneyBasis;
  document.getElementById('loveEasyText').textContent=personal.love;
  document.getElementById('loveEasyBasis').textContent=personal.loveBasis;
  document.getElementById('healthEasyText').textContent=personal.health;
  document.getElementById('healthEasyBasis').textContent=personal.healthBasis;
  document.getElementById('strengthEasyText').textContent=personal.strength;
  document.getElementById('strengthEasyBasis').textContent=personal.strengthBasis;
  document.getElementById('cautionText').textContent=personal.caution;
  document.getElementById('cautionBasis').textContent=personal.cautionBasis;
  document.getElementById('yearThemeText').textContent=personal.year;
  document.getElementById('yearThemeBasis').textContent=personal.yearBasis;
  const pro=personal.pro,grp=pro.groups,leader=pro.career.leader;
  const sortedElements=Object.entries(counts).sort((a,b)=>b[1]-a[1]),strongEl=sortedElements[0][0],weakEl=sortedElements.at(-1)[0];
  document.getElementById('proCoreText').textContent=`나를 나타내는 중심 기운은 일간 ${day.stem.h}(${day.stem.k})입니다. 태어난 계절은 ${seasonalName(mp.mi)}입니다. 여기에 월지 ${BRANCHES[mp.bi].h}(${BRANCHES[mp.bi].k})의 계절 영향도 함께 살펴봅니다. 오행 분포에서는 ${strongEl} 기운이 상대적으로 강하게 나타나고, ${weakEl} 기운은 비교적 적게 나타납니다. 기초 균형 참고값은 “${str.label}”입니다. 십성을 다섯 역할군으로 묶어 보면 “${leader}” 역할군이 가장 두드러집니다. 따라서 이 역할을 실제 생활에서 어떻게 사용하는지가 사주 구조를 이해하는 중요한 단서가 됩니다.`;
  document.getElementById('proCoreBasis').textContent=`근거: 일간 ${day.stem.h}(${day.stem.k}) · 일간의 오행 ${day.stem.el} · 월지 ${BRANCHES[mp.bi].h}(${BRANCHES[mp.bi].k}) · 일간을 돕는 기운 비율 약 ${Math.round(str.ratio*100)}% · 두드러지는 역할군 ${leader} ${grp[leader].toFixed(1)}`;
  document.getElementById('proCareerText').textContent=pro.career.text+` 역할군별 참고값은 식상 ${grp.식상.toFixed(1)}, 재성 ${grp.재성.toFixed(1)}, 관성 ${grp.관성.toFixed(1)}, 인성 ${grp.인성.toFixed(1)}, 비겁 ${grp.비겁.toFixed(1)}입니다. 이 값은 점수나 등급이 아니라 서로 어떤 역할이 상대적으로 더 눈에 띄는지 비교하기 위한 내부 참고값입니다. 한 가지 능력만 보는 대신 중심 역할과 보조 역할의 조합을 함께 살펴보세요.`;
  document.getElementById('proCareerBasis').textContent=`근거: 십성 역할군 우세 ${leader} · 주요 십성 ${gods[0]?.[0]||'비견'} · 월령 ${BRANCHES[mp.bi].h}`;
  document.getElementById('proMoneyText').textContent=pro.money.text+` 현재 사주 구성에서 재성의 내부 참고값은 ${pro.money.wealth.toFixed(1)}입니다. 정재는 안정적인 수입·저축·관리, 편재는 시장·거래·기회와 연결해 해석하는데, 어느 쪽이 더 높든 실제 재물 결과는 직업 역량과 지출 통제, 위험관리의 영향을 더 크게 받습니다.`;
  document.getElementById('proMoneyBasis').textContent=`근거: 정재 ${pro.scores.정재.toFixed(1)} · 편재 ${pro.scores.편재.toFixed(1)} · 비겁 ${grp.비겁.toFixed(1)} · 식상 ${grp.식상.toFixed(1)}`;
  document.getElementById('proLoveText').textContent=pro.love.text+` 애정운에서는 특정 만남 시점을 맞히기보다 일지의 관계 구조, 합·충의 움직임, 그리고 현재 세운에서 관계 주제가 얼마나 부각되는지를 함께 살펴봅니다. 일지와 해의 지지가 합하면 협력과 접점, 충하면 변화와 조율의 필요가 커지는 식으로 읽습니다.`;
  document.getElementById('proLoveBasis').textContent=`근거: 일지 ${BRANCHES[dp.bi].h} · ${pro.love.basis.length?pro.love.basis.join(', '):'강한 일지 충·합 표시 적음'} · 올해 ${pro.yearInfo.g}`;
  document.getElementById('proHealthText').textContent=pro.health.text+` 전문 해석에서도 오행으로 특정 질병을 맞히는 방식은 사용하지 않습니다. 건강운은 몸의 상태를 예언하거나 질병을 판단하는 항목이 아닙니다. 과로, 수면, 활동량, 휴식 같은 생활 리듬을 돌아보는 참고 영역으로 제공합니다.`;
  document.getElementById('proHealthBasis').textContent=`근거: 오행 상위 ${pro.health.high} · 하위 ${pro.health.low}. 의료 진단이나 치료 판단에 사용하지 않습니다.`;
  document.getElementById('proFamilyText').textContent=`연주와 월주는 초기 환경·가족·사회적 역할을, 비겁은 형제·동료와의 경쟁과 협력을, 인성은 보호·배움·지원의 관계를 보는 보조 언어로 사용합니다. 현재 비겁은 ${grp.비겁.toFixed(1)}, 인성은 ${grp.인성.toFixed(1)} 정도입니다. 가족관계의 실제 모습은 사주 한 항목보다 살아온 환경과 대화 방식이 훨씬 중요하므로, 이 결과는 내가 사람 사이에서 맡기 쉬운 역할을 돌아보는 참고로 활용하세요.`;
  document.getElementById('proFamilyBasis').textContent=`근거: 연주 ${fmtPillar(yp)} · 월주 ${fmtPillar(mp)} · 비겁 ${grp.비겁.toFixed(1)} · 인성 ${grp.인성.toFixed(1)}`;
  if(pro.currentLuck){
    const cg=pro.currentLuckGod;
    document.getElementById('currentLuckText').textContent=`현재 나이를 기준으로 보면 ${fmtPillar(pro.currentLuck)} 대운 구간에 해당합니다. 이 대운의 중심 십성은 ${cg}입니다. ${YEAR_GUIDE[cg].flow} 약 10년 동안 같은 사건이 반복된다는 뜻은 아닙니다. 큰 흐름 위에 해마다 다른 세운이 겹치면서 관심 분야와 선택의 우선순위가 달라질 수 있다고 봅니다.`;
    document.getElementById('currentLuckBasis').textContent=`근거: 대운 시작 약 ${ageText(pro.currentLuck.age)} · 대운 십성 ${cg} · 핵심 분야 ${YEAR_GUIDE[cg].domain}`;
  }else{
    document.getElementById('currentLuckText').textContent='성별을 선택하면 전통적인 순행·역행 규칙에 따라 현재 나이에 해당하는 대운을 계산해 10년 단위의 흐름을 함께 보여드립니다.';
    document.getElementById('currentLuckBasis').textContent='대운 방향 계산에는 성별 선택이 필요합니다.';
  }
  document.getElementById('currentYearProText').textContent=`${new Date().getFullYear()}년은 ${STEMS[pro.yearInfo.si].h}${BRANCHES[pro.yearInfo.bi].h}년이며 ${pro.yearInfo.g}의 역할이 들어옵니다. ${pro.yearInfo.flow} 올해의 중점 분야는 “${pro.yearInfo.guide.domain}”입니다.`;
  document.getElementById('currentYearProBasis').textContent=`근거: 세운 ${STEMS[pro.yearInfo.si].h}${BRANCHES[pro.yearInfo.bi].h} · 십성 ${pro.yearInfo.g}${pro.yearInfo.rel.length?' · 일지와 '+pro.yearInfo.rel.join('·'):''}`;
  document.getElementById('pillarsPro').innerHTML=[
    pillarCard(yp,'연주',dp.si),pillarCard(mp,'월주',dp.si),pillarCard(dp,'일주',dp.si),hp?pillarCard(hp,'시주',dp.si):'<div class="pillar-pro missing"><div class="label">시주</div><div class="hanja">—</div><div class="ko">생시 모름</div></div>'
  ].join('');
  renderElementBars(counts);
  document.getElementById('godChips').innerHTML=gods.map(([g,n])=>`<span class="god-chip">${g} ${n.toFixed(1)} · ${GOD_TEXT[g]}</span>`).join('');
  document.getElementById('relationChips').innerHTML=rel.length?rel.map(r=>`<span class="relation-chip">${r}</span>`).join(''):'<span class="muted">두드러지는 합·충 관계를 별도로 표시하지 않았습니다.</span>';
  document.getElementById('strengthText').textContent=`일간을 돕는 같은 오행·인성 계열의 가중 비율을 기준으로 ${Math.round(str.ratio*100)}%이며 “${str.label}”으로 분류했습니다. 이 값은 월지 가중과 지장간을 포함한 사이트 내부 참고지표이지, 학파별 신강·신약 판정을 대신하지 않습니다.`;
  document.getElementById('helperText').textContent=`자동 용신 확정은 하지 않습니다. 균형을 볼 때 먼저 참고할 오행 후보는 ${str.helpers.join(', ')}입니다. 실제 용신·희신은 조후, 통근, 투간, 합화, 격국 등을 함께 보는 해석 영역입니다.`;
  document.getElementById('termText').textContent=`월주는 ${mp.jie.ko}(${mp.jie.han}) 절입 ${formatKoreaTime(mp.jie.ms)} 이후를 기준으로 계산했습니다. 연주는 해당 해 입춘의 실제 절입 시각을 기준으로 바뀝니다.`;
  if(!x.unknown&&x.timeMode==='solar')document.getElementById('timeCorrection').textContent=`입력 시각 ${pad(x.hh)}:${pad(x.mm)} → 경도 ${x.lon.toFixed(4)}°와 균시차를 이용한 진태양시 근사 ${pad(x.solar.h)}:${pad(x.solar.min)}. 시주 경계에 가까울수록 전문 프로그램과 비교를 권합니다.`;
  else document.getElementById('timeCorrection').textContent=`시주는 출생지역과 관계없이 기록된 한국 표준시(Asia/Seoul)를 기준으로 계산합니다.${x.unknown?' 생시를 모르므로 시주는 제외했습니다.':''}`;
  renderLuck(luck,dp.si,x.y);
  annualRows(dp.si,dp.bi,new Date().getFullYear());
  const warnings=[];
  const dist=Math.min(...allTermsAround(x.y).map(t=>Math.abs(t.ms-x.utcMs)))/3600000;
  if(dist<12)warnings.push(`절입 시각과 약 ${dist.toFixed(1)}시간 이내입니다. 다른 만세력과 비교해 보세요.`);
  if(!x.unknown&&(x.basis.h===23||x.basis.h===0))warnings.push('자시 경계에 가깝습니다. 23시 일주 변경 여부 설정에 따라 일주가 달라질 수 있습니다.');
  if(x.y<1961)warnings.push('과거 한국 표준시·서머타임 시기입니다. 브라우저의 Asia/Seoul 역사 시간대 데이터를 사용하므로 기록 시각의 성격을 확인하는 것이 좋습니다.');
  document.getElementById('warningBox').classList.toggle('hide',!warnings.length);
  document.getElementById('warningText').textContent=warnings.join(' ');
  document.getElementById('sajuResult').classList.add('show');
  document.getElementById('sajuResult').scrollIntoView({behavior:'smooth',block:'start'});
 }catch(e){alert(e.message||'계산 중 오류가 발생했습니다.')}
}
function copyReport(){
 const r=document.getElementById('sajuResult'); if(!r.classList.contains('show'))return;
 navigator.clipboard.writeText(r.innerText).then(()=>alert('리포트를 복사했습니다.')).catch(()=>alert('복사하지 못했습니다.'));
}
document.addEventListener('DOMContentLoaded',()=>{
 const c=document.getElementById('unknownTime'),t=document.getElementById('birthTime'),
       cal=document.getElementById('calendarType'),solarWrap=document.getElementById('solarDateWrap'),
       lunarWrap=document.getElementById('lunarDateWrap'),ly=document.getElementById('lunarYear'),
       lm=document.getElementById('lunarMonth'),ld=document.getElementById('lunarDay'),
       leap=document.getElementById('leapMonth'),help=document.getElementById('lunarLeapHelp'),
       timeMode=document.getElementById('timeMode'),solarLocation=document.getElementById('solarLocationWrap'),
       place=document.getElementById('birthPlace'),otherPlace=document.getElementById('otherPlaceWrap');

 for(let y=1900;y<=2050;y++){const o=document.createElement('option');o.value=y;o.textContent=y+'년';ly.appendChild(o)}
 ly.value=Math.min(new Date().getFullYear(),2050);
 for(let m=1;m<=12;m++){const o=document.createElement('option');o.value=m;o.textContent=m+'월';lm.appendChild(o)}

 function refreshLunar(){
   const y=+ly.value,m=+lm.value,lmNo=KLunar.leapMonth(y);
   leap.disabled=lmNo!==m;
   if(lmNo!==m)leap.checked=false;
   help.textContent=lmNo?`${y}년의 윤달은 음력 ${lmNo}월입니다.${lmNo===m?' 현재 월은 윤달 선택이 가능합니다.':''}`:`${y}년에는 윤달이 없습니다.`;
   const days=KLunar.lunarDays(y,m,leap.checked);
   const current=+ld.value||1;ld.innerHTML='';
   for(let d=1;d<=days;d++){const o=document.createElement('option');o.value=d;o.textContent=d+'일';ld.appendChild(o)}
   ld.value=Math.min(current,days);
 }
 refreshLunar();
 c.addEventListener('change',()=>t.disabled=c.checked);
 cal.addEventListener('change',()=>{
   const lunar=cal.value==='lunar';solarWrap.classList.toggle('hide',lunar);lunarWrap.classList.toggle('hide',!lunar);
 });
 ly.addEventListener('change',refreshLunar);lm.addEventListener('change',refreshLunar);leap.addEventListener('change',refreshLunar);
 function refreshSolarLocation(){
   const useSolar=timeMode.value==='solar';
   solarLocation.classList.toggle('hide',!useSolar);
   if(!useSolar)otherPlace.classList.add('hide');
   else otherPlace.classList.toggle('hide',place.value!=='기타 대한민국 지역');
 }
 timeMode.addEventListener('change',refreshSolarLocation);
 place.addEventListener('change',refreshSolarLocation);
 refreshSolarLocation();
});
