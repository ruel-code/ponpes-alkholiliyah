document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        const lat = -7.8300;
        const lng = 113.1500;
        const map = L.map('map').setView([lat, lng], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);
        const marker = L.marker([lat, lng]).addTo(map);
        marker.bindPopup("<b>PP. Al-Kholiliyah Al-Mubarokah</b><br>Brani Kulon, Maron, Probolinggo").openPopup();
    }
});
