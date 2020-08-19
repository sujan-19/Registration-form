const form = document.getElementById('form'); 
const username = document.getElementById('username'); 
const email = document.getElementById('email'); 
const phone = document.getElementById('phone'); 
const passwrod = document.getElementById('passwrod'); 
const cfpassword = document.getElementById('cfpassword'); 
// show error message

function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

    //show success

function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// show email validation
function isValidateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

 //event listhener

 form.addEventListener('submit', function(e){
    e.preventDefault();

    if(username.value === ''){
        showError(username, 'Usernmae is required');
    }
    else{
        showSuccess(username)
    }

    if(email.value === ''){
        showError(email, 'email is required');
    }
    else if(!isValidateEmail(email.value)){
        showError(email, 'email is not valid');
    }
    else{
        showSuccess(email)
    }

    if(phone.value === ''){
        showError(phone, 'Telephone number is required');
    }
    else{
        showSuccess(usphoneername)
    }

    if(passwrod.value === ''){
        showError(passwrod, 'passwrod is required');
    }
    else{
        showSuccess(passwrod)
    }

    if(cfpassword.value === ''){
        showError(cfpassword, 'confirm password is required');
    }
    else{
        showSuccess(cfpassword)
    }
 })