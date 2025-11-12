// Navigation bar visibility on scroll
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
});

// Active navigation link based on scroll position
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Observe skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    observer.observe(card);
});

// Observe value cards
document.querySelectorAll('.value-card').forEach(card => {
    observer.observe(card);
});

// Counter animation for achievement numbers
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    const isDecimal = target.toString().includes('.');

    const counter = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = isDecimal ? target.toFixed(2) : Math.ceil(target);
            if (element.parentElement.querySelector('.achievement-label').textContent.includes('$')) {
                element.textContent = '$' + element.textContent + (target >= 1000 ? 'M' : '');
            } else if (element.parentElement.querySelector('.achievement-label').textContent.includes('%')) {
                element.textContent = Math.ceil(target) + '%';
            } else if (element.parentElement.querySelector('.achievement-label').textContent.includes('X')) {
                element.textContent = Math.ceil(target) + 'X';
            } else if (element.parentElement.querySelector('.achievement-label').textContent.includes('+')) {
                element.textContent = Math.ceil(target) + '+';
            }
            clearInterval(counter);
        } else {
            element.textContent = isDecimal ? start.toFixed(2) : Math.ceil(start);
        }
    }, 16);
}

// Observe achievement cards for counter animation
const achievementObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseFloat(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.achievement-number').forEach(number => {
    achievementObserver.observe(number);
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 700;
    }
});

// Loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// Add hover effect to timeline items
document.querySelectorAll('.timeline-content').forEach(content => {
    content.addEventListener('mouseenter', function() {
        this.style.boxShadow = '0 10px 40px rgba(37, 99, 235, 0.3)';
    });

    content.addEventListener('mouseleave', function() {
        this.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
    });
});

// Mobile menu toggle (if needed in future)
const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
        // Mobile menu logic can be added here if needed
        console.log('Mobile view detected');
    }
};

window.addEventListener('resize', createMobileMenu);
createMobileMenu();

// Print/PDF styling
window.addEventListener('beforeprint', function() {
    document.querySelectorAll('.timeline-item, .skill-card, .value-card').forEach(el => {
        el.classList.add('visible');
    });
});

// Add a subtle cursor trail effect (optional)
let cursorTrail = [];
document.addEventListener('mousemove', function(e) {
    if (window.innerWidth > 768) {
        cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
        if (cursorTrail.length > 5) {
            cursorTrail.shift();
        }
    }
});

// Console message for developers viewing the source
console.log('%c👋 Hi there! Thanks for checking out my code.', 'color: #2563eb; font-size: 16px; font-weight: bold;');
console.log('%cThis portfolio was built with vanilla JavaScript, CSS3, and HTML5.', 'color: #10b981; font-size: 14px;');
console.log('%cFeel free to reach out: pmagica22@gmail.com', 'color: #6b7280; font-size: 12px;');