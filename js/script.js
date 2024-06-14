document.addEventListener('DOMContentLoaded', function() {
    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        alert(`Thank you for subscribing with: ${email}`);
        newsletterForm.reset();
    });

    // Scroll to Featured Vehicles Section
    const exploreBtn = document.querySelector('.hero .btn');
    exploreBtn.addEventListener('click', function() {
        document.getElementById('featured-articles').scrollIntoView({ behavior: 'smooth' });
    });
});
