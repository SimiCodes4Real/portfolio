// here we listen to an event before performing any action
document.getElementById('quote-form').addEventListener('submit', function(evt){
    evt.preventDefault();
    let error = false;
    const quote = tinyMCE.activeEditor.getContent();

    if (quote.length === 0){
        error = true;
        document.getElementById('quote-error').innerHTML = 'Please type in the quote';
    } else {
        document.getElementById('quote-error').innerHTML = '';
    }

    if (error){
        document.getElementById('msg').innerHTML = 'Please enter all details';
        document.getElementById('msg').style.color = 'red';
        return false;
    }
     return true;
})