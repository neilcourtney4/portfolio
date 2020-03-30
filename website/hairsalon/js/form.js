/*FORM VALADATION SCRIPT*/
function validateFormOnSubmit(theForm) {
var reason = "";

  reason += validateUsername(theForm.username);
  reason += validateEmail(theForm.email);
  reason += validatePhone(theForm.phone);
  reason += validateTextArea(theForm.area);
 
 
      
  if (reason != "") {
    alert("Some fields need correction:\n" + reason);
    return false;
  }
   if(reason==""){
		alert('All fields are correctly submitted, Thank You!!! I will get back to you shortly..');
		return true;
		}

  
}
function validateUsername(fld) {
    var error = "";
    var illegalChars = /^[a-zA-Z0-9-<#~//.>'@|?:;=+-]*$/; // allow words only, but some characters are case sensitive
	
    if (fld.value == "") {
        fld.style.background = 'Yellow'; 
        error = "You didn't enter your name!\n";
    } else if ((fld.value.length < 5) || (fld.value.length > 20)) {
        fld.style.background = 'Yellow'; 
        error = "Your name has an insufficient length!\n";
    } else if (illegalChars.test(fld.value)) {
        fld.style.background = 'Yellow'; 
        error = "The Name Field contains illegal characters, Please try again!\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}

function trim(s)
{
  return s.replace(/^\s+|\s+$/, '');
}

function validateEmail(fld) {
    var error="";
    var tfld = trim(fld.value);                        // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
    var illegalChars= /[\(\)\<\>\,\;\:\\\"\[\]]/ ;
   
    if (fld.value == "") {
        fld.style.background = 'Yellow';
        error = "You didn't enter an email address!\n";
    } else if (!emailFilter.test(tfld)) {              //test email for illegal characters
        fld.style.background = 'Yellow';
        error = "Please enter a valid email address!\n";
    } else if (fld.value.match(illegalChars)) {
        fld.style.background = 'Yellow';
        error = "The email address contains illegal characters!\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}
function validatePhone(fld) {
    var error = "";
    var stripped = fld.value.replace(/[\(\)\.\-\ ]/g, '');    

   if (fld.value == "") {
        error = "You didn't enter a phone number!\n";
        fld.style.background = 'Yellow';
    } else if (isNaN(parseInt(stripped))) {
        error = "The phone number you entered contains illegal characters!\n";
        fld.style.background = 'Yellow';
    } else if (!(stripped.length == 10)) {
        error = "The phone number is the wrong length. Make sure you include an area code!\n";
        fld.style.background = 'Yellow';
    }
    return error;
}
function validateTextArea(fld) {
    var error = "";
    var illegalChars = /^[a-zA-Z0-9-<#~//.>'@|?:;=+-]*$/;
	
	// allow letters, numbers, and underscores
 
    if (fld.value == "") {
        fld.style.background = 'Yellow'; 
        error = "You didn't enter anything into the message box!.\n";
    } else if ((fld.value.length < 5) || (fld.value.length > 225)) {
        fld.style.background = 'Yellow'; 
        error = "Please insert more characters into the textbox!\n";
    } else if (illegalChars.test(fld.value)) {
        fld.style.background = 'Yellow'; 
        error = "The Textbox contains illegal characters.Please try again!\n";
    } else {
        fld.style.background = 'White';
    }
    return error;
}
