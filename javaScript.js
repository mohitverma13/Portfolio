document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Get values from input fields
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    
    // Do something with the data, like sending it to a server or processing it locally
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Subject: " + subject);
    console.log("Message: " + message);
    
    // You can also reset the form fields if needed
    // document.getElementById("contactForm").reset();
  });
  