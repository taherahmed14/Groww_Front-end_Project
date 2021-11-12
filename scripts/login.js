document.addEventListener("DOMContentLoaded", () => {
    let loginForm = document.querySelector("#login");
    let signupForm = document.querySelector("#signup");

    document.querySelector("#linkSignup").addEventListener("click", () =>{
        loginForm.classList.add("form--hidden");
        signupForm.classList.remove("form--hidden")
    });

    document.querySelector("#linkLogin").addEventListener("click", () =>{
        loginForm.classList.remove("form--hidden");
        signupForm.classList.add("form--hidden")
    })

})


function setFormMessage(formElement, type, message){

    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    // messageElement.classList.remove("form__message--error");
    messageElement.classList.add(`form__message--${type}`)
}


function logIn(e){
    e.preventDefault();

    let login_form = document.getElementById("login")

        let email = login_form.usermail.value;
        let password = login_form.userpass.value;

        let all_users = JSON.parse(localStorage.getItem("users"))
        // console.log(all_users)


        all_users.forEach(function(user){

            if(email === user.email && password === user.password){
                window.location.href = "groww_home.html"


            }else{
                login_form.addEventListener("submit", e => {
                    setFormMessage(login_form, "error", 'Please enter valid credentials')
                })
            }
            
        })
}



function signUp(e){

    e.preventDefault()

    let signup_form = document.getElementById("signup");

    let firstName = signup_form.firstName.value;
    let lastName = signup_form.lastName.value;
    let email = signup_form.email.value;
    let password = signup_form.password.value;
    // let confirmPassword = signup_form.confirmPassword.value;
    let mobileNumber = signup_form.mobileNumber.value;

    if(localStorage.getItem('users') === null){
        localStorage.setItem('users', JSON.stringify([]))
    }



    let user = {
        firstName,
        lastName,
        email,
        password,
        mobileNumber
    }


    let arr = JSON.parse(localStorage.getItem('users'))
    let exist = arr.length && JSON.parse(localStorage.getItem("users")).some(user => user.email === email && user.mobileNumber === mobileNumber);

    if(!exist){
        arr.push(user)
        localStorage.setItem('users', JSON.stringify(arr))
    }else{
        // alert("user already there")
        signup_form.addEventListener("submit", e => {
            e.preventDefault()
           let id =  setInterval(() => {
                setFormMessage(signup_form, 'error', "User alerady exist...! Please Login")
            }, 1000);
            clearInterval(id)
            signup_form.classList.remove("form__message--error")
        })
    }



    
    



}