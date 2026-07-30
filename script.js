

let LANG = 'en';
function q(it){ return LANG === 'en' ? it.question_en : it.question_hi; }
function a(it){ return LANG === 'en' ? it.answer_en : it.answer_hi; }

// ---- markdown-lite renderer for answers ----
function renderAnswer(md){
  const codeBlocks = [];
  const rawCodes = [];  // store raw (un-HTML-escaped) code for editor pre-fill
  // Extract code blocks first to protect them from line-by-line parsing
  let text = md.replace(/```(\w+)?\n?([\s\S]*?)```/g, function(match, lang, code) {
      lang = lang || 'text';
      const rawCode = code.trim();
      rawCodes.push(rawCode);
      const escaped = rawCode
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      const blockIndex = codeBlocks.length;
      codeBlocks.push(`
        <div class="try-block-wrap">
          <pre><code class="language-${lang}" data-lang="${lang}">${escaped}</code></pre>
          <button class="try-btn" data-block="${blockIndex}" aria-label="Try yourself">
            <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            Try Yourself
          </button>
          <div class="try-editor" id="try-editor-${blockIndex}" data-raw="${blockIndex}" data-lang="${lang}" style="display:none;"></div>
        </div>
      `);
      return `___CODE_BLOCK_${blockIndex}___`;
  });

  const lines = text.split('\n');
  let html = '';
  let inList = false;
  const inline = (s) => s
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');

  for(let raw of lines){
    const line = raw.trim();
    if(!line){ continue; }
    
    const blockMatch = line.match(/^___CODE_BLOCK_(\d+)___$/);
    if(blockMatch) {
      if(inList){ html += '</ul>'; inList = false; }
      html += codeBlocks[blockMatch[1]];
      continue;
    }
    
    if(line.startsWith('- ') || line.startsWith('* ')){
      if(!inList){ html += '<ul>'; inList = true; }
      html += `<li>${inline(line.slice(2))}</li>`;
    } else if (line.startsWith('> ')) {
      if(inList){ html += '</ul>'; inList = false; }
      html += `<blockquote>${inline(line.slice(2))}</blockquote>`;
    } else {
      if(inList){ html += '</ul>'; inList = false; }
      html += `<p>${inline(line)}</p>`;
    }
  }
  if(inList) html += '</ul>';
  // Attach raw codes as a data attribute for the editor to access
  return { html, rawCodes };
}

// ---- Try Yourself Interactive Editor ----
function attachTryEditors(container, rawCodes) {
  container.querySelectorAll('.try-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const idx = parseInt(btn.getAttribute('data-block'), 10);
      const editorDiv = btn.nextElementSibling; // the .try-editor div
      const lang = editorDiv.getAttribute('data-lang') || 'javascript';
      const rawCode = rawCodes[idx] || '';

      if (editorDiv.style.display !== 'none') {
        // Toggle close
        editorDiv.style.display = 'none';
        btn.classList.remove('active');
        return;
      }

      btn.classList.add('active');
      editorDiv.style.display = 'block';

      // Build the editor only once
      if (editorDiv.dataset.built === 'true') return;
      editorDiv.dataset.built = 'true';

      editorDiv.innerHTML = `
        <div class="editor-toolbar">
          <span class="editor-lang-badge">${lang}</span>
          <span class="editor-hint">✏️ Edit below — not saved</span>
          <button class="editor-clear-btn" title="Clear">Clear</button>
        </div>
        <div class="editor-body">
          <pre class="editor-highlight"><code class="language-${lang} editor-code"></code></pre>
          <textarea class="editor-textarea" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off"></textarea>
        </div>
      `;

      const textarea = editorDiv.querySelector('.editor-textarea');
      const codeEl = editorDiv.querySelector('.editor-code');
      const clearBtn = editorDiv.querySelector('.editor-clear-btn');

      function syncCode(val) {
        // Mirror text to <code> for Prism to highlight
        // We escape HTML entities then pass to Prism
        const escaped = val
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
        codeEl.innerHTML = escaped;
        if (typeof Prism !== 'undefined') {
          Prism.highlightElement(codeEl);
        }
        // Sync scroll
        editorDiv.querySelector('.editor-highlight').scrollTop = textarea.scrollTop;
        editorDiv.querySelector('.editor-highlight').scrollLeft = textarea.scrollLeft;
      }

      // Prefill with example code
      textarea.value = rawCode;
      syncCode(rawCode);

      textarea.addEventListener('input', () => syncCode(textarea.value));
      textarea.addEventListener('scroll', () => {
        const pre = editorDiv.querySelector('.editor-highlight');
        pre.scrollTop = textarea.scrollTop;
        pre.scrollLeft = textarea.scrollLeft;
      });

      // Tab key support
      textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          e.preventDefault();
          const start = textarea.selectionStart;
          const end = textarea.selectionEnd;
          textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(end);
          textarea.selectionStart = textarea.selectionEnd = start + 2;
          syncCode(textarea.value);
        }
      });

      clearBtn.addEventListener('click', () => {
        textarea.value = '';
        syncCode('');
        textarea.focus();
      });

      textarea.focus();
    });
  });
}

