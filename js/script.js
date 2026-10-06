// Knop voor skills

// BUG 6:
// In HTML heet de knop "showSkills"
// Hier wordt gezocht naar "showSkill"
const skillsButton = document.getElementById("showSkill");

const skillsText = document.getElementById("skillsText");

skillsButton.addEventListener("click", function () {
    skillsText.classList.toggle("hidden");
});


// Contactknop

const contactButton = document.getElementById("contactButton");
const email = document.getElementById("email");

contactButton.addEventListener("click", function () {

    // BUG 7:
    // Hier wordt de class juist toegevoegd.
    // Daardoor blijft de e-mail verborgen.
    email.classList.add("hidden");

});