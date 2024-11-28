document.querySelector('.center-icon').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });

  document.addEventListener('scroll', function() {
    const section = document.querySelector('.about-section');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        section.classList.add('scrolled');
    }
});

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}