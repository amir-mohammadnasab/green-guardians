// Initialize Leaflet Map
document.addEventListener('DOMContentLoaded', function() {
    // مختصات دقیق محل شما (این رو با مختصات واقعی جایگزین کنید)
    var latitude = 29.6257;  // عرض جغرافیایی
    var longitude = 52.5563; // طول جغرافیایی
    
    // ایجاد نقشه
    var map = L.map('map').setView([latitude, longitude], 16);
    
    // اضافه کردن لایه نقشه از OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19
    }).addTo(map);
    
    // آیکون سفارشی برای marker
    var greenIcon = L.icon({
        iconUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="25" height="41" viewBox="0 0 25 41"%3E%3Cpath fill="%232E7D32" d="M12.5 0C5.6 0 0 5.6 0 12.5c0 2.4.7 4.6 1.8 6.5l10.7 22 10.7-22c1.1-1.9 1.8-4.1 1.8-6.5C25 5.6 19.4 0 12.5 0zm0 17c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"/%3E%3C/svg%3E',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34]
    });
    
    // اضافه کردن marker با آیکون سبز
    var marker = L.marker([latitude, longitude], {icon: greenIcon}).addTo(map);
    
    // اضافه کردن popup
    marker.bindPopup(`
        <div style="text-align: center; font-family: Vazirmatn;">
            <h4 style="color: #2E7D32; margin: 10px 0;">سازمان حمایت از محیط زیست سبز</h4>
            <p style="margin: 5px 0;">شیراز، بلوار مدرس</p>
            <p style="margin: 5px 0;">ساختمان سبز، طبقه 3</p>
            <a href="https://maps.app.goo.gl/bZZu3k2uXNcrjNaD9" 
               target="_blank" 
               style="color: #2E7D32; text-decoration: none; font-weight: bold;">
               مشاهده در Google Maps
            </a>
        </div>
    `).openPopup();
    
    // اضافه کردن کنترل zoom
    map.zoomControl.setPosition('bottomright');
    
    // Optional: اضافه کردن دایره محدوده
    L.circle([latitude, longitude], {
        color: '#4CAF50',
        fillColor: '#81C784',
        fillOpacity: 0.2,
        radius: 200
    }).addTo(map);
});
        
        // Quick contact form
        document.getElementById('quickContactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.');
            this.reset();
        });
        
        // Scroll animations
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.main-header');
            if (window.scrollY > 100) {
                navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            }
        });