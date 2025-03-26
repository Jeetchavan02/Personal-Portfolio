// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Change button state
        btnText.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission
        setTimeout(() => {
            btnText.textContent = 'Message Sent!';
            submitBtn.style.backgroundColor = '#09c372';
            
            // Reset form after 2 seconds
            setTimeout(() => {
                form.reset();
                btnText.textContent = 'Send Message';
                submitBtn.style.backgroundColor = '#bb86fc';
                submitBtn.disabled = false;
            }, 2000);
        }, 1500);
    });
    
    // Add input validation as needed
});