// ---- category order & grouping ----

const STORAGE_KEY = 'react-revision-progress-v1';
let reviewed = new Set();
// try{
//   const raw = localStorage.getItem(STORAGE_KEY);
//   if(raw) reviewed = new Set(JSON.parse(raw));
// }catch(e){}

function saveProgress(){
  // try{ localStorage.setItem(STORAGE_KEY, JSON.stringify([...reviewed])); }catch(e){}
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
  const { html: answerHtml, rawCodes } = renderAnswer(a(it));
  inner.innerHTML = answerHtml;
  // Attach Try Yourself editors after DOM is set
  requestAnimationFrame(() => attachTryEditors(inner, rawCodes));
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
  const speakBtn = document.createElement('button');
  speakBtn.className = 'mark-btn';
  speakBtn.innerHTML = '🔊 Listen';
  speakBtn.style.marginRight = '10px';
  speakBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      speakBtn.innerHTML = '🔊 Listen';
    } else {
      const rawText = a(it).replace(/<[^>]+>/g, '').replace(/[*_#`>\-]/g, '').trim();
      const utterance = new SpeechSynthesisUtterance(rawText);
      // Force language to Hindi/Indian English so browser defaults to it if voice search fails
      utterance.lang = 'hi-IN';
      
      // Find an Indian female voice for better Hinglish pronunciation
      const voices = window.speechSynthesis.getVoices();
      let bestVoice = voices.find(v => 
        (v.lang.includes('IN') || v.lang.includes('hi')) && 
        (v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('heera') || v.name.toLowerCase().includes('zira') || v.name.toLowerCase().includes('aditi') || v.name.toLowerCase().includes('veena') || v.name.toLowerCase().includes('lekha'))
      );
      
      // Fallback to any Indian voice
      if (!bestVoice) {
        bestVoice = voices.find(v => v.lang.includes('IN') || v.lang.includes('hi') || v.name.includes('India'));
      }
      // Fallback to any Female voice
      if (!bestVoice) {
        bestVoice = voices.find(v => v.name.toLowerCase().includes('female') || v.name.toLowerCase().includes('zira'));
      }
      
      if (bestVoice) {
          utterance.voice = bestVoice;
      }
      
      utterance.onend = () => { speakBtn.innerHTML = '🔊 Listen'; };
      speakBtn.innerHTML = '⏸ Stop';
      window.speechSynthesis.speak(utterance);
    }
  });
  inner.appendChild(speakBtn);
  
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
  const fragment = document.createDocumentFragment();
  
  CATS.forEach(cat=>{
    const items = DATA.filter(it=>it.category===cat && it.topic === TOPIC);
    const sectionHead = document.createElement('div');
    sectionHead.className = 'section-head';
    sectionHead.id = catId(cat);
    sectionHead.innerHTML = `<h2>${cat}</h2><span class="count">${items.length} cards</span>`;
    fragment.appendChild(sectionHead);
    
    items.forEach(it=> fragment.appendChild(buildCard(it)));
  });
  contentEl.appendChild(fragment);
  updateProgressUI();
  setupScrollSpy();
  
  if (typeof Prism !== 'undefined') {
      setTimeout(() => Prism.highlightAll(), 50);
  }
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

// ---- Custom Dropdown & Loader Logic ----
let TOPIC = 'react';
const loaderOverlay = document.getElementById('apple-loader');

