console.log("hello");

 // Slide Down Navigation on Scroll

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navigation").style.top = "0";
  } else {
    document.getElementById("navigation").style.top = "-50px";
  }
}


 // Search Box

  const searchButton = document.querySelector('.search-button');
  const mainSearch = document.querySelector('.main-search');
  const closeButton = document.querySelector('.close-button');
  
  searchButton.addEventListener('click', function() {
    mainSearch.classList.toggle('show-search');
  });
  
  closeButton.addEventListener('click', function() {
    mainSearch.classList.remove('show-search');
  });


 // Log in Form

 function openLoginForm() {
  document.getElementById("login-form").style.display = "block";
}

function closeLoginForm() {
  document.getElementById("login-form").style.display = "none";
}

function openSignupForm() {
  document.getElementById("signup-form").style.display = "block";
  document.getElementById("login-form").style.display = "none";
}

function closeSignupForm() {
  document.getElementById("signup-form").style.display = "none";
}

document.getElementById("login-btn").addEventListener("click", openLoginForm);
document.getElementById("close-login-form-btn").addEventListener("click", closeLoginForm);
document.getElementById("signup-btn").addEventListener("click", openSignupForm);
document.getElementById("close-signup-form-btn").addEventListener("click", closeSignupForm);

// Sign up Form

document.getElementById("submit-btn").addEventListener("click", function() {
  // Get the form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  
  // Do some validation
  if (name === "" || email === "" || password === "") {
    alert("Please fill in all fields");
    return;
  }
  
  // Send the form data to the server (you need to implement this part)
  // ...

  // Display a success message
  alert("Sign up successful!");

  // Clear the form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});
function validateForm() {
  let fullName = document.getElementById("fullname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Check if email is valid
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email address!");
    return false;
  }

  // Add code to validate other fields

  // Submit the form
  alert("Form submitted successfully!");
  return true;
}

  // Contact Form

  const form = document.getElementById("MsgForm");
  const submitBtn = document.getElementById("submitBtn");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (!validateForm()) {
    return;
  }

  // Send form data to server
  sendData();
});

function validateForm() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const message = document.getElementById("message");

  if (name.value.trim() === "") {
    alert("Please enter your name.");
    name.focus();
    return false;
  }

  if (email.value.trim() === "") {
    alert("Please enter your email address.");
    email.focus();
    return false;
  }

  if (subject.value.trim() === "") {
    alert("Please enter a subject for your message.");
    subject.focus();
    return false;
  }

  if (message.value.trim() === "") {
    alert("Please enter a message.");
    message.focus();
    return false;
  }

  return true;
}

function sendData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Send form data to server
  console.log(`Name: ${name}, Email: ${email}, Subject: ${subject}, Message: ${message}`);

  // Reset form
  form.reset();
}

