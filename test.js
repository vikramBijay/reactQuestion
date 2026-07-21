
// DATA is loaded from data.js

let LANG = 'hi';
function q(it){ return LANG === 'en' ? it.question_en : it.question_hi; }
function a(it){ return LANG === 'en' ? it.answer_en : it.answer_hi; }

// ---- markdown-lite renderer for answers ----
function renderAnswer(md){
  const lines = md.split('\n');
  let html = '';
  let inList = false;
  const inline = (s) => s
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  for(let raw of lines){
    const line = raw.trim();
    if(!line){ continue; }
    if(line.startsWith('- ')){
      if(!inList){ html += '<ul>'; inList = true; }
      html += `<li>${inline(line.slice(2))}</li>`;
    } else {
      if(inList){ html += '</ul>'; inList = false; }
      html += `<p>${inline(line)}</p>`;
    }
  }
  if(inList) html += '</ul>';
  return html;
}

// ---- category order & grouping ----

const STORAGE_KEY = 'react-revision-progress-v1';
let reviewed = new Set();
try{
  const raw = localStorage.getItem(STORAGE_KEY);
  if(raw) reviewed = new Set(JSON.parse(raw));
}catch(e){}

function saveProgress(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify([...reviewed])); }catch(e){}
  updateProgressUI();
}

function cardKey(it){ return it.category + '|' + (it.num||'') + '|' + it.question_hi; }

function updateProgressUI(){
  const topicData = DATA.filter(it => it.topic === TOPIC);
  const total = topicData.length;
  const done = [...reviewed].filter(k => topicData.some(it => cardKey(it)===k)).length;
  document.getElementById('progress-count').textContent = `${done} / ${total}`;
  document.getElementById('progress-fill').style.width = (done/total*100)+'%';
}

// ---- render sidebar tabs ----
const tabsEl = document.getElementById('tabs');
function renderSidebar(CATS) {
  tabsEl.innerHTML = '';
  let lastGroup = null;
  CATS.forEach(cat=>{
    const count = DATA.filter(it=>it.category===cat && it.topic===TOPIC).length;
  const isBonus = cat.startsWith('Bonus');
  if(isBonus && lastGroup !== 'bonus'){
    const div = document.createElement('div');
    div.className = 'tab-divider';
    div.textContent = 'bonus decks';
    tabsEl.appendChild(div);
    lastGroup = 'bonus';
  } else if(!isBonus && lastGroup === null){
    const div = document.createElement('div');
    div.className = 'tab-divider';
    div.textContent = 'core 100';
    tabsEl.appendChild(div);
    lastGroup = 'core';
  }
  const btn = document.createElement('button');
  btn.className = 'tab-btn';
  btn.dataset.cat = cat;
  btn.innerHTML = `<span>${cat.replace(/^\d+\.\s*/, m=>m)}</span><span class="n">${count}</span>`;
  btn.addEventListener('click', ()=>{
    document.getElementById(catId(cat)).scrollIntoView({behavior:'smooth', block:'start'});
  });
  tabsEl.appendChild(btn);
  });
}

function catId(cat){
  return 'cat-' + cat.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
}

// ---- render main content ----
const contentEl = document.getElementById('content');

function buildCard(it){
  const key = cardKey(it);
  const isReviewed = reviewed.has(key);
  const card = document.createElement('div');
  card.className = `card ${it.source}${isReviewed ? ' reviewed' : ''}`;
  card.dataset.key = key;
  card.dataset.search = (it.question_hi + ' ' + it.answer_hi + ' ' + it.question_en + ' ' + it.answer_en).toLowerCase();

  const head = document.createElement('div');
  head.className = 'card-head';
  head.innerHTML = `
    <span class="card-num">${it.num ? '#'+it.num : '★'}</span>
    <span class="card-q">${q(it)}</span>
    <span class="card-meta">
      <span class="badge ${it.source}">${it.source==='doc' ? 'your doc' : 'added'}</span>
      <svg class="chev" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
    </span>`;
  head.addEventListener('click', ()=>{
    card.classList.toggle('open');
  });

  const body = document.createElement('div');
  body.className = 'card-body';
  const inner = document.createElement('div');
  inner.className = 'card-body-inner';
  inner.innerHTML = renderAnswer(a(it));
  const markBtn = document.createElement('button');
  markBtn.className = 'mark-btn';
  markBtn.textContent = isReviewed ? '✓ reviewed' : 'mark reviewed';
  markBtn.addEventListener('click', (e)=>{
    e.stopPropagation();
    if(reviewed.has(key)){
      reviewed.delete(key);
      card.classList.remove('reviewed');
      markBtn.textContent = 'mark reviewed';
    } else {
      reviewed.add(key);
      card.classList.add('reviewed');
      markBtn.textContent = '✓ reviewed';
    }
    saveProgress();
  });
  inner.appendChild(markBtn);
  body.appendChild(inner);

  card.appendChild(head);
  card.appendChild(body);
  return card;
}

