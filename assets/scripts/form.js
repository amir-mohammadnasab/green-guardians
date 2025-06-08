// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Show success message
    document.getElementById('successAlert').style.display = 'block';
    
    // Reset form
    this.reset();
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        document.getElementById('successAlert').style.display = 'none';
    }, 5000);
});

// Update category icon (optional feature)
function updateCategoryIcon(category) {
    const icons = {
        suggestion: 'fa-lightbulb',
        complaint: 'fa-exclamation-triangle',
        cooperation: 'fa-handshake',
        donation: 'fa-donate',
        volunteer: 'fa-hands-helping',
        media: 'fa-newspaper',
        other: 'fa-comment'
    };
    
    // You can update a visual indicator based on category if needed
}

// File size validation
document.querySelector('input[name="attachment"]').addEventListener('change', function(e) {
    const file = e.target.files[0];
    const maxSize = 5 * 1024 * 1024; // 5MB
    
    if (file && file.size > maxSize) {
        alert('حجم فایل نباید بیشتر از 5 مگابایت باشد.');
        this.value = '';
    }
});

// Phone number validation
document.querySelector('input[name="phone"]').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
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