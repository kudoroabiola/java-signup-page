
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const form = document.getElementById("form");

form.addEventListener("submit", e => {
    e.preventDefault();

    checkInputs();

    
});

function checkInputs() {
    const fnameValue = fname.value.trim()
    const lnameValue = lname.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const confirmPasswordValue = confirmPassword.value.trim()

    if (fnameValue == "") {


       setErrorFor(fname, "First Name cannot be blank");
    }else {
        setSuccessFor(fname);
    }

    if (lnameValue == "") {
        setErrorFor(lname, "Last Name cannot be blank");
    }else {
        setSuccessFor(lname);
    }

    if (emailValue == "") {
        setErrorFor(email, "Email cannot be blank");
    }else if(!isEmail(emailValue)){
        setErrorFor(email, "Not a valid email");
    }else {
        setSuccessFor(email);
    }

    if (passwordValue == "") {
        setErrorFor(password, "Password cannot be blank");
    }else {
        setSuccessFor(password);
    }

    if (confirmPasswordValue == "") {
        setErrorFor(confirmPassword, "Confirm Password cannot be blank");
    }else if(passwordValue !== confirmPasswordValue) {
        setErrorFor(confirmPassword, "Passwords does not match");
    }else{
        setSuccessFor(confirmPassword);
    }

    if (document.querySelectorAll('.form-field')[0].classList.contains('success') && 
       document.querySelectorAll('.form-field')[1].classList.contains('success') && 
       document.querySelectorAll('.form-field')[2].classList.contains('success') &&
       document.querySelectorAll('.form-field')[3].classList.contains('success') &&
       document.querySelectorAll('.form-field')[4].classList.contains('success') ) {
        form.submit()
    }

}

function  setErrorFor(input, message) {
    const formField = input.parentElement;
    const small = formField.querySelector("small");
    formField.className = "form-field error";
    small.innerText = message;

    
}

function setSuccessFor(input) {
    const formField = input.parentElement;
    formField.className = "form-field success";
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}