function renderContent(){
  const CATS = [...new Set(DATA.filter(it => it.topic === TOPIC).map(it => it.category))];
  renderSidebar(CATS);
  contentEl.innerHTML = '';
  CATS.forEach(cat=>{
    const items = DATA.filter(it=>it.category===cat && it.topic === TOPIC);
    const sectionHead = document.createElement('div');
    sectionHead.className = 'section-head';
    sectionHead.id = catId(cat);
    sectionHead.innerHTML = `<h2>${cat}</h2><span class="count">${items.length} cards</span>`;
    contentEl.appendChild(sectionHead);
    items.forEach(it=> contentEl.appendChild(buildCard(it)));
  });
  updateProgressUI();
  setupScrollSpy();
}
// renderContent() is called at the end of the script, after all helpers are defined
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', ()=>{
  const q = searchInput.value.trim().toLowerCase();
  const cards = document.querySelectorAll('.card');
  const heads = document.querySelectorAll('.section-head');
  let anyVisible = false;
  cards.forEach(c=>{
    const match = !q || c.dataset.search.includes(q);
    c.style.display = match ? '' : 'none';
    if(match) anyVisible = true;
    if(match && q) c.classList.add('open'); else if(!q) c.classList.remove('open');
  });
  heads.forEach(h=>{
    const cat = h.id;
    const anyIn = [...document.querySelectorAll(`.card`)].some(c=>{
      return c.previousElementSibling; // no-op placeholder
    });
  });
  // toggle section visibility based on whether it has visible cards after itself until next header
  const allNodes = [...contentEl.children];
  let currentHead = null, currentHasVisible = false;
  allNodes.forEach(node=>{
    if(node.classList.contains('section-head')){
      if(currentHead) currentHead.style.display = currentHasVisible ? '' : 'none';
      currentHead = node; currentHasVisible = false;
    } else if(node.classList.contains('card')){
      if(node.style.display !== 'none') currentHasVisible = true;
    }
  });
  if(currentHead) currentHead.style.display = currentHasVisible ? '' : 'none';
});

// ---- active tab highlight on scroll ----
const tabBtns = [...document.querySelectorAll('.tab-btn')];
let currentObserver = null;
function setupScrollSpy(){
  if(currentObserver) currentObserver.disconnect();
  const currentCats = [...new Set(DATA.filter(it => it.topic === TOPIC).map(it => it.category))];
  const headEls = currentCats.map(cat=>document.getElementById(catId(cat)));
  currentObserver = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        const idx = headEls.indexOf(entry.target);
        tabBtns.forEach(b=>b.classList.remove('active'));
        if(tabBtns[idx]) tabBtns[idx].classList.add('active');
      }
    });
  }, { rootMargin: '-10% 0px -75% 0px' });
  headEls.forEach(el=> el && currentObserver.observe(el));
}

// ---- language & topic toggle ----
let TOPIC = 'react';
document.querySelectorAll('.lang-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    if(btn.dataset.lang) {
      LANG = btn.dataset.lang;
      document.querySelectorAll('#lang-toggle .lang-btn').forEach(b=>b.classList.toggle('active', b===btn));
    } else if (btn.dataset.topic) {
      TOPIC = btn.dataset.topic;
      document.querySelectorAll('#topic-toggle .lang-btn').forEach(b=>b.classList.toggle('active', b===btn));
    }
    renderContent();
    if(searchInput.value.trim()) searchInput.dispatchEvent(new Event('input'));
  });
});

// ---- initial render (after all helpers above are defined) ----
renderContent();

