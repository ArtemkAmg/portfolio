function toggleTheme() {
  document.body.classList.toggle('light');
}

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add('show');
    }
  });
});
  document.getElementById("year").textContent = new Date().getFullYear();