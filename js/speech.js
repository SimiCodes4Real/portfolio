// here we listen to an event before performing an action
document.getElementById('speech-form').addEventListener('submit', function(evt){
    evt.preventDefault();
    let error = false;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title.length === 0){
        error = true;
        document.getElementById('title-error').innerHTML = 'Kindly enter the title';
    } else{
        document.getElementById('title-error').innerHTML = '';
    }

    if (content.length === 0){
        error = true;
        document.getElementById('content-error').innerHTML = 'Kindly enter the content';
    } else if (content.length > 70){
        error = true;
        document.getElementById('content-error').innerHTML = 'You have exceeded maximum character';
    } 
    else{
        document.getElementById('content-error').innerHTML = '';
    }

    if (error){
        document.getElementById('msg').innerHTML = 'Please enter all details';
        document.getElementById('msg').style.color = 'red';
        return false
    }
        return true;
})