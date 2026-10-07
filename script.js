const links = [...document.querySelectorAll('nav a')];
const sections = document.querySelectorAll('.page-section');

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) links.forEach(link =>
    link.classList.toggle('active', link.hash === `#${entry.target.id}`));
}), { threshold: .35 });

sections.forEach(section => observer.observe(section));
document.querySelector('#year').textContent = new Date().getFullYear();
