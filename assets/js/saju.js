
const STEMS=[
 {k:'갑',h:'甲',el:'목',yin:'양',img:'큰 나무',desc:'방향을 세우고 곧게 성장하는 큰 나무의 상징입니다. 원칙·개척·장기적인 성장이라는 언어로 풀이합니다.'},
 {k:'을',h:'乙',el:'목',yin:'음',img:'풀과 덩굴',desc:'환경을 읽으며 유연하게 뻗는 풀과 덩굴의 상징입니다. 조율·관계감각·세밀한 성장이라는 언어로 풀이합니다.'},
 {k:'병',h:'丙',el:'화',yin:'양',img:'태양',desc:'넓게 비추는 태양의 상징입니다. 표현·활동성·공개성·분위기를 움직이는 힘이라는 언어로 풀이합니다.'},
 {k:'정',h:'丁',el:'화',yin:'음',img:'등불',desc:'필요한 곳을 집중해서 밝히는 등불의 상징입니다. 섬세한 표현·집중·감각·지속적인 열정으로 풀이합니다.'},
 {k:'무',h:'戊',el:'토',yin:'양',img:'산과 대지',desc:'큰 산과 넓은 땅의 상징입니다. 버팀·책임·안정·큰 틀을 유지하는 성향이라는 언어로 풀이합니다.'},
 {k:'기',h:'己',el:'토',yin:'음',img:'밭과 정원',desc:'가꾸고 정리하는 밭과 정원의 상징입니다. 세밀한 관리·균형·실용성·돌봄이라는 언어로 풀이합니다.'},
 {k:'경',h:'庚',el:'금',yin:'양',img:'원석과 쇠',desc:'단단한 쇠와 원석의 상징입니다. 결단·정리·직선적인 실행·기준을 세우는 힘으로 풀이합니다.'},
 {k:'신',h:'辛',el:'금',yin:'음',img:'보석과 세공',desc:'정교하게 다듬어진 보석의 상징입니다. 품질·분별·정밀함·완성도를 높이는 감각으로 풀이합니다.'},
 {k:'임',h:'壬',el:'수',yin:'양',img:'큰 강과 바다',desc:'넓게 흐르는 강과 바다의 상징입니다. 탐색·이동·정보의 흐름·큰 그림을 읽는 감각으로 풀이합니다.'},
 {k:'계',h:'癸',el:'수',yin:'음',img:'비와 이슬',desc:'스며드는 비와 이슬의 상징입니다. 관찰·감수성·축적·조용한 적응이라는 언어로 풀이합니다.'}
];
const BRANCHES=[
 {k:'자',h:'子',el:'수',animal:'쥐'},{k:'축',h:'丑',el:'토',animal:'소'},{k:'인',h:'寅',el:'목',animal:'호랑이'},{k:'묘',h:'卯',el:'목',animal:'토끼'},
 {k:'진',h:'辰',el:'토',animal:'용'},{k:'사',h:'巳',el:'화',animal:'뱀'},{k:'오',h:'午',el:'화',animal:'말'},{k:'미',h:'未',el:'토',animal:'양'},
 {k:'신',h:'申',el:'금',animal:'원숭이'},{k:'유',h:'酉',el:'금',animal:'닭'},{k:'술',h:'戌',el:'토',animal:'개'},{k:'해',h:'亥',el:'수',animal:'돼지'}
];
const ELEMENTS=['목','화','토','금','수'];
const EL_TEXT={목:'성장·기획·확장',화:'표현·활동·확산',토:'안정·관리·중재',금:'판단·정리·기준',수:'관찰·정보·유연'};
const GOD_TEXT={
 '비견':'자기주도·동료·독립','겁재':'경쟁·협업·공유 자원','식신':'꾸준한 표현·생산·생활감','상관':'개선·창의·직접적인 표현','편재':'기회 탐색·외부 자원·시장감각','정재':'예산·축적·현실 관리','편관':'압력 대응·결단·규율','정관':'책임·규칙·역할 수행','편인':'직관·전문 탐구·색다른 학습','정인':'학습·자료·지원·정리'};
