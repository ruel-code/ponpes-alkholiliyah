/**
 * galeri.js
 * Inisialisasi slider Swiper untuk galeri dan slider utama
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Swiper untuk Galeri Grid di Homepage
    if (document.querySelector('.galeri-swiper')) {
        new Swiper('.galeri-swiper', {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
    }

    // 2. Logic Filter Galeri (untuk halaman galeri.html)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galeriItems = document.querySelectorAll('.galeri-item');

    if (filterButtons.length > 0) {
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.getAttribute('data-filter');
                
                // Update button active state
                filterButtons.forEach(b => b.classList.remove('bg-gold', 'text-white'));
                btn.classList.add('bg-gold', 'text-white');

                // Filter items
                galeriItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});
