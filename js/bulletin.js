// here we listen to an event before performing an action
document.getElementById('bulletin-form').addEventListener('submit', function(evt){
    evt.preventDefault();
    let error = false;
    const bulletin_name = document.getElementById('title-name').value;
    const bulletin_details = document.getElementById('bulletin_details').value;

    if (bulletin_name.length === 0){
        error = true;
        document.getElementById('title_name-error').innerHTML = 'Please enter a value';
    } else {
        document.getElementById('title_name-error').innerHTML = '';
    }

    if (bulletin_details.length === 0){
        error = true;
        document.getElementById('bulletin_details-error').innerHTML = 'Please enter the details';
    } else {
        document.getElementById('bulletin_details-error').innerHTML = '';
    }

    if (error){
        document.getElementById('msg').innerHTML = 'Please enter all details';
        document.getElementById('msg').style.color = 'red';

        return false;
    }
     return true;
})