function setupDropdown(dropdownId, onChange) {
  const dropdown = document.getElementById(dropdownId);
  if (!dropdown) return;
  const trigger = dropdown.querySelector('.mac-dropdown-trigger');
  const valueDisplay = dropdown.querySelector('.mac-dropdown-value');
  const items = dropdown.querySelectorAll('.mac-dropdown-item');

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    // close other open dropdowns
    document.querySelectorAll('.mac-dropdown').forEach(d => {
      if (d !== dropdown) d.classList.remove('open');
    });
    dropdown.classList.toggle('open');
  });

  items.forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const val = item.getAttribute('data-value');
      const text = item.textContent;
      
      // Update UI
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      valueDisplay.textContent = text;
      dropdown.classList.remove('open');

      // Trigger callback
      onChange(val);
    });
  });
}

// Close dropdowns on outside click
document.addEventListener('click', () => {
  document.querySelectorAll('.mac-dropdown').forEach(d => d.classList.remove('open'));
});

// Setup Language Dropdown
setupDropdown('lang-dropdown', (val) => {
  if (LANG === val) return;
  LANG = val;
  renderContent();
  if(searchInput.value.trim()) searchInput.dispatchEvent(new Event('input'));
});

// Setup Topic Dropdown with Apple Loader
setupDropdown('topic-dropdown', (val) => {
  if (TOPIC === val) return;
  
  // Show loader
  loaderOverlay.classList.remove('hidden');
  
  // Wait to simulate premium loading and allow animation to play
  setTimeout(() => {
    TOPIC = val;
    renderContent();
    if(searchInput.value.trim()) searchInput.dispatchEvent(new Event('input'));
    
    // Hide loader
    loaderOverlay.classList.add('hidden');
  }, 600);
});

// ---- initial render (after all helpers above are defined) ----
renderContent();

// ---- Random Question Feature ----
const randomBtn = document.getElementById('random-btn');
if (randomBtn) {
  randomBtn.addEventListener('click', () => {
    // Find all rendered cards that are not reviewed
    const unreviewedCards = [...document.querySelectorAll('.card:not(.reviewed)')];
    
    if (unreviewedCards.length === 0) {
      alert('You have reviewed all questions in this topic! Great job! 🎉');
      return;
    }
    
    // Pick a random card
    const randomCard = unreviewedCards[Math.floor(Math.random() * unreviewedCards.length)];
    
    // Close all other cards
    document.querySelectorAll('.card').forEach(c => c.classList.remove('open'));
    
    // Open the random card
    randomCard.classList.add('open');
    
    // Smoothly scroll to it (with slight offset for titlebar)
    const y = randomCard.getBoundingClientRect().top + document.querySelector('.main').scrollTop - 80;
    document.querySelector('.main').scrollTo({ top: y, behavior: 'smooth' });
    
    // Pulse effect
    randomCard.style.transition = 'transform 0.3s var(--spring)';
    randomCard.style.transform = 'scale(1.02)';
    setTimeout(() => {
      randomCard.style.transform = '';
    }, 400);
  });
}
// ---- Home View Logic ----
const homeView = document.getElementById('home-view');
const appView = document.getElementById('app-view');
const homeBtn = document.getElementById('home-btn');

document.querySelectorAll('.hexagon-item').forEach(hex => {
  hex.addEventListener('click', () => {
    const topic = hex.getAttribute('data-topic');
    if (!topic) return;
    
    // Hide home, show app
    homeView.style.display = 'none';
    appView.style.display = '';
    
    // Trigger topic change
    if (TOPIC !== topic) {
      TOPIC = topic;
      // update dropdown text
      const dropdownText = document.querySelector('#topic-dropdown .mac-dropdown-value');
      const item = document.querySelector(`#topic-dropdown .mac-dropdown-item[data-value="${topic}"]`);
      if (dropdownText && item) dropdownText.textContent = item.textContent;
    }
    
    // Show loader for premium feel
    loaderOverlay.classList.remove('hidden');
    setTimeout(() => {
      renderContent();
      if(searchInput.value.trim()) searchInput.dispatchEvent(new Event('input'));
      loaderOverlay.classList.add('hidden');
    }, 600);
  });
});

if (homeBtn) {
  homeBtn.addEventListener('click', () => {
    appView.style.display = 'none';
    homeView.style.display = 'flex';
  });
}
