
const submitButton = document.querySelector("#bmr-submit-button");
const bmrForm = document.querySelector("#bmr-calculator");

bmrForm.addEventListener("submit", calculateBMR);


function calculateBMR (event) {

    event.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked');
    

    // Error handling

    const errorMessage = document.querySelector(".error-message-container");

    if (gender == null) {

        errorMessage.classList.add("OPEN");
        return;

    } 


    // Remove old results if there is any

    const resultContainer = document.querySelector("#bmr-result");

    if (resultContainer.children.length === 1) {      
        resultContainer.children[0].remove(); 
    }


    // Get the gender value

    let genderValue;

    if (gender.value == "female") {

        errorMessage.classList.remove("OPEN");
        genderValue = - 161;     

    } else if (gender.value == "male") {

        errorMessage.classList.remove("OPEN");
        genderValue = + 5;

    } 


    // Calculate based on gender, weight and age

    const age = document.querySelector("#age").value;
    const weight = document.querySelector("#weight").value;
    const height = document.querySelector("#height").value;

    let BMR = 10 * weight + 6.25 * height - 5 * age + genderValue;

    resultContainer.classList.add("OPEN");
    let div = resultContainer.appendChild(document.createElement("div"));
    let heading = div.appendChild(document.createElement("h2"));
    let paragraph = div.appendChild(document.createElement("p"));

    heading.innerHTML = "Your BMR";
    paragraph.innerHTML = "Your BMR is " + BMR + " kcal.";

}
