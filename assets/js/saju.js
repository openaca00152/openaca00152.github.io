
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
 목:{person:'새로운 방향을 만들고 성장시키려는 성향을 관찰해 볼 수 있습니다. 계획을 세우고 조금씩 키우는 과정에서 강점을 느끼기 쉽습니다.',work:'기획·개선·성장 과제가 있는 일에서 동기부여를 받기 쉽습니다.',study:'큰 흐름을 먼저 이해한 뒤 세부 내용을 연결하는 방식이 잘 맞을 수 있습니다.',relation:'관계를 오래 키우고 발전시키려는 태도를 중요하게 여길 수 있습니다.',money:'단기 승부보다 장기적인 성장과 재투자 관점이 편할 수 있습니다.',caution:'계속 확장하려다 정리와 마무리가 늦어지지 않는지 확인해 보세요.'},
 화:{person:'생각이나 감정을 밖으로 표현하고 분위기를 움직이는 힘을 중요하게 여길 수 있습니다.',work:'사람에게 보여주고 전달하고 움직이는 일이 잘 맞을 수 있습니다.',study:'읽기만 하기보다 설명하거나 발표하면서 익히는 방식이 도움이 될 수 있습니다.',relation:'반응이 빠르고 따뜻한 소통을 선호할 수 있습니다.',money:'경험과 활동에 지출이 늘기 쉬우므로 즐거움과 예산의 균형을 확인해 보세요.',caution:'속도가 빨라질수록 충분한 검토 없이 결정하지 않는지 살펴보세요.'},
 토:{person:'안정된 기준을 만들고 정리하며 꾸준히 관리하는 성향을 관찰해 볼 수 있습니다.',work:'운영·관리·조정처럼 구조를 유지하고 개선하는 역할에서 강점을 느끼기 쉽습니다.',study:'반복과 정리, 자신만의 노트나 체계를 만드는 방식이 잘 맞을 수 있습니다.',relation:'말보다 신뢰와 지속성을 중요하게 여기는 편인지 살펴볼 수 있습니다.',money:'계획과 관리 중심의 접근이 편할 수 있으며, 안전하다고 느끼는 방식에 오래 머물 수 있습니다.',caution:'안정을 지키려다 변화가 필요한 순간까지 미루지 않는지 확인해 보세요.'},
 금:{person:'기준을 세우고 불필요한 것을 정리하며 완성도를 높이는 성향을 관찰해 볼 수 있습니다.',work:'판단·검토·품질관리·분석처럼 기준이 분명한 업무에 잘 집중할 수 있습니다.',study:'틀린 부분을 찾아 고치고 핵심을 압축하는 방식이 잘 맞을 수 있습니다.',relation:'신뢰와 약속, 명확한 경계를 중요하게 여길 수 있습니다.',money:'낭비를 줄이고 효율을 따지는 경향이 있을 수 있습니다.',caution:'기준이 높아져 자신이나 타인에게 지나치게 엄격해지지 않는지 확인해 보세요.'},
 수:{person:'흐름을 읽고 정보를 모으며 여러 가능성을 비교하는 성향을 관찰해 볼 수 있습니다.',work:'조사·정보·기획·연결처럼 변화가 있는 환경에서 강점을 느낄 수 있습니다.',study:'다양한 자료를 비교하고 맥락을 이해하는 방식이 잘 맞을 수 있습니다.',relation:'상대의 분위기와 말의 맥락을 세밀하게 읽는 편인지 살펴볼 수 있습니다.',money:'기회를 넓게 보지만 선택을 늦추기 쉬우므로 기준을 정해두는 것이 도움이 될 수 있습니다.',caution:'생각과 정보 수집이 길어져 실행이 늦어지지 않는지 확인해 보세요.'}
};
const GOD_STYLE={
 비견:{work:'혼자 기준을 세우고 직접 해보는 환경',study:'자기주도 학습',relation:'동등한 관계와 자율성',money:'내가 통제할 수 있는 방식의 관리',strength:'꾸준한 자기주도성',caution:'혼자 해결하려는 습관'},
 겁재:{work:'경쟁과 협업이 함께 있는 환경',study:'비교·토론·실전',relation:'에너지 있는 교류',money:'기회 포착과 공동자원',strength:'빠른 대응과 네트워크',caution:'경쟁심이나 충동적 선택'},
 식신:{work:'꾸준히 결과물을 만들어내는 일',study:'반복·실습·설명',relation:'편안하고 안정적인 교류',money:'생활 리듬과 안정적 관리',strength:'지속성과 생산성',caution:'편안함에 머무르는 습관'},
 상관:{work:'문제를 찾아 개선하거나 새 방식으로 표현하는 일',study:'질문·토론·응용',relation:'솔직하고 빠른 피드백',money:'새로운 아이디어와 기회',strength:'창의적 개선 능력',caution:'표현이 너무 날카로워지는 부분'},
 편재:{work:'사람·기회·외부 자원을 연결하는 일',study:'넓게 경험하고 적용하는 방식',relation:'활발하고 넓은 교류',money:'기회와 흐름을 보는 감각',strength:'기회 포착과 확장성',caution:'분산 투자나 즉흥적 소비'},
 정재:{work:'예산·일정·자원을 안정적으로 관리하는 일',study:'계획표와 누적 학습',relation:'약속과 책임을 지키는 관계',money:'예산·저축·현금흐름 관리',strength:'현실감각과 지속성',caution:'안전성만 보느라 기회를 지나치는 부분'},
 편관:{work:'압박 속에서 기준을 세우고 결단하는 일',study:'목표와 마감이 분명한 방식',relation:'책임과 긴장감이 있는 관계',money:'위험을 통제하는 관리',strength:'결단력과 위기대응',caution:'자기압박과 과도한 긴장'},
 정관:{work:'규칙·책임·역할이 분명한 환경',study:'정규 과정과 단계별 학습',relation:'예의와 신뢰가 분명한 관계',money:'계획적이고 규칙적인 관리',strength:'책임감과 안정성',caution:'규칙에 너무 묶이는 부분'},
 편인:{work:'전문지식·분석·직관을 활용하는 일',study:'깊게 파고드는 탐구',relation:'깊지만 선택적인 교류',money:'정보를 충분히 확인한 뒤 결정',strength:'전문성·직관·탐구력',caution:'생각이 복잡해져 행동이 늦어지는 부분'},
 정인:{work:'배우고 정리하고 지원하는 역할',study:'이론·정리·복습',relation:'돌봄과 신뢰가 있는 관계',money:'안정성과 정보에 기반한 관리',strength:'학습력·정리력·지원능력',caution:'준비만 하다가 시작을 늦추는 부분'}
};
function buildPersonalReport(daySi,counts,gods,str,rel){
 const day=STEMS[daySi],el=day.el,d=DAY_STYLE[el],topGod=gods[0]?.[0]||'비견',g=GOD_STYLE[topGod];
 const sorted=Object.entries(counts).sort((a,b)=>b[1]-a[1]),topEl=sorted[0][0],lowEl=sorted.at(-1)[0];
 const now=new Date().getFullYear(),yi=mod(now-1984,60),yearGod=tenGod(daySi,yi%10);
 return {
  personality:`${d.person} ${day.img}에 비유되는 ${day.h}(${day.k}) 일간의 성질을 삶 전체의 정답으로 보지 말고, 실제 자신의 행동과 비교해 보는 것이 좋습니다.`,
  personalityBasis:`해석 근거: 일간 ${day.h}${day.el} · 강한 오행 ${topEl} · 약한 오행 ${lowEl}`,
  work:`${d.work} 특히 ${g.work}에서 자신의 장점을 더 쉽게 느낄 수 있는지 관찰해 보세요.`,
  workBasis:`해석 근거: 일간 ${day.el} + 주요 십성 ${topGod}(${GOD_TEXT[topGod]})`,
  study:`${d.study} ${g.study}도 잘 맞는지 실제 학습 경험과 비교해 보세요.`,
  studyBasis:`해석 근거: 일간 ${day.el} + ${topGod}의 학습 상징`,
  relation:`${d.relation} ${g.relation}을 중요하게 여기는지도 함께 살펴보세요.`,
  relationBasis:`해석 근거: 일간 ${day.el} + 주요 십성 ${topGod}${rel.length?' + '+rel.slice(0,2).join(', '):''}`,
  money:`${d.money} ${g.money} 성향이 겹치는지 실제 소비·저축·투자 기록과 비교하는 방식이 가장 현실적입니다.`,
  moneyBasis:`해석 근거: 일간 ${day.el} + 주요 십성 ${topGod}; 투자수익을 예측하는 해석이 아닙니다.`,
  strength:`${g.strength}과 ${ELSYMBOL[topEl]} 성향을 의식적으로 활용하면 자신의 강점을 더 분명하게 볼 수 있습니다.`,
  strengthBasis:`해석 근거: 상대적으로 높은 오행 ${topEl} + ${topGod}`,
  caution:`${d.caution} 동시에 ${g.caution}도 반복되는지 점검해 보세요. 이것은 약점 판정이 아니라 자기관찰 질문입니다.`,
  cautionBasis:`해석 근거: 일간 ${day.el}의 과잉 가능성 + 주요 십성 ${topGod}`,
  year:`${now}년의 천간은 ${STEMS[yi%10].h}이며, 당신의 일간 기준으로는 ${yearGod} 관계입니다. 올해는 “${GOD_TEXT[yearGod]}”이라는 키워드를 자신의 계획과 행동을 점검하는 질문으로 활용해 보세요.`,
  yearBasis:`해석 근거: ${now}년 ${STEMS[yi%10].h}${BRANCHES[yi%12].h} · 일간 기준 ${yearGod}; 사건을 예언하는 세운 해석이 아닙니다.`
 };
}

