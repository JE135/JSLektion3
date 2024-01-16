const num = 10;
const userInput = prompt("Enter a number:");
const userNumber = Number(userInput);

if (isNaN(userNumber)) {
    console.log("Invalid input. Please enter a valid number.");
} else if (userNumber > num) {
    console.log("Your number is greater than", num);
} else if (userNumber === num) {
    console.log("Your number is equal to", num);
} else {
    console.log("Your number is less than", num);
}
