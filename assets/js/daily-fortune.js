(()=>{
'use strict';

const $=id=>document.getElementById(id);
const KEY_PROFILE='dailyFortuneProfileV1';
const KEY_HISTORY='dailyFortuneHistoryV1';
const animals=['쥐','소','호랑이','토끼','용','뱀','말','양','원숭이','닭','개','돼지'];
const animalTraits={
 '쥐':'빠르게 정보를 모으고 기회를 포착하는 감각','소':'꾸준함과 책임감으로 흐름을 안정시키는 힘','호랑이':'결단과 추진으로 분위기를 바꾸는 힘','토끼':'관계를 부드럽게 조율하고 세밀하게 살피는 힘','용':'큰 그림을 그리고 존재감을 드러내는 힘','뱀':'관찰하고 핵심을 파고드는 집중력','말':'움직이며 기회를 만드는 활동성','양':'배려와 감각으로 주변을 편안하게 만드는 힘','원숭이':'변화에 빠르게 적응하고 해결책을 찾는 힘','닭':'기준을 세우고 완성도를 높이는 꼼꼼함','개':'약속과 신뢰를 지키며 관계를 보호하는 힘','돼지':'여유와 포용으로 사람과 자원을 연결하는 힘'
};
const colors=['짙은 남색','따뜻한 베이지','초록','하늘색','버건디','금빛 노랑','연보라','회청색','코랄','아이보리'];
const keywords=['정리','집중','연결','점검','전환','대화','휴식','실행','기록','선택','균형','마무리'];
const times=['오전 8~10시','오전 10~12시','오후 1~3시','오후 3~5시','오후 6~8시'];
const symbols=[
 {name:'정리하는 물',text:'오늘은 넓게 벌리기보다 흩어진 것을 한곳으로 모으는 흐름에 초점을 둡니다. 메모, 일정, 지출처럼 눈에 보이는 것을 정리하면 판단이 쉬워집니다.'},
 {name:'싹을 틔우는 나무',text:'작더라도 시작하는 행동에 의미를 두는 날입니다. 완벽한 계획보다 첫 단계를 실제로 실행하는 쪽에 무게를 둡니다.'},
 {name:'빛을 모으는 불',text:'표현과 소통이 중요한 날입니다. 혼자 생각만 하기보다 필요한 말은 분명하게 전달하고, 중요한 일은 우선순위를 정해 집중하세요.'},
 {name:'기반을 다지는 흙',text:'새로운 자극보다 기본을 점검하는 흐름입니다. 약속, 수면, 식사, 업무 절차처럼 반복되는 생활 기반을 정비하면 안정감을 얻기 쉽습니다.'},
 {name:'날을 세우는 금',text:'기준과 선택이 중요한 날입니다. 해야 할 것과 하지 않을 것을 나누고, 모호한 결정은 조건을 적어 비교하는 방식이 도움이 됩니다.'}
];

const copy={
 work:{high:['미뤄둔 핵심 업무를 앞으로 당기기 좋습니다. 중요한 연락은 짧고 분명하게 정리해 보세요.','집중력이 살아나는 흐름입니다. 여러 일을 동시에 벌이기보다 가장 중요한 한 가지를 먼저 끝내는 편이 좋습니다.'],mid:['속도보다 순서를 정하는 것이 중요합니다. 오전에 우선순위를 적어두면 흔들림을 줄일 수 있습니다.','새로운 일을 크게 벌이기보다 진행 중인 일을 다듬는 쪽에서 성과를 만들기 쉽습니다.'],low:['오늘은 즉흥적인 결정이나 무리한 일정 확대를 피하고 확인 절차를 한 번 더 거치는 편이 좋습니다.','성과를 서두르기보다 누락과 오류를 점검하세요. 중요한 결정은 자료를 모은 뒤 판단하는 쪽이 안전합니다.']},
 money:{high:['돈을 쓰기보다 흐름을 관리하는 감각이 좋아지는 날입니다. 예산을 정리하거나 필요한 지출의 우선순위를 세워보세요.','작은 절약이나 정리에서 만족감을 얻기 쉽습니다. 수입보다 지출 구조를 점검하는 행동이 잘 맞습니다.'],mid:['큰 지출보다 일상적인 소비를 점검해 보세요. 사고 싶은 것과 필요한 것을 구분하면 선택이 쉬워집니다.','재물운은 기회보다 관리에 초점을 둡니다. 결제 전 한 번 더 비교하는 습관이 도움이 됩니다.'],low:['충동구매와 감정적인 금전 결정을 줄이는 날로 활용하세요. 투자·대출·복권 판단은 운세와 분리해야 합니다.','돈과 관련해서는 보수적인 태도가 유리합니다. 새로운 지출은 하루 정도 생각할 시간을 두는 편이 좋습니다.']},
 relation:{high:['대화를 먼저 건네면 관계가 부드럽게 풀리기 쉽습니다. 고마웠던 사람에게 짧게라도 마음을 표현해 보세요.','상대의 말을 끝까지 듣는 태도가 좋은 분위기를 만듭니다. 중요한 관계일수록 결론보다 공감이 먼저입니다.'],mid:['사소한 오해를 키우지 않는 것이 중요합니다. 말의 의도보다 실제 표현을 차분히 확인해 보세요.','많이 말하기보다 필요한 말을 정확하게 하는 날입니다. 친한 사이일수록 당연하다고 넘기지 않는 편이 좋습니다.'],low:['감정이 올라올 때 바로 결론을 내리지 않는 편이 좋습니다. 답장이나 중요한 대화는 잠시 시간을 두고 정리해 보세요.','상대를 바꾸려 하기보다 내 반응을 조절하는 데 초점을 두세요. 피곤할수록 말이 날카로워질 수 있습니다.']},
 rhythm:{high:['몸과 마음의 리듬을 되찾기 좋은 날입니다. 짧은 산책이나 스트레칭처럼 가벼운 움직임을 생활에 넣어보세요.','집중과 휴식의 균형을 만들기 좋습니다. 오래 앉아 있었다면 중간중간 몸을 움직여 흐름을 환기하세요.'],mid:['피로를 무시하지 말고 일정 사이에 짧은 여백을 두세요. 생활 리듬을 일정하게 유지하는 것이 도움이 됩니다.','과도한 몰입보다 적당한 휴식이 필요합니다. 늦은 시간까지 미룬 일을 끌고 가지 않는 편이 좋습니다.'],low:['무리해서 컨디션을 끌어올리려 하지 마세요. 수면, 식사, 휴식처럼 기본적인 생활 리듬을 먼저 챙기는 날로 삼으세요.','피곤함이 쌓였다면 중요한 일을 줄이고 회복 시간을 확보하세요. 건강 문제는 운세가 아니라 실제 증상과 의료 판단을 기준으로 확인해야 합니다.']}
};

function hash(str){let h=2166136261;for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619);}return h>>>0;}
function rng(seed){let s=seed>>>0;return()=>{s+=0x6D2B79F5;let t=s;t=Math.imul(t^(t>>>15),t|1);t^=t+Math.imul(t^(t>>>7),t|61);return((t^(t>>>14))>>>0)/4294967296;};}
function localDateKey(d=new Date()){const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');return `${y}-${m}-${day}`;}
function formatDate(d=new Date()){return new Intl.DateTimeFormat('ko-KR',{year:'numeric',month:'long',day:'numeric',weekday:'long'}).format(d);}
function zodiac(year){return animals[((year-4)%12+12)%12];}
function pick(arr,r){return arr[Math.floor(r()*arr.length)];}
function score(r){return Math.round(54+r()*39);}
function band(n){return n>=78?'high':n>=64?'mid':'low';}
function advice(type,n,r){return pick(copy[type][band(n)],r);}
function daysBetween(a,b){return Math.round((new Date(b+'T12:00:00')-new Date(a+'T12:00:00'))/86400000);}
function getHistory(){try{return JSON.parse(localStorage.getItem(KEY_HISTORY)||'[]')}catch{return[]}}
function saveHistory(list){localStorage.setItem(KEY_HISTORY,JSON.stringify(list.slice(-30)))}

function generate(profile,dateObj){
 const key=localDateKey(dateObj);
 const seed=hash(`${profile.birth}|${profile.time||''}|${key}|daily-v1`);
 const r=rng(seed);
 const work=score(r),money=score(r),relation=score(r),rhythm=score(r);
 const total=Math.round((work*1.1+money+relation+rhythm*.9)/4);
 const year=Number(profile.birth.slice(0,4));
 const animal=zodiac(year);
 const symbol=symbols[Math.floor(r()*symbols.length)];
 const keyword=pick(keywords,r),color=pick(colors,r),num=1+Math.floor(r()*9),goodTime=pick(times,r);
 const actionBank= total>=78 ? [
   ['가장 중요한 일을 오전에 먼저 끝내세요.','좋은 흐름을 여러 곳에 나누기보다 한 가지 결과로 남기는 것이 오늘의 핵심입니다.'],
   ['먼저 연락해야 할 사람에게 짧게 연락하세요.','관계와 일이 함께 풀리는 날은 기다리기보다 먼저 작은 행동을 시작하는 편이 좋습니다.']
 ] : total>=64 ? [
   ['오늘 할 일 세 가지를 적고 첫 번째부터 처리하세요.','해야 할 일이 많을수록 순서를 정하는 행동이 하루의 피로를 줄여줍니다.'],
   ['미뤄둔 작은 일 하나를 마무리하세요.','새로운 시작보다 기존의 빈틈을 닫는 행동이 오늘의 안정감을 높여줍니다.']
 ] : [
   ['큰 결정보다 확인과 정리에 시간을 쓰세요.','컨디션과 판단이 흔들릴 때는 결정의 속도를 늦추는 것이 오히려 좋은 선택이 됩니다.'],
   ['일정을 하나 줄이고 여유 시간을 만드세요.','무리하게 채우기보다 남겨둔 시간이 오늘의 실수를 줄이는 안전장치가 됩니다.']
 ];
 const action=pick(actionBank,r);
 const name=profile.name?`${profile.name}님, `:'';
 const summary=`${name}오늘은 “${keyword}”이 핵심 주제입니다. ${animal}띠의 ${animalTraits[animal]}을 너무 서두르지 않고 현실적인 행동으로 옮기는 데 초점을 맞춰보세요.`;
 return {key,total,work,money,relation,rhythm,animal,symbol,keyword,color,num,goodTime,action,summary,
  workText:advice('work',work,r),moneyText:advice('money',money,r),relationText:advice('relation',relation,r),rhythmText:advice('rhythm',rhythm,r)};
}

function loadProfile(){
 try{const p=JSON.parse(localStorage.getItem(KEY_PROFILE)||'null');if(!p)return;$('dailyName').value=p.name||'';$('dailyBirth').value=p.birth||'';$('dailyTime').value=p.time||'12:00';$('rememberDaily').checked=true;}catch{}
}
function saveProfile(p){if($('rememberDaily').checked)localStorage.setItem(KEY_PROFILE,JSON.stringify(p));else localStorage.removeItem(KEY_PROFILE)}
function recordResult(res){
 let h=getHistory().filter(x=>x.key!==res.key);
 h.push({key:res.key,total:res.total,work:res.work,money:res.money,relation:res.relation,rhythm:res.rhythm});
 h.sort((a,b)=>a.key.localeCompare(b.key));saveHistory(h);return h;
}
function streakInfo(history){
 if(!history.length)return 0;
 const keys=[...new Set(history.map(x=>x.key))].sort();let count=1;
 for(let i=keys.length-1;i>0;i--){if(daysBetween(keys[i-1],keys[i])===1)count++;else break;}
 const today=localDateKey();const last=keys[keys.length-1];if(last!==today&&daysBetween(last,today)>1)return 0;return count;
}
function renderHistory(history){
 const recent=history.slice(-7);const el=$('weeklyDays');el.innerHTML='';
 recent.forEach(x=>{const d=new Date(x.key+'T12:00:00');const item=document.createElement('div');item.className='weekly-day';item.innerHTML=`<span>${new Intl.DateTimeFormat('ko-KR',{weekday:'short'}).format(d)}</span><strong>${x.total}</strong><small>${x.key.slice(5).replace('-','.')}</small>`;el.appendChild(item)});
 if(recent.length<2){$('weeklySummary').textContent='내일부터 다시 확인하면 최근 흐름이 차곡차곡 쌓입니다.';return;}
 const avg=Math.round(recent.reduce((s,x)=>s+x.total,0)/recent.length);
 const best=['work','money','relation','rhythm'].map(k=>[k,recent.reduce((s,x)=>s+x[k],0)/recent.length]).sort((a,b)=>b[1]-a[1])[0][0];
 const names={work:'일·사업',money:'재물 관리',relation:'관계·소통',rhythm:'생활 리듬'};
 $('weeklySummary').textContent=`최근 ${recent.length}일 종합 평균은 ${avg}점입니다. 점수 자체보다 “${names[best]}” 영역이 상대적으로 안정적으로 나타났다는 점을 참고해, 실제 생활에서 잘된 행동을 이어가 보세요.`;
}
function renderStreak(history){const n=streakInfo(history);$('streakCount').textContent=n||1;$('streakText').textContent=n>1?`${n}일째 오늘의 흐름을 기록하고 있습니다.`:'오늘부터 가볍게 하루 기록을 시작해 보세요.';}

function render(res,profile){
 $('dailyResultTitle').textContent=`${profile.name?profile.name+'님의 ':''}${formatDate()} 운세`;
 $('dailySummary').textContent=res.summary;
 $('scoreTotal').textContent=res.total;$('scoreWork').textContent=res.work;$('scoreMoney').textContent=res.money;$('scoreRelation').textContent=res.relation;$('scoreRhythm').textContent=res.rhythm;
 $('textWork').textContent=res.workText;$('textMoney').textContent=res.moneyText;$('textRelation').textContent=res.relationText;$('textRhythm').textContent=res.rhythmText;
 $('todayAction').textContent=res.action[0];$('todayActionDetail').textContent=res.action[1];
 $('luckyKeyword').textContent=res.keyword;$('luckyColor').textContent=res.color;$('luckyNumber').textContent=res.num;$('luckyTime').textContent=res.goodTime;
 $('dailySymbolTitle').textContent=`${res.animal}띠 × ${res.symbol.name}`;$('dailySymbolText').textContent=res.symbol.text;$('dailyBasis').textContent=`개인화 기준: 입력한 생년월일의 띠 상징과 ${res.key} 날짜를 결합한 데일리 콘텐츠입니다. 정밀 만세력의 일진·용신 판정이 아닙니다.`;
 const tomorrow=new Date();tomorrow.setDate(tomorrow.getDate()+1);const t=generate(profile,tomorrow);
 $('tomorrowTitle').textContent=`내일의 키워드 · ${t.keyword}`;$('tomorrowText').textContent=`내일은 오늘보다 ${t.total>=res.total?'조금 더 적극적인 행동':'속도를 조절하고 정리하는 행동'}에 초점을 둘 수 있습니다. 미리 일정을 빽빽하게 채우기보다 중요한 한 가지를 남겨두세요.`;
 $('dailyResult').classList.add('show');
 const hist=recordResult(res);renderHistory(hist);renderStreak(hist);
 setTimeout(()=>$('dailyResult').scrollIntoView({behavior:'smooth',block:'start'}),80);
}

function run(){
 const birth=$('dailyBirth').value;if(!birth){alert('생년월일을 입력해주세요.');$('dailyBirth').focus();return;}
 const profile={name:$('dailyName').value.trim(),birth,time:$('dailyTime').value||''};
 saveProfile(profile);render(generate(profile,new Date()),profile);
}

document.addEventListener('DOMContentLoaded',()=>{
 $('todayLabel').textContent=formatDate();loadProfile();renderStreak(getHistory());renderHistory(getHistory());$('dailyFortuneBtn').addEventListener('click',run);
 $('dailyBirth').addEventListener('keydown',e=>{if(e.key==='Enter')run()});
});
})();