
const submitButton = document.querySelector("#bmr-submit-button");
const bmrForm = document.querySelector("#bmr-calculator");

bmrForm.addEventListener("submit", calculateBMR);


function calculateBMR(event) {
    event.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.querySelector("#age").value;
    const weight = document.querySelector("#weight").value;
    const height = document.querySelector("#height").value;
    const resultContainer = document.querySelector("#bmr-result");
    const errorMessage = document.querySelector(".error-message");  


    if (resultContainer.children.length === 1) {      
        resultContainer.children[0].remove(); 
    }

    if (gender == null) {          
        
        errorMessage.innerHTML = "Please select an option.";

    } else if (gender.value == "female") {

        let BMR = 10 * weight + 6.25 * height - 5 * age - 161;
        errorMessage.innerHTML = "";

        resultContainer.classList.add("OPEN");
        let div = resultContainer.appendChild(document.createElement('div'));
        let heading = div.appendChild(document.createElement('h2'));
        let paragraph = div.appendChild(document.createElement('p'));

        heading.innerHTML = "Your BMR";
        paragraph.innerHTML = "Your BMR is " + BMR + " kcal.";
        

    } else if (gender.value == "male") {

        let BMR = 10 * weight + 6.25 * height - 5 * age + 5;
        errorMessage.innerHTML = "";

        resultContainer.classList.add("OPEN");
        let div = resultContainer.appendChild(document.createElement('div'));
        let heading = div.appendChild(document.createElement('h2'));
        let paragraph = div.appendChild(document.createElement('p'));

        heading.innerHTML = "Your BMR";
        paragraph.innerHTML = "Your BMR is " + BMR + " kcal.";

    } 


}