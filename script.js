// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const currentDateElement = document.getElementById('current-date');
    const currentDate = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    currentDateElement.textContent = currentDate.toLocaleDateString('en-US', options);
    
    // Contact button functionality
    const contactBtn = document.getElementById('contact-btn');
    const messageElement = document.getElementById('message');
    
    contactBtn.addEventListener('click', function() {
        if (messageElement.style.display === 'none') {
            messageElement.style.display = 'block';
            contactBtn.textContent = 'Hide Message';
            messageElement.style.animation = 'slideUp 0.5s ease forwards';
        } else {
            messageElement.style.display = 'none';
            contactBtn.textContent = 'Say Hello!';
        }
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Console message for developers
    console.log('🚀 Static Web App loaded successfully!');
    console.log('📅 Built on:', currentDate.toISOString());
    console.log('🔧 Deployed with Azure Developer CLI (azd)');
});
