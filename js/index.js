// Intersection Observer for fade-in animation
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

// Plan card click highlight
const plans = document.querySelectorAll("[data-plan]");

plans.forEach(plan => {
  plan.addEventListener("click", () => {
    plans.forEach(p => p.classList.remove("ring-2", "ring-indigo-500", "bg-indigo-50"));
    plan.classList.add("ring-2", "ring-indigo-500", "bg-indigo-50");
  });
});

// Smooth scroll to section
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

// Mobile nav toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
});
