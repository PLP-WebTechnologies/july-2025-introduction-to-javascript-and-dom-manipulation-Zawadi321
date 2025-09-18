//Part One: Variable Declaration and Conditionals
//Data types
let number = 5; // Number
let name = "John"; // String
let is_raining = true; // Boolean
let today; //undefined
let yesterday = null //null

let userName = prompt("Enter your name:"); //prompt function to get user input
alert("Hello " + userName + "!");


//part Two: Functions
function welcomeMessage(name) {  //function that takes a name as a parameter and returns a welcome message
    return "Welcome to our website " + name + "! We're glad to have you here.";
}
alert(welcomeMessage(userName));

//Part Three: Loops 
while (true) {      //infinite loop that will keep asking the user for their age until they enter a valid age between 15 and 35
    let age = prompt("Enter your age:");
    if (age >= 15 && age <= 35) {
        alert("You are old enough to register.");
        console.log("User entered valid age: " + age);
        break;
    } else {
        alert("Invalid age. Please try again.");
        console.log("User entered invalid age: " + age);
    }
}

//Part Four:DOM
document.querySelector("form").addEventListener("submit", function(event) {  //selects form element and function will execute when submit button is clicked
    event.preventDefault(); // Prevent form submission and refreshing of the page

    // Validate form fields- tracks whether all fields are valid; if not, isValid becomes false and it will prevent submission
    let isValid = true;

    // Check email
    const email = document.getElementById("email").value;   //gets the value of the email input field
    if (!email.includes("@")) {     //condition to check if the email has the @ symbol
        document.getElementById("emailError").textContent = "Invalid email address.";   //if not, it displays an error message
        isValid = false;    //sets isValid to false and prevents form submission
    } else {
        document.getElementById("emailError").textContent = "";  //if valid, no error message is shown
    }

    // Check phone number
    const phone = document.getElementById("phone-number").value;  //gets the value of the phone number input field
    if (phone.length < 10) {            //condition to check whether the length of the values entered is less than 10
        document.getElementById("phoneError").textContent = "Phone number must be at least 10 digits."; //if true, it displays an error message
        isValid = false;  //sets isValid to false and prevents form submission
    } else {
        document.getElementById("phoneError").textContent = ""; //if valid, no error message is shown
    }

    // Check age
    const age = document.getElementById("age").value;   //gets the value of the age input field
    if (age < 15 || age > 35) {  //condition to check whether the age entered is less than 15 or greater than 35
        document.getElementById("ageError").textContent = "Age must be between 15 and 35."; //if true, it displays an error message
        isValid = false;    //sets isValid to false and prevents form submission
    } else {
        document.getElementById("ageError").textContent = "";       //if valid, no error message is shown
    }

    // Check password
    const password = document.getElementById("password").value; //gets the value of the password input field
    if (password.length < 8 || !password.match("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}")) { //condition to check whether the length of the password entered is less than 8 or does not contain at least one digit, one lowercase letter, and one uppercase letter
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter.";   //if true, it displays an error message
        isValid = false;    //sets isValid to false and prevents form submission
    } else {
        document.getElementById("passwordError").textContent = "";      //if valid, no error message is shown
    }

    // Check confirm password
    const confirmPassword = document.getElementById("confirm-password").value;  //gets the value of the confirm password input field
    if (confirmPassword !== password) { //condition to check whether the value entered in confirm password matches the value entered in password
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";    //if not, it displays an error message
        isValid = false;    //sets isValid to false and prevents form submission
    } else {
        document.getElementById("confirmPasswordError").textContent = "";      //if valid, no error message is shown
    }

    if (isValid) {
        // If all fields are valid, show success message
        document.querySelector(".success-message").textContent = "Form submitted successfully!";  //displays success message if all fields are valid
        alert("Form submitted successfully!");
    }
});