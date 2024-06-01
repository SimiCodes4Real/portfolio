// listen to an event first before performing any action
document.getElementById('users-form').addEventListener('submit', function(evt){
    evt.preventDefault();
    let error = false;
    const name = document.getElementById('name').value;
    const phone_no = document.getElementById('phone_no').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const cfm_password = document.getElementById('cfm_password').value;

    if (name.length === 0){
        error = true;
        document.getElementById('name-error').innerHTML = 'Please enter your name';
    } else{
        document.getElementById('name-error').innerHTML = '';
    }

    if (phone_no.length === 0){
        error = true;
        document.getElementById('number-error').innerHTML = 'Please give in your number';
    } else{
        document.getElementById('number-error').innerHTML = '';
    }

    if (email.length === 0){
        error = true;
        document.getElementById('email-error').innerHTML = 'Kindly type in your email address';
    } else if(email.length > 20){
        error = true;
        document.getElementById('email-error').innerHTML = 'You have exceeded maximum character';
    } else{
        document.getElementById('email-error').innerHTML = '';
    }

    if (password.length === 0){
        error = true;
        document.getElementById('password-error').innerHTML = 'Please type in your password';
    } else if (password.length > 15){
        error = true;
        document.getElementById('password-error').innerHTML = 'You have exceeded maximum character'; 
    } else{
        document.getElementById('password-error').innerHTML = '';
    }

    if (password !== cfm_password){
        error = true;
        document.getElementById('cfm_password-error').innerHTML = 'Password does not match';
    } else {
        document.getElementById('cfm_password-error').innerHTML = '';
    }

    if (error){
        document.getElementById('msg').innerHTML = 'Please enter all details';
        document.getElementById('msg').style.color = 'red';
        return false
    }
     return true;
})
