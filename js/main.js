// hover extra suave
document.querySelectorAll('.card').forEach(c=>{
  c.addEventListener('mouseenter',()=>{
    c.style.transform='translateY(-10px) scale(1.02)';
  });

  c.addEventListener('mouseleave',()=>{
    c.style.transform='translateY(0) scale(1)';
  });
});

// scroll reveal profesional
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{threshold:0.15});

document.querySelectorAll('.reveal').forEach(sec=>{
  observer.observe(sec);
});