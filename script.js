/* ══ DATA ══ */
const PLANETS = [
  { id:'sun',     name:'The Sun',  emoji:'☀️',  tag:'Our Star',            color:'#FFD700', glow:'rgba(255,200,0,.5)',    size:140, gradient:'radial-gradient(circle at 35% 35%,#fff7a0,#FFD700 40%,#FF8C00)',               type:'default', description:'The Sun is a giant ball of hot, glowing gas at the very center of our solar system! It\'s so huge that over <strong>1 million Earths</strong> could fit inside it. Without the Sun there would be no light, no warmth, and no life on Earth. It has been burning for <strong>4.6 billion years</strong> through a process called nuclear fusion.', facts:['⭐ Type: Yellow Dwarf Star','🌡️ Surface: ~5,500 °C','📏 Diameter: 1,392,000 km','🔥 Age: 4.6 billion years'], dotColor:'#FFD700', orbitRadius:0, orbitSpeed:0 },
  { id:'mercury', name:'Mercury',  emoji:'🪨',  tag:'Closest to the Sun',  color:'#b5b5b5', glow:'rgba(181,181,181,.3)',  size:60,  gradient:'radial-gradient(circle at 35% 35%,#e0e0e0,#b5b5b5 50%,#808080)',                type:'default', description:'Mercury is the <strong>smallest planet</strong> and the closest to the Sun. It zooms around the Sun faster than any other planet — a year there is only <strong>88 Earth days!</strong> But one Mercury day lasts 59 Earth days. Its surface is covered in craters, just like our Moon.', facts:['📏 Diameter: 4,879 km','🌡️ Range: −180 °C to 430 °C','🌑 Moons: 0','⏱️ Year: 88 Earth days'], dotColor:'#b5b5b5', orbitRadius:80,  orbitSpeed:.025 },
  { id:'venus',   name:'Venus',    emoji:'🌤️', tag:'Hottest Planet',       color:'#f0a060', glow:'rgba(240,160,96,.35)', size:80,  gradient:'radial-gradient(circle at 35% 35%,#ffe0a0,#f0a060 50%,#c07030)',                type:'default', description:'Venus is the <strong>hottest planet</strong> — even hotter than Mercury! Thick clouds of gas trap heat like a blanket. Venus also spins <strong>backwards</strong>, so the Sun rises in the west there. A day on Venus is actually longer than its year!', facts:['📏 Diameter: 12,104 km','🌡️ Surface: ~465 °C','🌑 Moons: 0','⏱️ Year: 225 Earth days'], dotColor:'#f0a060', orbitRadius:120, orbitSpeed:.019 },
  { id:'earth',   name:'Earth',    emoji:'🌍',  tag:'Our Home',            color:'#3a9bdc', glow:'rgba(58,155,220,.35)', size:85,  gradient:'radial-gradient(circle at 35% 35%,#6ecfff,#3a9bdc 40%,#1a6b20 70%,#3a9bdc)',   type:'earth',   description:'Earth is our beautiful home! It\'s the <strong>only planet we know of with life</strong>. About <strong>70% of its surface</strong> is covered in water — that\'s why it looks blue from space. Earth has just the right temperature, atmosphere, and liquid water to support millions of different species.', facts:['📏 Diameter: 12,756 km','🌡️ Average: 15 °C','🌑 Moons: 1','⏱️ Year: 365.25 days'], dotColor:'#3a9bdc', orbitRadius:165, orbitSpeed:.014 },
  { id:'mars',    name:'Mars',     emoji:'🔴',  tag:'The Red Planet',      color:'#c1440e', glow:'rgba(193,68,14,.35)',  size:70,  gradient:'radial-gradient(circle at 35% 35%,#ff7050,#c1440e 55%,#7a2800)',                type:'default', description:'Mars is the <strong>Red Planet</strong>, covered in reddish iron-oxide dust. It has the tallest volcano in the solar system — <strong>Olympus Mons</strong>, three times taller than Mount Everest! Scientists dream of sending humans there. Several rovers are already exploring its surface right now!', facts:['📏 Diameter: 6,792 km','🌡️ Average: −60 °C','🌑 Moons: 2 (Phobos & Deimos)','⏱️ Year: 687 Earth days'], dotColor:'#c1440e', orbitRadius:210, orbitSpeed:.011 },
  { id:'jupiter', name:'Jupiter',  emoji:'🪐',  tag:'King of Planets',     color:'#c88b3a', glow:'rgba(200,139,58,.4)',  size:130, gradient:'radial-gradient(circle at 35% 35%,#f0d080,#c88b3a 40%,#8b5e1a)',                type:'jupiter', description:'Jupiter is the <strong>biggest planet</strong> — more than 1,300 Earths could fit inside it! It\'s a gas giant with no solid ground. Its famous <strong>Great Red Spot</strong> is a storm that has been swirling for over 300 years. Jupiter also has at least <strong>95 known moons!</strong>', facts:['📏 Diameter: 142,984 km','🌡️ Cloud tops: −145 °C','🌑 Moons: 95+','⏱️ Year: 12 Earth years'], dotColor:'#c88b3a', orbitRadius:270, orbitSpeed:.008 },
  { id:'saturn',  name:'Saturn',   emoji:'💫',  tag:'The Ring World',      color:'#e0c080', glow:'rgba(224,192,128,.35)',size:120, gradient:'radial-gradient(circle at 35% 35%,#fff0a0,#e0c080 50%,#a08040)',                type:'saturn',  description:'Saturn is famous for its <strong>spectacular rings</strong> made of billions of pieces of ice and rock! It\'s the second largest planet. Saturn is so light it would actually <strong>float in water</strong>. It has 146 known moons, including Titan which has its own thick atmosphere!', facts:['📏 Diameter: 120,536 km','🌡️ Cloud tops: −178 °C','🌑 Moons: 146','⏱️ Year: 29 Earth years'], dotColor:'#e0c080', orbitRadius:330, orbitSpeed:.006 },
  { id:'uranus',  name:'Uranus',   emoji:'🧊',  tag:'The Tilted Ice Giant', color:'#7de8e8', glow:'rgba(125,232,232,.35)',size:100, gradient:'radial-gradient(circle at 35% 35%,#c0ffff,#7de8e8 50%,#40a0a0)',                type:'default', description:'Uranus is an <strong>ice giant</strong> that spins almost completely on its side! One pole gets <strong>42 years of sunlight</strong> then 42 years of total darkness. It\'s the coldest planet in the solar system. Uranus also has faint rings and 28 known moons.', facts:['📏 Diameter: 51,118 km','🌡️ Minimum: −224 °C (coldest!)','🌑 Moons: 28','⏱️ Year: 84 Earth years'], dotColor:'#7de8e8', orbitRadius:390, orbitSpeed:.005 },
  { id:'neptune', name:'Neptune',  emoji:'🌊',  tag:'The Farthest Planet', color:'#3f54ba', glow:'rgba(63,84,186,.4)',   size:95,  gradient:'radial-gradient(circle at 35% 35%,#8090ff,#3f54ba 50%,#1a2080)',                type:'default', description:'Neptune is the <strong>farthest planet</strong> from the Sun. Winds here reach <strong>2,100 km/h</strong> — the fastest in the solar system! It takes <strong>165 Earth years</strong> for one orbit around the Sun. Its largest moon Triton orbits backwards, which is very unusual!', facts:['📏 Diameter: 49,528 km','🌡️ Average: −214 °C','🌑 Moons: 16','⏱️ Year: 165 Earth years'], dotColor:'#3f54ba', orbitRadius:450, orbitSpeed:.004 },
  { id:'pluto',   name:'Pluto',    emoji:'❄️',  tag:'Dwarf Planet',        color:'#d4a0a0', glow:'rgba(212,160,160,.25)',size:45,  gradient:'radial-gradient(circle at 35% 35%,#ffd0d0,#d4a0a0 55%,#806060)',                type:'default', description:'Pluto was the 9th planet until 2006 when scientists reclassified it as a <strong>dwarf planet</strong>. It lives in the distant, icy Kuiper Belt. NASA\'s New Horizons spacecraft visited it in 2015 and discovered a giant <strong>heart-shaped region of ice</strong> on its surface!', facts:['📏 Diameter: 2,377 km','🌡️ Surface: −230 °C','🌑 Moons: 5','⏱️ Year: 248 Earth years'], dotColor:'#d4a0a0', orbitRadius:500, orbitSpeed:.003 },
];

