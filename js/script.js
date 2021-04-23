/*---------------------------------------------------------------
The purpose of this function is to show / hide password text
-----------------------------------------------------------------*/

const togglePasswordVisibility = () => {
  let pwInput = document.querySelector("#password"); // select password input field 
  pwInput.type === "password"        // if input type is set to password
    ? (pwInput.type = "text")        // switch to text (visible)
    : (pwInput.type = "password");   // otherwise switch to password (hidden)
};
