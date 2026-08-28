
const stems = ['갑(甲)','을(乙)','병(丙)','정(丁)','무(戊)','기(己)','경(庚)','신(辛)','임(壬)','계(癸)'];
const branches = ['자(子)','축(丑)','인(寅)','묘(卯)','진(辰)','사(巳)','오(午)','미(未)','신(申)','유(酉)','술(戌)','해(亥)'];
const animals = ['쥐','소','호랑이','토끼','용','뱀','말','양','원숭이','닭','개','돼지'];
const elements = [
  {name:'목(木)', text:'성장·확장·기획이라는 상징으로 설명됩니다. 새로운 일을 시작하고 방향을 세우는 이미지와 연결해 이해할 수 있습니다.'},
  {name:'화(火)', text:'표현·활동·확산의 상징으로 설명됩니다. 에너지를 바깥으로 드러내는 이미지와 연결해 볼 수 있습니다.'},
  {name:'토(土)', text:'균형·중재·기반의 상징으로 설명됩니다. 여러 요소를 받아들이고 정리하는 이미지와 연결됩니다.'},
  {name:'금(金)', text:'정리·판단·원칙의 상징으로 설명됩니다. 기준을 세우고 다듬는 이미지와 연결해 이해할 수 있습니다.'},
  {name:'수(水)', text:'유연·관찰·축적의 상징으로 설명됩니다. 흐름을 읽고 정보를 모으는 이미지와 연결됩니다.'}
];

function hashString(s){
  let h = 2166136261;
  for(let i=0;i<s.length;i++){ h ^= s.charCodeAt(i); h = Math.imul(h,16777619); }
  return h >>> 0;
}
function showSaju(){
  const date = document.getElementById('birthDate').value;
  const time = document.getElementById('birthTime').value;
  if(!date){ alert('생년월일을 선택해주세요.'); return; }
  const y = Number(date.slice(0,4));
  const idx = ((y - 1984) % 60 + 60) % 60;
  const stem = stems[idx % 10], branch = branches[idx % 12], animal = animals[idx % 12];
  const h = hashString(date + '|' + time);
  const e = elements[h % elements.length];
  document.getElementById('yearPillar').textContent = stem + ' · ' + branch;
  document.getElementById('animal').textContent = animal + '띠';
  document.getElementById('element').textContent = e.name;
  document.getElementById('interpretation').textContent =
    '이 결과는 입력값을 바탕으로 전통 명리의 상징을 쉽게 체험하도록 만든 간이 콘텐츠입니다. ' +
    e.text + ' 실제 사주 명식은 절기, 음력·양력 변환, 출생지와 시각 보정 등 추가 요소를 고려할 수 있으므로 전문 만세력 계산과 동일하지 않습니다.';
  document.getElementById('sajuResult').classList.add('show');
}
