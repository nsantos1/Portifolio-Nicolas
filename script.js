// --- Ativação dos Feather Icons ---
// Isso deve ser chamado uma vez que o script feather.min.js foi carregado
feather.replace();

// --- Lógica do Menu Hamburger ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Troca o ícone de 'menu' para 'x'
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.setAttribute('data-feather', 'x');
    } else {
        icon.setAttribute('data-feather', 'menu');
    }
    feather.replace(); // Re-renderiza o ícone
});

// --- Lógica da Animação de Scroll (Fade-in) ---
const fadeInElements = document.querySelectorAll('.fade-in');

const observerOptions = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.1 // 10% do elemento visível
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Para a animação não repetir
        }
    });
}, observerOptions);

fadeInElements.forEach(el => {
    observer.observe(el);
});