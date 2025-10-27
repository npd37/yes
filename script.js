// Mobile menu toggle
document.querySelector('.mobile-menu')?.addEventListener('click', function(){
  const nav = document.querySelector('.nav');
  if(nav.style.display === 'flex') nav.style.display = 'none';
  else nav.style.display = 'flex';
});

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if(href.startsWith('#')){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Button touch feedback (bigger when touched)
document.querySelectorAll('.btn').forEach(b=>{
  b.addEventListener('touchstart', ()=> b.style.transform = 'scale(1.06)');
  b.addEventListener('touchend', ()=> b.style.transform = '');
});