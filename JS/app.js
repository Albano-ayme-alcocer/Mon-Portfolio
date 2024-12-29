//Diriger dans les sections correspondantes
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); // Empêche le comportement par défaut

          const targetId = this.getAttribute("href").slice(1); // Extrait l'id ciblé
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              targetElement.scrollIntoView({
                  behavior: "smooth", // Défilement fluide
                  block: "start" // Aligner le haut de la section
              });
          }
      });
  });
});


//Faire apparaitre le menu Burger
document.addEventListener('DOMContentLoaded', () => {
  // Fonction pour activer/désactiver le menu burger
  function setupBurgerMenu() {
    const burgerMenu = document.querySelector('.burger-menu'); // Bouton burger
    const navLinks = document.querySelector('.nav-links'); // Menu à afficher/masquer

    if (burgerMenu && navLinks) {
      burgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active'); // Active/désactive le menu
      });

      // Ferme le menu si on clique sur un lien
      navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
          navLinks.classList.remove('active');
        }
      });
    } else {
      console.error("Le menu burger ou les liens ne sont pas trouvés dans le DOM");
    }
  }

  // Initialisation du menu burger
  setupBurgerMenu();
});


//Scroll Animation
document.addEventListener('DOMContentLoaded', () => {
  // Fonction générique pour les animations sur le défilement
  function animateOnScroll(elements, animationConfig) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const { opacity, transform, transition } = animationConfig;

          entry.target.style.transition = transition;
          entry.target.style.opacity = opacity;
          entry.target.style.transform = transform;

          observer.unobserve(entry.target); // Désactive l'observation après animation
        }
      });
    }, { threshold: 0.1 });

    elements.forEach((el) => {
      el.style.opacity = 0; // Masquer avant animation
      el.style.transform = 'translateX(-50px)'; // Position avant animation
      observer.observe(el); // Ajouter à l'observation
    });
  }

  // Configuration et activation des animations pour chaque section

  // Animation pour le header
  const headerTexts = document.querySelectorAll('.content');
  animateOnScroll(headerTexts, {
    opacity: 1,
    transform: 'translateX(0)',
    transition: 'opacity 1s ease, transform 1s ease'
  });

  // Animation pour la photo dans la section "About"
  const aboutPictures = document.querySelectorAll('.left');
  animateOnScroll(aboutPictures, {
    opacity: 1,
    transform: 'translateX(0)',
    transition: 'opacity 1s ease, transform 1s ease'
  });

  // Animation pour le texte dans la section "About"
  const aboutTexts = document.querySelectorAll('.aboutme');
  animateOnScroll(aboutTexts, {
    opacity: 1,
    transform: 'translateX(0)',
    transition: 'opacity 1s ease, transform 1s ease'
  });

  // Animation pour "Contactez-moi" dans la section "About"
  const contactLinks = document.querySelectorAll('.contactMe');
  animateOnScroll(contactLinks, {
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'opacity 1s ease, transform 1s ease'
  });

  // Animation pour le texte de la section 2
  const section2Texts = document.querySelectorAll('.section2Text');
  animateOnScroll(section2Texts, {
    opacity: 1,
    transform: 'translateX(0)',
    transition: 'opacity 1s ease, transform 1s ease'
  });

  // Animation pour les projets
  const projectTexts = document.querySelectorAll('.col-12');
  animateOnScroll(projectTexts, {
    opacity: 1,
    transform: 'translateX(0)',
    transition: 'opacity 1s ease, transform 1s ease'
  });

  // Animation pour le formulaire de contact
  const contactForms = document.querySelectorAll('.form-container');
  animateOnScroll(contactForms, {
    opacity: 1,
    transform: 'translateX(0)',
    transition: 'opacity 1s ease, transform 1s ease'
  });
});























