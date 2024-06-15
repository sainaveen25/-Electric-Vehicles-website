document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = document.getElementById('email');
        const email = emailInput.value;
        
        if (email.endsWith('@gmail.com')) {
            emailInput.classList.add('is-invalid');
        } else {
            emailInput.classList.remove('is-invalid');
            
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;

            // For demonstration purposes, we'll just log the data
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
            
            // Clear the form after submission
            contactForm.reset();
            
            // Display a success message
            alert('Your message has been sent successfully!');
        }
    });
});
