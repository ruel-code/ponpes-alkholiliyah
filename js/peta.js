/**
 * peta.js
 * Inisialisasi peta interaktif Leaflet.js
 */

document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map');
    
    if (mapContainer) {
        // Koordinat Maron Probolinggo
        const lat = -7.8123;
        const lng = 113.1456;
        const zoom = 15;

        // Inisialisasi peta
        const map = L.map('map').setView([lat, lng], zoom);

        // Tambahkan Tile Layer (OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Tambahkan Marker Custom
        const marker = L.marker([lat, lng]).addTo(map);
        
        // Popup saat marker diklik
        marker.bindPopup("<b>PP. Al-Kholiliyah</b><br>Maron, Probolinggo").openPopup();
    }
});
