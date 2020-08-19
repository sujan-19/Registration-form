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

//check Required
function checkRequired(inputArr){
    inputArr.forEach(function(input) {
        if(input.value.trim()===''){
            showError(input, `${getFieldName(input)} is required`);
        }
        else if(!isValidateEmail(email.value)){
            showError(email, 'email is not valid');
        }
        else{
            showSuccess(input);
        }
    });
}

//check input length
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} character` );
    }
    else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} character` );
    }
    else{
        showSuccess(input);
    }
}


//Get fineld name

function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//check password matching
function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, "Password is not matched");
    }
}
//event listhener

 form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username,email,phone,passwrod,cfpassword]);
    checkLength(username, 3, 15);
    checkLength(passwrod, 6, 25);
    checkPasswordMatch(passwrod, cfpassword )

 })