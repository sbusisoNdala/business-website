document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    // You can add form validation and submission handling here
    // For simplicity, let's just log the form data to the console
    const formData = new FormData(this);
    const formObject = {};
    formData.forEach(function(value, key) {
      formObject[key] = value;
    });
    console.log(formObject);
  });