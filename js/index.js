
const sections = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  observer.observe(section);
});

const plans = document.querySelectorAll("[data-plan]");

plans.forEach(plan => {
  plan.addEventListener("click", () => {
   
    plans.forEach(p => p.classList.remove("ring-2", "ring-indigo-500", "bg-indigo-50"));
    
    plan.classList.add("ring-2", "ring-indigo-500", "bg-indigo-50");
  });
});


document.querySelectorAll('[data-scroll-to]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('data-scroll-to');
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
