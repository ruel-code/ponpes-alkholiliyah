/**
 * navbar.js
 * Mengelola interaksi navigasi, sticky header, dan mobile menu
 */

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('main-nav');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // 1. Sticky Navbar on Scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('nav-white');
            navbar.querySelectorAll('.nav-link-item').forEach(link => {
                link.classList.add('text-gray-800');
                link.classList.remove('text-white');
            });
            navbar.querySelector('.logo-text')?.classList.add('text-primary-dark');
            navbar.querySelector('.logo-text')?.classList.remove('text-white');
        } else {
            navbar.classList.remove('nav-white');
            navbar.querySelectorAll('.nav-link-item').forEach(link => {
                link.classList.remove('text-gray-800');
                link.classList.add('text-white');
            });
            navbar.querySelector('.logo-text')?.classList.remove('text-primary-dark');
            navbar.querySelector('.logo-text')?.classList.add('text-white');
        }
    });

    // 2. Mobile Menu Toggle
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // 3. Highlight Active Link
    const currentPath = window.location.pathname;
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Logika sederhana untuk mencocokkan path (index.html atau subfolder pages/)
        if (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html')) {
            link.classList.add('text-gold-light', 'font-bold');
            link.classList.remove('text-white');
        }
    });
});
