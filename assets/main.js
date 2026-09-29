(()=>{
 const root=document.documentElement;
 const savedTheme=localStorage.getItem('study-theme');
 if(savedTheme) root.dataset.theme=savedTheme;
 const themeButton=document.querySelector('[data-theme-toggle]');
 if(themeButton){const label=()=>themeButton.textContent=root.dataset.theme==='dark'?'Light mode':'Dark mode';label();themeButton.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('study-theme',root.dataset.theme);label()})}
 const search=document.querySelector('[data-module-search]');
 if(search){search.addEventListener('input',()=>{const term=search.value.trim().toLowerCase();document.querySelectorAll('[data-search-card]').forEach(card=>{card.hidden=term&&!card.dataset.searchCard.toLowerCase().includes(term)})})}
 const complete=document.querySelector('[data-mark-complete]');
 if(complete){const id=complete.dataset.markComplete;const key='study-done-'+id;const refresh=()=>{const done=localStorage.getItem(key)==='yes';complete.classList.toggle('done',done);complete.textContent=done?'✓ Module completed':'Mark module complete';const bar=document.querySelector('[data-progress-bar]');if(bar)bar.style.width=done?'100%':'0%'};refresh();complete.addEventListener('click',()=>{localStorage.setItem(key,localStorage.getItem(key)==='yes'?'no':'yes');refresh()})}
})();
