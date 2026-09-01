
function securePick6(){const pool=Array.from({length:45},(_,i)=>i+1),picked=[];while(picked.length<6){const a=new Uint32Array(1);crypto.getRandomValues(a);picked.push(pool.splice(a[0]%pool.length,1)[0])}return picked.sort((a,b)=>a-b)}
function generateLotto(){const box=document.getElementById('lottoRows');box.innerHTML='';for(let g=1;g<=5;g++){const row=document.createElement('div');row.className='lotto-row';row.innerHTML=`<strong>${g}게임</strong>`;securePick6().forEach(n=>{const b=document.createElement('span');b.className='ball';b.textContent=n;row.appendChild(b)});box.appendChild(row)}}
