// here we listen to an event before performing any action
document.getElementById('unit-form').addEventListener('submit', function(evt){
    evt.preventDefault();
    let error = false;
    const name = document.getElementById('name').value;

    if(name.length === 0){
        error = true;
        document.getElementById('name-error').innerHTML = 'Please enter your name';
    } else{
        document.getElementById('name-error').innerHTML = '';
    }

    
    if (error){
        document.getElementById('msg').innerHTML = 'Please enter all details';
        document.getElementById('msg').style.color = 'red';
        return false;
    }
     return true;
});