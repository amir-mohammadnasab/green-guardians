// Page transition effect
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .footer-widget a, .btn-slider');
    const pageTransition = document.getElementById('pageTransition');
    
    // Add click event to all internal links
    navLinks.forEach(link => {
        // Check if it's an internal link
        if (link.href && link.href.includes('.html') && !link.href.includes('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const destination = this.href;
                
                // Show transition
                pageTransition.classList.add('active');
                
                // Navigate after animation
                setTimeout(() => {
                    window.location.href = destination;
                }, 500);
            });
        }
    });
});

// Add smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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