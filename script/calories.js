
const submitButton = document.querySelector("#bmr-submit-button");
const bmrForm = document.querySelector("#bmr-calculator");

bmrForm.addEventListener("submit", calculateBMR);


function calculateBMR(event) {
    event.preventDefault();


    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.querySelector("#age").value;
    const weight = document.querySelector("#weight").value;
    const height = document.querySelector("#height").value;
    const activity = document.querySelector('input[name="activity"]:checked');
    let activityRate;
    const errorMessageActivity = document.querySelector(".error-message-container.activity");
    const errorMessageGender = document.querySelector(".error-message-container.gender");


    // Check activity rate

    if (activity == null || activity == null && !gender == null) {

        errorMessageActivity.classList.add("OPEN");

    } else if (activity.value == 1) {

        errorMessageActivity.classList.remove("OPEN");
        activityRate = 1.2;

    } else if (activity.value == 2) {


        errorMessageActivity.classList.remove("OPEN");
        activityRate = 1.375;

    } else if (activity.value == 3) {

        errorMessageActivity.classList.remove("OPEN");
        activityRate = 1.55;

    } else if (activity.value == 4) {


        errorMessageActivity.classList.remove("OPEN");
        activityRate = 1.725;

    } else if (activity.value == 5) {

        errorMessageActivity.classList.remove("OPEN");
        activityRate = 1.9;

    } 

    // Remove old results if there is any
    const resultContainer = document.querySelector("#bmr-result");

    if (resultContainer.children.length === 1) {      
        resultContainer.children[0].remove(); 
    }

    // Calculate based on gender

    if (gender == null || gender == null & !activity == null) {     

        errorMessageGender.classList.add("OPEN");
        return;

    } else if (gender.value == "female") {

        let BMR = 10 * weight + 6.25 * height - 5 * age - 161;

        errorMessageGender.classList.remove("OPEN");
        resultContainer.classList.add("OPEN");
        let div = resultContainer.appendChild(document.createElement("div"));
        let heading = div.appendChild(document.createElement("h2"));
        let paragraph = div.appendChild(document.createElement("p"));

        heading.innerHTML = "Your BMR";
        paragraph.innerHTML = "Your BMR is " + BMR * activityRate + " kcal.";
        

    } else if (gender.value == "male") {

        let BMR = 10 * weight + 6.25 * height - 5 * age + 5 * activityRate;

        errorMessageGender.classList.remove("OPEN");
        resultContainer.classList.add("OPEN");
        let div = resultContainer.appendChild(document.createElement("div"));
        let heading = div.appendChild(document.createElement("h2"));
        let paragraph = div.appendChild(document.createElement("p"));

        heading.innerHTML = "Your BMR";
        paragraph.innerHTML = "Your BMR is " + BMR * activityRate + " kcal.";

    } 


}