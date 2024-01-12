const menuToggler = document.querySelector('.menu-toggler');
const navLinks = document.querySelector('.nav-links');

menuToggler.addEventListener('click', () => {
    if (window.innerWidth <= 1050) {
        // Inverse la visibilité des liens au clic du bouton toggler
        navLinks.style.display = navLinks.style.display === 'none' ? 'flex' : 'none';

        // Si les liens sont affichés, centrez-les sur la page
        if (navLinks.style.display === 'flex') {
            document.body.classList.add('links-visible'); // Ajoute une classe au body pour indiquer que les liens sont visibles
        } else {
            document.body.classList.remove('links-visible'); // Retire la classe du body lorsque les liens ne sont pas visibles
        }
    }
});
