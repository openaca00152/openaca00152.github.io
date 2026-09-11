
let __installPrompt=null;
function isStandalone(){return window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone===true}
function isiOS(){return /iphone|ipad|ipod/i.test(navigator.userAgent)}
function injectInstallUI(){
 if(isStandalone())return;
 document.querySelectorAll('[data-install-app]').forEach(b=>b.addEventListener('click',installApp));
 const nav=document.querySelector('.nav');
 if(nav&&!nav.querySelector('.install-header-btn')){
   const b=document.createElement('button');b.className='install-header-btn';b.type='button';b.textContent='📱 설치';b.addEventListener('click',installApp);nav.appendChild(b);
 }
 if(!document.getElementById('installModal')){
   const m=document.createElement('div');m.id='installModal';m.className='install-modal hide';
   m.innerHTML=`<div class="install-dialog"><button class="install-close" aria-label="닫기">×</button><img src="/assets/icons/icon-192.png" alt=""><h2>스마트폰 바탕화면에 설치</h2><div id="installHelp"></div></div>`;
   document.body.appendChild(m);m.querySelector('.install-close').onclick=()=>m.classList.add('hide');m.onclick=e=>{if(e.target===m)m.classList.add('hide')};
 }
}
function showInstallHelp(html){const m=document.getElementById('installModal');document.getElementById('installHelp').innerHTML=html;m.classList.remove('hide')}
async function installApp(){
 if(isStandalone()){alert('이미 홈 화면 앱으로 실행 중입니다.');return}
 if(__installPrompt){__installPrompt.prompt();const r=await __installPrompt.userChoice;if(r.outcome==='accepted')__installPrompt=null;return;}
 if(isiOS())showInstallHelp('<p><strong>iPhone / iPad</strong></p><p>가장 확실한 방법은 <b>Safari에서 이 사이트를 여는 것</b>입니다. Chrome에서 보고 있다면 Safari로 주소를 열어주세요.</p><ol><li>Safari의 <b>공유</b> 버튼을 누릅니다.</li><li><b>홈 화면에 추가</b>를 선택합니다.</li><li>오른쪽 위 <b>추가</b>를 누릅니다.</li></ol>');
 else showInstallHelp('<p><strong>Chrome / Edge / Android</strong></p><p>브라우저 메뉴의 <b>앱 설치</b> 또는 <b>홈 화면에 추가</b>를 선택하세요. 설치 조건이 충족되면 이 버튼에서 설치 창이 바로 열립니다.</p>');
}
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();__installPrompt=e});
window.addEventListener('appinstalled',()=>{__installPrompt=null;document.querySelectorAll('.install-header-btn,[data-install-app]').forEach(x=>x.classList.add('hide'))});

(function loadVisualTheme(){
 const l=document.createElement('link');l.rel='stylesheet';l.href='/assets/css/weekday-theme.css?v=20260911-rainbow1';document.head.appendChild(l);
 if(location.pathname==='/tools/daily-fortune.html'){const d=document.createElement('link');d.rel='stylesheet';d.href='/assets/css/daily-fortune.css?v=20260911-daily1';document.head.appendChild(d)}
})();

const WEEKDAY_THEMES=[
 {cls:'theme-sun',name:'일요일',label:'코랄 레드'},
 {cls:'theme-mon',name:'월요일',label:'포근한 오렌지'},
 {cls:'theme-tue',name:'화요일',label:'햇살 옐로'},
 {cls:'theme-wed',name:'수요일',label:'새싹 그린'},
 {cls:'theme-thu',name:'목요일',label:'맑은 블루'},
 {cls:'theme-fri',name:'금요일',label:'라일락 인디고'},
 {cls:'theme-sat',name:'토요일',label:'포근한 바이올렛'}
];
function applyWeekdayTheme(){
 const theme=WEEKDAY_THEMES[new Date().getDay()];
 document.body.classList.add(theme.cls);
 document.documentElement.dataset.weekdayTheme=theme.cls;
 const host=document.querySelector('.hero .kicker,.daily-hero .kicker');
 if(host&&!document.querySelector('.day-theme-chip')){
   const chip=document.createElement('span');chip.className='day-theme-chip';chip.innerHTML=`<i></i>${theme.name} · ${theme.label}`;host.insertAdjacentElement('afterend',chip);
 }
 const meta=document.querySelector('meta[name="theme-color"]');
 const css=getComputedStyle(document.body).getPropertyValue('--day-accent-deep').trim();if(meta&&css)meta.setAttribute('content',css);
}

document.addEventListener('DOMContentLoaded',()=>{
 applyWeekdayTheme();
 const b=document.querySelector('.menu-btn'),n=document.querySelector('.nav-links');if(b&&n)b.addEventListener('click',()=>n.classList.toggle('open'));
 document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());injectInstallUI();
});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}));}
