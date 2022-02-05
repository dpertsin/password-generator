function copyPassword() {
    // Get the text field 
    let passwordText = document.getElementById("passwordGenerated");

    // Select the text field
    passwordText.select();
    passwordText.setSelectionRange(0, 9999); // For mobile devices

    // Copy the password inside of the text field
    navigator.clipboard.writeText(passwordText.value);

    // Alert the copied Password
    alert("You have successfully copied your password: " + passwordText.value);
    
}

// Custom characters to generate the password
const upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()_-=+";

function generatePassword() {
    let upper = document.getElementById("upper").checked;
    let lower = document.getElementById("lower").checked;
    let number = document.getElementById("number").checked;
    let symbol = document.getElementById("symbol").checked;

    let characters = "";

    let pwLength = document.getElementById("length").value;
    console.log(pwLength);

    if(upper){
        characters += upperCharacters;
    }
    if(lower){
        characters += lowerCharacters;
    }
    if(number){
        characters += numberCharacters;
    }
    if(symbol){
        characters += symbolCharacters;
    }

    let password = generateString(pwLength, characters);
    console.log(password);
    document.getElementById("passwordGenerated").value = password;
}




function generateString(length, characters) {
    let result = "";
    const charactersLength = characters.length;
    // The Math.random() method is used to generate random characters from the specified characters (A-Z, a-z, 0-9, symbols).
    // The for loop is used to loop through the number passed into the generateString() function. During each iteration, a random character is generated.
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}