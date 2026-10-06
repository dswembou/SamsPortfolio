// Knop voor skills
const skillsButton = document.getElementById("showSkill");

const skillsText = document.getElementById("skillsText");

skillsButton.addEventListener("click", function () {
    skillsText.classList.toggle("hidden");
});


// Contactknop

const contactButton = document.getElementById("contactButton");
const email = document.getElementById("email");

contactButton.addEventListener("click", function () {
    email.classList.add("hidden");

});