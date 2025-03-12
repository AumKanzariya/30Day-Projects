const form = document.querySelector("form")
const username = document.getElementById("username")
const email = document.getElementById("Email")
const password = document.getElementById("password")
const cPassword = document.getElementById("cPassword")
const submitbtn = document.getElementById("submit")

const resetBorders = () => {
    [username, email, password, cPassword].forEach((input) => {
        input.style.border = "1px solid gray"; 
    });
};


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (validateinput()){
        alert("success")
        form.reset(); 
        resetBorders();
    }

})


const validateinput = () => {
    const usernamevalue = username.value.trim();
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();
    const cPasswordvalue = cPassword.value.trim();
    let isvalide = true


    if (usernamevalue === '') {
        setError(username, "Please enter username")
        isvalide = false
    } else {
        setSuccess(username)

    }



    if (emailvalue === '') {
        setError(email, "Please enter email address");
        isvalide = false
    } else {
        setSuccess(email)

    }



    if (passwordvalue === '') {
        setError(password, "Pleae enter password");
        isvalide = false
    } else if (passwordvalue.length < 6) {
        setError(password, "Password must be at list 6 character");
        isvalide = false
    }
    else {
        setSuccess(password)

    }



    if (cPasswordvalue === '') {
        setError(cPassword, "Pleaser enter confirm password");
        isvalide = false
    } else if (cPasswordvalue !== passwordvalue) {
        setError(cPassword, "Passwords do not match!");
        isvalide = false
    }
    else {
        setSuccess(cPassword)
    }

    
    
    return isvalide;
}




const setError = (element, message) => {

    element.parentElement.querySelector(".error").innerHTML = message;
    element.style.border = "2px solid red";
}

const setSuccess = element => {
    element.parentElement.querySelector(".error").innerHTML = "";
    element.style.border = "2px solid green";
}
