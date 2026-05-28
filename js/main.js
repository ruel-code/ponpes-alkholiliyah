document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(el => revealObserver.observe(el));

    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const icon = header.querySelector('.fa-chevron-down');
            content.classList.toggle('hidden');
            if (icon) icon.classList.toggle('rotate-180');
            accordionHeaders.forEach(other => {
                if (other !== header) {
                    other.nextElementSibling.classList.add('hidden');
                    const otherIcon = other.querySelector('.fa-chevron-down');
                    if (otherIcon) otherIcon.classList.remove('rotate-180');
                }
            });
        });
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah terkirim.');
            contactForm.reset();
        });
    }
});
