
function securePick6(){
  const pool = Array.from({length:45},(_,i)=>i+1);
  const picked = [];
  while(picked.length < 6){
    const arr = new Uint32Array(1);
    crypto.getRandomValues(arr);
    const idx = arr[0] % pool.length;
    picked.push(pool.splice(idx,1)[0]);
  }
  return picked.sort((a,b)=>a-b);
}
function generateLotto(){
  const box = document.getElementById('lottoRows');
  box.innerHTML = '';
  for(let g=1; g<=5; g++){
    const row = document.createElement('div');
    row.className='lotto-row';
    const label=document.createElement('strong');
    label.textContent=g+'게임';
    row.appendChild(label);
    securePick6().forEach(n=>{
      const b=document.createElement('span');
      b.className='ball'; b.textContent=n; row.appendChild(b);
    });
    box.appendChild(row);
  }
}
