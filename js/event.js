// here we listen to an event before performing any action
document.getElementById('event-form').addEventListener('submit', function(evt){
    evt.preventDefault();
    let error = false;
    const event_name = document.getElementById('event-name').value;
    const event_date = document.getElementById('event-date').value;
    const event_detail =  tinyMCE.activeEditor.getContent();
    
    if (event_name.length === 0){
        error = true;
        document.getElementById('event_name-error').innerHTML = 'Please type in your name';
    } else{
        document.getElementById('event_name-error').innerHTML = '';
    }

    if (event_date.length === 0){
        error = true;
        document.getElementById('event_date-error').innerHTML = 'Please type in the date';
    } else{
        document.getElementById('event_date-error').innerHTML = '';
    }

    if (event_detail.length === 0){
        error = true;
        document.getElementById('details-error').innerHTML = 'Please enter your details';
    } else{
        document.getElementById('details-error').innerHTML = '';
    }

   
    if (error){
        document.getElementById('msg').innerHTML = 'Please correct all errors';
        document.getElementById('msg').style.color = 'red';
        return false;
    }
     return true;
})