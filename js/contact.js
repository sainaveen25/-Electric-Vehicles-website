document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const emailInput = document.getElementById('email');
    const invalidFeedback = emailInput.nextElementSibling;

    function validateEmail() {
        const emailValue = emailInput.value;
        const emailDomain = emailValue.split('@')[1];

        if (emailDomain && emailDomain.toLowerCase() === 'gmail.com') {
            emailInput.setCustomValidity('Please enter a valid email address, not ending with "@gmail.com".');
            invalidFeedback.style.display = 'block';
        } else {
            emailInput.setCustomValidity('');
            invalidFeedback.style.display = 'none';
        }
    }

    form.addEventListener('submit', function (event) {
        validateEmail();

        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    });

    emailInput.addEventListener('input', function () {
        validateEmail();

        if (emailInput.checkValidity()) {
            emailInput.classList.remove('is-invalid');
            emailInput.classList.add('is-valid');
        } else {
            emailInput.classList.remove('is-valid');
            emailInput.classList.add('is-invalid');
        }
    });
});
