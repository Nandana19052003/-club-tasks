function validateLogin(username, password) {

    const validUsers = [
        {EMAIL: "email1@gmail.com" , username: "user1", password: "password1"},
        {EMAIL: "email2@gmail.com" ,username: "user2", password: "password2"},
        {EMAIL: "email3@gmail.com" ,username: "user3", password: "password3"}
    ];

    // Check if the entered username and password match any of the valid users
    for (let i = 0; i < validUsers.length; i++) {
        if (username === validUsers[i].username && password === validUsers[i].password) {
            return true;
        }
    }

    // If no match is found, return false
    return false;
}

// Example usage
const enteredEMAIL = "email1@gmail.com";
const enteredUsername = "user1";
const enteredPassword = "password1";

if (validateLogin(enteredUsername, enteredPassword)) {
    console.log("Login successful!");
} else {
    console.log("Invalid username or password.");
}
