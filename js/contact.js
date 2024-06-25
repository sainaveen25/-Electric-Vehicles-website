document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      
      const emailInput = document.querySelector('.form input[type="text"]');// Email Input variable 
      //const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      if (!email) {
        alert("Please enter your mail !");
        return;
      }
      alert("Thank you for your submission. Will Get Back To You Soon!");
      form.reset();
    });
  });