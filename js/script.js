/*---------------------------------------------------------------
The purpose of this function is to show / hide password text
-----------------------------------------------------------------*/

const togglePasswordVisibility = () => {
  let passwordInput = document.querySelector("#password"); // select password input field 
  passwordInput.type === "password"        // if input type is set to password
    ? (passwordInput.type = "text")        // switch to text (visible)
    : (passwordInput.type = "password");   // otherwise switch to password (hidden)
};
