/**
 * main.js
 * Inisialisasi Intersection Observer untuk animasi scroll
 * dan fungsi umum lainnya
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Intersection Observer untuk Animasi Fade-In
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1 // Elemen muncul saat 10% terlihat
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // 2. Accordion Logic (untuk peraturan.html)
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.fa-chevron-down');
            
            // Toggle content visibility
            content.classList.toggle('hidden');
            
            // Rotate icon
            if (icon) {
                icon.classList.toggle('rotate-180');
            }
            
            // Optional: Close other accordions
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.nextElementSibling.classList.add('hidden');
                    const otherIcon = otherHeader.querySelector('.fa-chevron-down');
                    if (otherIcon) otherIcon.classList.remove('rotate-180');
                }
            });
        });
    });

    // 3. Form Submission (Simulasi)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah terkirim.');
            contactForm.reset();
        });
    }
});