/* ══ STARS ══ */
(function(){
  const canvas = document.getElementById('stars-canvas');
  const ctx = canvas.getContext('2d');
  let stars = [];
  function resize(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
  function make(){
    stars=[];
    const n = Math.floor((canvas.width*canvas.height)/5500);
    for(let i=0;i<n;i++) stars.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.4+.3,a:Math.random(),da:(Math.random()-.5)*.007});
  }
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    stars.forEach(s=>{ s.a+=s.da; if(s.a<=0||s.a>=1) s.da*=-1; ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fillStyle=`rgba(255,255,255,${s.a})`; ctx.fill(); });
    requestAnimationFrame(draw);
  }
  resize(); make(); draw();
  window.addEventListener('resize',()=>{ resize(); make(); });
})();

/* ══ ORRERY ══ */
(function(){
  const orrery = document.getElementById('solar-orrery');
  const bodies = PLANETS.filter(p=>p.orbitRadius>0).slice(0,7);
  const radii  = [46,74,104,138,176,216,258];
  const speeds = [.025,.019,.014,.010,.007,.005,.004];
  const angles = bodies.map(()=>Math.random()*Math.PI*2);
  bodies.forEach((p,i)=>{
    const ring=document.createElement('div'); ring.className='orbit-ring';
    const d=radii[i]*2;
    ring.style.cssText=`width:${d}px;height:${d}px;margin-left:-${radii[i]}px;margin-top:-${radii[i]}px;`;
    orrery.appendChild(ring);
    const dot=document.createElement('div'); dot.className='orbit-body';
    const sz=Math.max(7,p.size*.13);
    dot.style.cssText=`width:${sz}px;height:${sz}px;background:${p.color};box-shadow:0 0 ${sz*1.4}px ${p.glow};margin-left:-${sz/2}px;margin-top:-${sz/2}px;`;
    orrery.appendChild(dot);
    (function animate(){ angles[i]+=speeds[i]; dot.style.transform=`translate(${Math.cos(angles[i])*radii[i]}px,${Math.sin(angles[i])*radii[i]}px)`; requestAnimationFrame(animate); })();
  });
})();

