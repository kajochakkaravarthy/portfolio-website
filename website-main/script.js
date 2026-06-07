// ========================================
// Initialize AOS (Animate on Scroll)
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80,
  });
});

// ========================================
// Ambient Glow — Follows Mouse
// ========================================
const glow = document.querySelector('.glow-1');

let glowX = window.innerWidth - 300;
let glowY = -150;
let targetX = glowX;
let targetY = glowY;

document.addEventListener('mousemove', (e) => {
  targetX = e.clientX - 300;
  targetY = e.clientY - 300;
});

function animateGlow() {
  glowX += (targetX - glowX) * 0.04;
  glowY += (targetY - glowY) * 0.04;
  glow.style.left = glowX + 'px';
  glow.style.top = glowY + 'px';
  requestAnimationFrame(animateGlow);
}

animateGlow();

// ========================================
// Mobile Menu Toggle
// ========================================
const menuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    menuBtn.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// ========================================
// Navbar Background on Scroll
// ========================================
const nav = document.getElementById('main-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(10, 10, 15, 0.92)';
  } else {
    nav.style.background = 'rgba(10, 10, 15, 0.75)';
  }
}, { passive: true });

// ========================================
// Smooth Reveal — Intersection Observer
// ========================================
const revealElements = document.querySelectorAll('.project-card, .skill-pill, .stat-item');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  revealObserver.observe(el);
});

console.log('Portfolio loaded ✨');