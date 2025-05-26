const burgerIcon = document.getElementById("burger-icon");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-link");

// Toggle the mobile menu when the burger icon is clicked
burgerIcon.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

// Close the mobile menu when any link is clicked
mobileLinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
  });
});

// Get modal elements for Log In
const logInBtnMobile = document.getElementById("logInBtnMobile");
const logInBtn = document.getElementById("logInBtn");
const logInModal = document.getElementById("logInModal");
const closeLogInModalBtn = document.getElementById("closeLogInModalBtn");
const logInForm = document.getElementById("logInForm");
const thankYouMessageForLogIn = document.getElementById(
  "thankYouMessageForLogIn"
);

// Log In
logInBtn.addEventListener("click", function () {
  logInModal.style.display = "flex"; // Show the modal
});
logInBtnMobile.addEventListener("click", function () {
  logInModal.style.display = "flex"; // Show the modal
});
// Close the modal when the close button is clicked
closeLogInModalBtn.addEventListener("click", function () {
  logInModal.style.display = "none"; // Hide the modal
});

// Handle form submission for Log In
logInForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Hide the modal
  logInModal.style.display = "none";

  // Show the "Thank You" message
  thankYouMessageForLogIn.style.display = "block";

  // Reset the form fields
  logInForm.reset();

  // Hide the "Thank You" message after 3 seconds
  setTimeout(function () {
    thankYouMessageForLogIn.style.display = "none";
  }, 3000);
});

// sign Up

const signUpBtnContacts = document.getElementById("signUpBtnContacts");
const signUpBtnMobile = document.getElementById("signUpBtnMobile");
const signUpBtn = document.getElementById("signUpBtn");
const signUpModal = document.getElementById("signUpModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const signUpForm = document.getElementById("signUpForm");
const thankYouMessage = document.getElementById("thankYouMessage");

// Open the modal when Sign Up button is clicked
signUpBtn.addEventListener("click", function () {
  signUpModal.style.display = "flex"; // Show the modal
});
signUpBtnMobile.addEventListener("click", function () {
  signUpModal.style.display = "flex"; // Show the modal
});
signUpBtnContacts.addEventListener("click", function () {
  signUpModal.style.display = "flex"; // Show the modal
});

// Close the modal when the close button is clicked
closeModalBtn.addEventListener("click", function () {
  signUpModal.style.display = "none"; // Hide the modal
});

// Handle form submission
signUpForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Hide the modal
  signUpModal.style.display = "none";

  // Show the "Thank You" message
  thankYouMessage.style.display = "block";
  signUpForm.reset();
  // Hide the "Thank You" message after 3 seconds
  setTimeout(function () {
    thankYouMessage.style.display = "none";
  }, 3000);
});