function easySummary(day,counts,gods,str,rel){
 const sorted=Object.entries(counts).sort((a,b)=>b[1]-a[1]),top=sorted[0][0],low=sorted.at(-1)[0],g=gods[0]?.[0]||'비견';
 return {
  one:`당신의 기준점인 일간은 ${day.stem.h}(${day.stem.k}), ${day.stem.yin}${day.stem.el}입니다. ${day.stem.img}에 비유하며, 쉽게 말하면 “${day.stem.easy}”을 중심 이미지로 봅니다.`,
  two:`오행에서는 ${top}(${ELSYMBOL[top]})이 상대적으로 눈에 띄고 ${low}은 덜 드러납니다. 강약 참고지표는 “${str.label}”입니다. 이것은 좋고 나쁨 점수가 아니라 균형을 살펴보는 보조 지표입니다.`,
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
function annualRows(daySi,fromYear){
 let rows='';
 for(let y=fromYear;y<fromYear+6;y++){
   const i=mod(y-1984,60),si=i%10,bi=i%12,g=tenGod(daySi,si);
   rows+=`<tr><td>${y}</td><td>${STEMS[si].h}${BRANCHES[bi].h}(${STEMS[si].k}${BRANCHES[bi].k})</td><td>${g}</td><td>${GOD_TEXT[g]}</td></tr>`;
 }
 document.getElementById('annualRows').innerHTML=rows;
}
function renderLuck(luck,daySi){
 const box=document.getElementById('luckSection');
 if(!luck){box.innerHTML='<div class="notice info"><strong>대운 계산</strong><br>성별을 선택하면 전통적인 순행·역행 규칙에 따른 대운 시작 시점과 8개 대운을 표시합니다.</div>';return}
 const dir=luck.dir==='forward'?'순행':'역행';
 let cards=luck.cycles.map(x=>`<div class="luck-card"><b>${fmtPillar(x)}</b><span>${ageText(x.age)} 시작</span><span>${tenGod(daySi,x.si)}</span></div>`).join('');
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
  const easy=easySummary(day,counts,gods,str,rel),personal=buildPersonalReport(dp.si,counts,gods,str,rel);

  document.getElementById('inputSummary').textContent=`양력 ${x.y}-${pad(x.m)}-${pad(x.d)} · ${x.unknown?'생시 모름':pad(x.hh)+':'+pad(x.mm)}${x.timeMode==='solar'?' · '+x.place+' 기준 진태양시 근사 보정':''}`;
  document.getElementById('lunarSummary').textContent=x.lunarInfo?`음력 참고: ${x.lunarInfo.y}-${pad(x.lunarInfo.m)}-${pad(x.lunarInfo.d)}${x.lunarInfo.leap?' 윤달':''}`:'';
  document.getElementById('easyDay').textContent=`${day.stem.h}(${day.stem.k}) · ${day.stem.yin}${day.stem.el}`;
  document.getElementById('easySeason').textContent=`${seasonalName(mp.mi)} · ${mp.jie.ko} 이후 ${BRANCHES[mp.bi].k}월`;
  document.getElementById('easyStrength').textContent=`${str.label} · 균형 참고 ${str.helpers.join('·')}`;
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
  document.getElementById('strengthEasyText').textContent=personal.strength;
  document.getElementById('strengthEasyBasis').textContent=personal.strengthBasis;
  document.getElementById('cautionText').textContent=personal.caution;
  document.getElementById('cautionBasis').textContent=personal.cautionBasis;
  document.getElementById('yearThemeText').textContent=personal.year;
  document.getElementById('yearThemeBasis').textContent=personal.yearBasis;
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
  renderLuck(luckCycles(mp,x.utcMs,yp,x.gender),dp.si);
  annualRows(dp.si,new Date().getFullYear());
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
