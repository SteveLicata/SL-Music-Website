window.onload = function() {
  console.log("DOM loaded");


  //Bootstrap/jQuery Navbar Toggle
  $('.collapse').collapse({
    toggle: false
  });



  // validation form submit button & click event
  var submitButton = document.querySelector('#button');
  submitButton.addEventListener('click', function(){
    formValidation();
  });


    // email validation
  function emailValidation() {
    var email = document.querySelector('#inputemail').value;
    console.log("Email: " + email);
    // checks if the email field is blank
    if (email == "") {
      alert("Please Enter An Email Address.");
      return false;
      }
    // checks if the email is a valid email address
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      alert("Invalid Email.");
      return false;
    } else {
      return true;
    }
  };


  // subject validation
  function subjectValidation() {
    var subject = document.querySelector('#inputsubject').value;
    console.log("Subject: " + subject);
  };


  // message validation
  function messageValidation() {
    var message = document.querySelector('#inputmessage').value;
    console.log("Message: " + message);
  };


  // validation function
  function formValidation() {
    //checks if any of the validations are invalid and prompts user to fix errors
    if (!emailValidation()) {
      alert("Please Fix Errors to Submit.")
      return false;
    }
    else {
      // if validation passes, user will be brought to new page with confirmation prompt - see RUBY for this code
      // document.form.action = "actionpage.html"
      return true;
    }
  };


};
