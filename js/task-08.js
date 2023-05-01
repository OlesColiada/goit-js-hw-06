const loginForm = document.querySelector('.login-form')

loginForm.addEventListener('submit', function callbackSubmit(event){
    event.preventDefault();

    const emailField = document.querySelector('input[type="email"]');
    const passwordField = document.querySelector('input[type="password"]');
    
    let newUser = {};
    if(emailField.value === "" || passwordField.value === ""){return alert("Fill all the forms please!!!")}
    
    newUser.email = loginForm.elements.email.value;
    newUser.password = loginForm.elements.password.value
    console.log(newUser);
    loginForm.reset()
})

