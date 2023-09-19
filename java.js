function formSubmitted(event){
    let usernameTxt = document.getElementById('usernameTxt')
    let username = usernameTxt.value
    let fullnameTxt = document.getElementById('fullnameTxt')
    let fullname = fullnameTxt.value
    let password = document.getElementById('passwordTxt').value
    let confirmPassword = document.getElementById('confirmPasswordTxt').value
    let email = document.getElementById('emailTxt').value

    
    if (username.length < 5){
         alert('Username length must be at least 5 characters')
    }
    else if (!email.endsWith('@gmail.com')){
        alert('email must ends with @gmail.com')
    }
    else if (password.length < 6){
        alert('Password length must be at least 6 characters')
    }
    else if (password !== confirmPassword){
        alert('Password must match with each other')
    }
    else{
        alert('Register Success!')
    }

    event.preventDefault()

}