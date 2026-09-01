
document.addEventListener('DOMContentLoaded',()=>{const b=document.querySelector('.menu-btn'),n=document.querySelector('.nav-links');if(b&&n)b.addEventListener('click',()=>n.classList.toggle('open'));document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('/sw.js').catch(()=>{}));}
