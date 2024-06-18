document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    // Simulate successful form submission
    form.reset();
    showSuccessMessage();
  });

  function showSuccessMessage() {
    successMessage.classList.add("show");
    setTimeout(() => {
      successMessage.classList.remove("show");
    }, 3000); // Hide after 3 seconds
  }
});
