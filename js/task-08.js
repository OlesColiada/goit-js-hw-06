const loginForm = document.querySelector('.login-form')

loginForm.addEventListener('submit', function callbackSubmit(event){
    event.preventDefault();

    const emailField = document.querySelector('input[type="email"]');
    const passwordField = document.querySelector('input[type="password"]');
    let newUser = {};
    
    if(emailField.value !== "" && passwordField.value !== ""){
        newUser.email = loginForm.elements.email.value;
        newUser.password = loginForm.elements.password.value}
    else (alert("Fill all the forms please!!!"));
    console.log(newUser);
    loginForm.reset()
})