/* ══ NAV ══ */
(function(){
  const nav=document.getElementById('planet-nav');
  PLANETS.forEach(p=>{
    const btn=document.createElement('button'); btn.className='nav-btn';
    btn.innerHTML=`<span class="nav-dot" style="background:${p.dotColor};box-shadow:0 0 6px ${p.glow}"></span>${p.emoji} ${p.name}`;
    btn.addEventListener('click',()=>{ const t=document.getElementById('section-'+p.id); if(t) t.scrollIntoView({behavior:'smooth'}); });
    nav.appendChild(btn);
  });
})();

/* ══ PLANET SECTIONS ══ */
(function(){
  const container=document.getElementById('planets-container');

  function buildVisual(p,idx){
    const delay=(idx*.35)+'s';
    if(p.type==='saturn') return `<div class="saturn-wrap" style="animation:float-planet 5s ease-in-out ${delay} infinite;"><div class="saturn-ring"></div><div class="planet-ball" style="width:${p.size}px;height:${p.size}px;background:${p.gradient};box-shadow:0 0 50px ${p.glow};"></div></div>`;
    if(p.type==='jupiter') return `<div class="planet-ball" style="width:${p.size}px;height:${p.size}px;background:${p.gradient};box-shadow:0 0 50px ${p.glow};overflow:hidden;position:relative;animation-delay:${delay};"><div style="position:absolute;inset:0;border-radius:50%;background:repeating-linear-gradient(0deg,transparent,transparent 13px,rgba(100,50,0,.28) 13px,rgba(100,50,0,.28) 19px);"></div><div style="position:absolute;width:32px;height:20px;background:rgba(180,55,20,.65);border-radius:50%;top:56%;left:18%;filter:blur(1px);"></div></div>`;
    if(p.type==='earth')   return `<div class="planet-ball" style="width:${p.size}px;height:${p.size}px;background:${p.gradient};box-shadow:0 0 50px ${p.glow};overflow:hidden;position:relative;animation-delay:${delay};"><div style="position:absolute;inset:0;border-radius:50%;background:radial-gradient(ellipse 55% 28% at 28% 38%,rgba(34,139,34,.72),transparent),radial-gradient(ellipse 38% 22% at 72% 62%,rgba(34,110,34,.65),transparent),radial-gradient(ellipse 22% 16% at 55% 22%,rgba(34,120,34,.55),transparent);"></div><div style="position:absolute;inset:0;border-radius:50%;background:radial-gradient(circle at 70% 25%,rgba(180,220,255,.18),transparent 60%);"></div></div>`;
    return `<div class="planet-ball" style="width:${p.size}px;height:${p.size}px;background:${p.gradient};box-shadow:0 0 50px ${p.glow};animation-delay:${delay};"></div>`;
  }

  PLANETS.forEach((p,idx)=>{
    const sec=document.createElement('section');
    sec.className='planet-section'; sec.id='section-'+p.id;
    const rev=idx%2!==0;
    sec.innerHTML=`
      <div class="section-inner ${rev?'reverse':''}">
        <div class="planet-visual">${buildVisual(p,idx)}</div>
        <div class="planet-info">
          <h2 style="color:${p.color}">${p.emoji} ${p.name}</h2>
          <span class="planet-tag" style="color:${p.color};border-color:${p.color}">${p.tag}</span>
          <p>${p.description}</p>
          <div class="fact-chips">${p.facts.map(f=>`<span class="chip">${f}</span>`).join('')}</div>
        </div>
      </div>
      <div class="divider"></div>`;
    container.appendChild(sec);
  });
})();

/* ══ SCROLL REVEAL + PARALLAX ══ */
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
},{threshold:.12});
document.querySelectorAll('.planet-section').forEach(s=>observer.observe(s));

window.addEventListener('scroll',()=>{
  const orrery=document.getElementById('solar-orrery');
  if(orrery) orrery.style.transform=`translate(-50%,calc(-50% + ${window.scrollY*.22}px))`;
},{passive:true});