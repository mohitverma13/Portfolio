const form = document.getElementById('contactForm'); // Correctly reference the form element
const result = document.getElementById('result'); // Reference the result div

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(form);
  const object = Object.fromEntries(formData.entries());
  const json = JSON.stringify(object);

  result.style.display = "block";  // Show result div
  result.innerHTML = "Please wait..."; // Display loading message

  fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: json
  })
    .then(async (response) => {
      let jsonResponse = await response.json();
      if (response.status === 200) {
        form.style.display = "none"; // Hide the form
        result.innerHTML = "Form submitted successfully!"; // Show success message
        result.style.color = "green"; // Success message color
        result.style.border = "2px solid green";
        result.style.backgroundColor = "#e0ffe0";
      } else {
        result.innerHTML = jsonResponse.message; // Show error message
        result.style.color = "red"; // Error message color
        result.style.border = "2px solid red";
        result.style.backgroundColor = "#ffe0e0"; // Light red background
      }
    })
    .catch(error => {
      console.log(error);
      result.innerHTML = "Something went wrong!";
      result.style.color = "red"; // Error message color
      result.style.border = "2px solid red";
      result.style.backgroundColor = "#ffe0e0"; // Light red background
    })
    .finally(() => {
      setTimeout(() => {
        result.style.display = "none"; // Hide result after 3 seconds
        form.style.display = "block";  // Show form again
        form.reset(); // Reset the form fields
      }, 3000);
    });
});