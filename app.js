function Subscribe() {
  let name = prompt("What is your name?");
  alert("Hello " + name);
  let country = prompt("Whcich country are you from?");
  country = country.toLowerCase().trim();
  if (country === "south africa") {
    alert("Dumela, lekae?");
  } else {
    alert("How are you?");
  }
  let email = prompt("What is your email?");
  alert("Thank you " + email + " expect more about the tech industry!");
}
let subscriberButton = document.querySelector("button");
subscriberButton.addEventListener("click", Subscribe);
