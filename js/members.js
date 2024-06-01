// here we listen to an event before performing any action
document.getElementById('members-form').addEventListener('submit', function(evt){
    evt.preventDefault();
    let error = false;
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const phone_no = document.getElementById('phone_no').value;
    const email = document.getElementById('email').value;
    const unit = document.getElementById('unit').value;
    const postheld = document.getElementById('post_held').value;

    if (name.length === 0){
        error = true;
        document.getElementById('name-error').innerHTML = 'Please type in your name';
    } else {
        document.getElementById('name-error').innerHTML = '';
    }

     if (gender.length === 0){
         error =true;
         document.getElementById('gender-error').innerHTML = 'Please pick in your gender';
     } else {
         document.getElementById('gender-error').innerHTML = '';
     }

     if (phone_no.length === 0){
         error = true;
         document.getElementById('number-error').innerHTML = 'Kindly type in your number';
     } else if (!phone_no.match(/^[0-9]{11,15}$/)) {
         document.getElementById('number-error').innerHTML = 'Only numeric character is allowed';
     } else {
         document.getElementById('number-error').innerHTML = '';
     }
     
      if (email.length === 0){
          error = true;
          document.getElementById('email-error').innerHTML = 'Please give in your email address';
      } else if (email.length > 30){
          error = true;
          document.getElementById('email-error').innerHTML = 'You have exceeded maximum character';
      } else {
          document.getElementById('email-error').innerHTML = '';
      }

      if (unit.length === 0){
          error = true;
          document.getElementById('unit-error').innerHTML = 'Please type in your unit';
      } else {
          document.getElementById('unit-error').innerHTML = '';
      }

      if (postheld.length === 0){
          error = true;
          document.getElementById('post-error').innerHTML = 'Kindly type in your post';
      } else {
          document.getElementById('post-error').innerHTML = '';
      }

      if(error){
          document.getElementById('msg').innerHTML = 'Please enter neccessary details';
          document.getElementById('msg').className('error-msg-format');
          return false;
      } 
      return true;
})