function mod(n,m){return ((n%m)+m)%m}
function dateParts(v){const [y,m,d]=v.split('-').map(Number);return {y,m,d,mmdd:m*100+d}}
function cycleForYear(y){const i=mod(y-1984,60);return {i,si:i%10,bi:i%12}}
function yearPillar(p){let y=p.y;if(p.mmdd<204)y--;return {...cycleForYear(y),year:y}}
function solarMonthIndex(p){const x=p.mmdd;if(x>=204&&x<306)return 0;if(x>=306&&x<405)return 1;if(x>=405&&x<506)return 2;if(x>=506&&x<606)return 3;if(x>=606&&x<707)return 4;if(x>=707&&x<808)return 5;if(x>=808&&x<908)return 6;if(x>=908&&x<1008)return 7;if(x>=1008&&x<1107)return 8;if(x>=1107&&x<1207)return 9;if(x>=1207||x<106)return 10;return 11}
function monthPillar(p,yp){const mi=solarMonthIndex(p);const base=[2,4,6,8,0][yp.si%5];return {si:(base+mi)%10,bi:(2+mi)%12,mi}}
function dayPillar(p){const base=Date.UTC(2000,0,7),cur=Date.UTC(p.y,p.m-1,p.d);const diff=Math.round((cur-base)/86400000);const i=mod(diff,60);return {i,si:i%10,bi:i%12}}
function hourPillar(time,dp){if(!time)return null;const [h,m]=time.split(':').map(Number);const bi=Math.floor(((h+1)%24)/2);const base=[0,2,4,6,8][dp.si%5];return {si:(base+bi)%10,bi,h,m}}
function pillarObj(p){return {stem:STEMS[p.si],branch:BRANCHES[p.bi],si:p.si,bi:p.bi}}
function tenGod(daySi,otherSi){if(daySi===otherSi)return '비견';const d=STEMS[daySi],o=STEMS[otherSi];const di=ELEMENTS.indexOf(d.el),oi=ELEMENTS.indexOf(o.el),same=d.yin===o.yin;if(di===oi)return same?'비견':'겁재';if((di+1)%5===oi)return same?'식신':'상관';if((di+2)%5===oi)return same?'편재':'정재';if((oi+1)%5===di)return same?'편인':'정인';return same?'편관':'정관'}
function branchMainStemIndex(bi){return [9,5,0,1,4,2,3,5,6,7,4,8][bi]}
function season(mi){if(mi<=2)return '봄';if(mi<=5)return '여름';if(mi<=8)return '가을';return '겨울'}
function boundaryWarning(p,time){const marks=[106,204,306,405,506,606,707,808,908,1008,1107,1207];let near=marks.some(v=>Math.abs(p.mmdd-v)<=1);let late=time&&Number(time.slice(0,2))===23;return {near,late}}
function countElements(ps){const c={목:0,화:0,토:0,금:0,수:0};ps.filter(Boolean).forEach(x=>{c[STEMS[x.si].el]++;c[BRANCHES[x.bi].el]++});return c}
function dominantGod(daySi,ps){const counts={};ps.filter(Boolean).forEach((x,idx)=>{if(idx===2)return;[x.si,branchMainStemIndex(x.bi)].forEach(si=>{const g=tenGod(daySi,si);counts[g]=(counts[g]||0)+1})});return Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,3)}
function relationText(daySi,annualSi){const g=tenGod(daySi,annualSi);return `${g}(${GOD_TEXT[g]})의 상징이 전면에 들어오는 해로 읽을 수 있습니다. 이것은 사건 예측이 아니라 올해 무엇을 점검해 볼지 정하는 전통적 참고 언어입니다.`}
function personalText(day,counts,gods,month){const dm=day.stem;const sorted=Object.entries(counts).sort((a,b)=>b[1]-a[1]);const top=sorted[0][0],low=sorted[sorted.length-1][0];const topGod=gods[0]?.[0]||'비견';return {
 core:`일간은 ${dm.h}(${dm.k}), ${dm.yin}${dm.el}입니다. ${dm.img}에 비유하며, ${dm.desc} 표면 오행에서는 ${top}(${EL_TEXT[top]})이 상대적으로 두드러지고 ${low}은 덜 드러납니다. 이는 좋고 나쁨의 점수가 아니라 현재 사주 여덟 글자의 표면 배치를 읽는 방식입니다.`,
 work:`십성 표면 배치에서는 ${topGod}의 언어가 비교적 눈에 띕니다. ${GOD_TEXT[topGod]}과 관련된 상황에서 자신의 방식이 잘 드러나는지 관찰해 보세요. 직업을 정해 주는 결과가 아니라, 업무 방식·학습 습관·의사결정 패턴을 돌아보는 질문으로 쓰는 것이 좋습니다.`,
 relation:`${dm.yin==='양'?'방향을 분명히 하되 상대의 속도를 확인하는 대화':'상대의 맥락을 잘 읽는 장점을 살리되 자신의 기준을 말로 분명히 하는 대화'}가 균형에 도움이 될 수 있다는 상징적 해석이 가능합니다. 관계의 실제 결과는 의사소통과 행동에 의해 달라집니다.`,
 money:`재물 영역은 ‘얼마를 벌 운명’으로 보지 않고 자원 관리 습관으로 읽습니다. ${counts['토']+counts['금']>=3?'정리·예산·기준을 수치로 기록하는 방식':'지출·저축·목표를 눈에 보이는 기준으로 만드는 방식'}을 점검해 보세요. 이 내용은 투자 조언이나 수익 예측이 아닙니다.`,
 balance:`태어난 절기 월의 배경은 ${season(month.mi)}입니다. 전통 명리에서는 계절이 오행의 표현 강도에 영향을 준다고 봅니다. 이 도구는 지장간·용신·격국을 단정하지 않으므로, ‘부족한 오행을 무조건 채워야 한다’는 식으로 해석하지 않습니다.`
}}
function renderPillar(id,label,p){const el=document.getElementById(id);if(!p){el.classList.add('missing');el.innerHTML=`<div class="label">${label}</div><div class="hanja">—</div><div class="ko">생시 모름</div>`;return}const s=STEMS[p.si],b=BRANCHES[p.bi];el.classList.remove('missing');el.innerHTML=`<div class="label">${label}</div><div class="hanja">${s.h}${b.h}</div><div class="ko">${s.k}${b.k} · ${s.el}/${b.el}</div>`}
function renderBars(c){const max=Math.max(...Object.values(c),1);document.getElementById('elementBars').innerHTML=ELEMENTS.map(e=>`<div class="element-row"><b>${e}</b><div class="bar"><i style="width:${Math.max(8,c[e]/max*100)}%"></i></div><span>${c[e]}</span></div>`).join('')}
function makeQuestions(dm,topEl,topGod){return [`${dm.img}의 상징처럼 내가 오래 끌고 가고 싶은 방향은 무엇인가?`,`${topEl}(${EL_TEXT[topEl]})의 장점이 과해질 때 나타나는 습관은 무엇인가?`,`${topGod}(${GOD_TEXT[topGod]})과 관련해 최근 가장 잘한 선택 한 가지는 무엇인가?`]}
function showSaju(){const date=document.getElementById('birthDate').value;let time=document.getElementById('unknownTime').checked?'':document.getElementById('birthTime').value;if(!date){alert('양력 생년월일을 선택해주세요.');return}const p=dateParts(date),yp=yearPillar(p),mp=monthPillar(p,yp),dp=dayPillar(p),hp=hourPillar(time,dp);const po=[yp,mp,dp,hp];renderPillar('pYear','연주',yp);renderPillar('pMonth','월주',mp);renderPillar('pDay','일주',dp);renderPillar('pHour','시주',hp);const day=pillarObj(dp);const counts=countElements(po),gods=dominantGod(dp.si,po),sorted=Object.entries(counts).sort((a,b)=>b[1]-a[1]),topEl=sorted[0][0];renderBars(counts);document.getElementById('dayMaster').textContent=`${day.stem.h}(${day.stem.k}) · ${day.stem.yin}${day.stem.el}`;document.getElementById('zodiac').textContent=`${BRANCHES[yp.bi].animal}띠 · ${STEMS[yp.si].k}${BRANCHES[yp.bi].k}년`;document.getElementById('season').textContent=`${season(mp.mi)} · ${BRANCHES[mp.bi].k}월 배경`;document.getElementById('godChips').innerHTML=gods.map(([g,n])=>`<span class="god-chip">${g} ${n} · ${GOD_TEXT[g]}</span>`).join('');const t=personalText(day,counts,gods,mp);['core','work','relation','money','balance'].forEach(k=>document.getElementById(k+'Text').textContent=t[k]);const now=new Date(),np={y:now.getFullYear(),m:now.getMonth()+1,d:now.getDate(),mmdd:(now.getMonth()+1)*100+now.getDate()},ay=yearPillar(np);document.getElementById('annualTitle').textContent=`${ay.year}년 ${STEMS[ay.si].h}${BRANCHES[ay.bi].h}(${STEMS[ay.si].k}${BRANCHES[ay.bi].k}) 테마`;document.getElementById('annualText').textContent=relationText(dp.si,ay.si);const qs=makeQuestions(day.stem,topEl,gods[0]?.[0]||'비견');document.getElementById('questions').innerHTML=qs.map(q=>`<li>${q}</li>`).join('');const bw=boundaryWarning(p,time);const warnings=[];if(bw.near)warnings.push('절기 경계일 전후 출생이므로 월주가 전문 만세력과 달라질 수 있습니다.');if(bw.late)warnings.push('23시대 출생은 일주 경계를 다르게 적용하는 명리 방식이 있습니다.');document.getElementById('boundaryBox').classList.toggle('hide',warnings.length===0);document.getElementById('boundaryText').textContent=warnings.join(' ');document.getElementById('sajuResult').classList.add('show');document.getElementById('sajuResult').scrollIntoView({behavior:'smooth',block:'start'});window.__lastReport=`${date} ${time||'생시 모름'}\n연주 ${STEMS[yp.si].h}${BRANCHES[yp.bi].h} / 월주 ${STEMS[mp.si].h}${BRANCHES[mp.bi].h} / 일주 ${STEMS[dp.si].h}${BRANCHES[dp.bi].h}${hp?` / 시주 ${STEMS[hp.si].h}${BRANCHES[hp.bi].h}`:''}\n일간 ${document.getElementById('dayMaster').textContent}\n\n${t.core}\n\n${t.work}\n\n${t.relation}\n\n${t.money}\n\n${t.balance}`}
function copyReport(){if(!window.__lastReport)return; navigator.clipboard.writeText(window.__lastReport).then(()=>alert('개인 맞춤 리포트를 복사했습니다.')).catch(()=>alert('복사하지 못했습니다.'))}
document.addEventListener('DOMContentLoaded',()=>{const c=document.getElementById('unknownTime'),t=document.getElementById('birthTime');if(c&&t)c.addEventListener('change',()=>{t.disabled=c.checked})});
