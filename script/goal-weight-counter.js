
const submitButton = document.querySelector("#bmr-submit-button");
const bmrForm = document.querySelector("#bmr-calculator");

bmrForm.addEventListener("submit", calculateCalories);

function calculateCalories (event) {

    event.preventDefault();

    const activity = document.querySelector('input[name="activity"]:checked');
    const gender = document.querySelector('input[name="gender"]:checked');


    // Error handling

    const errorMessageActivity = document.querySelector(".error-message-container.activity");
    const errorMessageGender = document.querySelector(".error-message-container.gender");

    if (gender == null && activity == null) {

        errorMessageGender.classList.add("OPEN");
        errorMessageActivity.classList.add("OPEN");
        return;

    }  else if (gender == null || gender == null & !activity == null) {

        errorMessageActivity.classList.remove("OPEN");
        errorMessageGender.classList.add("OPEN");
        return;

    } else if (activity == null || activity == null && !gender == null) {

        errorMessageGender.classList.remove("OPEN");
        errorMessageActivity.classList.add("OPEN");
        return;

    }


    // Check activity rate

    let activityRate;

    if (activity.value == 1) {

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


    // Get the gender value

    let genderValue;

    if (gender.value == "female") {

        genderValue = - 161;

    } else if (gender.value == "male") {

        genderValue = + 5;

    }


    // Calculate caloric need based on gender, weight, age and activity

    const age = document.querySelector("#age").value;
    const weight = document.querySelector("#weight").value;
    const height = document.querySelector("#height").value;

    let BMR = 10 * weight + 6.25 * height - 5 * age + genderValue;

    const caloricNeeds = BMR * activityRate - 500;


    // Get goal weight and weight difference

    const goalWeight = document.querySelector("#goal-weight").value;
    const weightDifference = weight - goalWeight;
    const calorieDeficit = weightDifference * 7700;
    const daysofDeficit = calorieDeficit / 500;
    const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    let date = new Date();
    date.setDate(date.getDate() + daysofDeficit);
    let month = months[date.getMonth()];
    let day = date.getUTCDate();
    let year = date.getUTCFullYear();


    // Change the UI

    resultContainer.classList.add("OPEN");
    let div = resultContainer.appendChild(document.createElement("div"));
    let heading = div.appendChild(document.createElement("h2"));
    let span = div.appendChild(document.createElement("span"));
    let spanTwo = div.appendChild(document.createElement("span"));
    spanTwo.classList.add("goal-weight-time__date");
    let paragraphTwo = div.appendChild(document.createElement("p"));
    paragraphTwo.classList.add("goal-weight-time__information");

    heading.innerHTML = "About your goal weight";
    span.innerHTML = "You can reach your goal weight by ";
    spanTwo.innerHTML = day + " " + month + " " + year + "*";
    paragraphTwo.innerHTML = "*This is calculated on the basis that you want to lose " + weightDifference + " kg," + " and that you eat " + caloricNeeds + " calories a day to have a deficit of 500 daily. Weight loss is individual and there are no guarantees that you will reach your goal weight on that particular date.";

}
