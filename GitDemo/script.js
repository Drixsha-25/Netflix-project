function getStarted() {
  const email = document.querySelector('input[type="email"]').value;
  if (email.trim() === "") {
    alert("Please enter an email address.");
  } else {
    alert("Thanks for signing up, " + email + "!");
  }
}