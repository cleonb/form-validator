const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const message = document.getElementById('message');

let isValid = false;
let passWordsMatch = false;

function validateForm() {
    // Constraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if(!isValid){
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        return;
    }
    // Check to see if passwords match
    if(password1El.value === password2El.value) {
       passWordsMatch = true;
       password1El.style.borderColor = 'green';
       password2El.style.borderColor = 'green';
    } else {
        passWordsMatch = false;
        message.textContent = 'Make sure passwords match.'
        message.style.color = 'red';
        password1El.style.borderColor = 'red';
       password2El.style.borderColor = 'red';
    }


    // If form is valid and passwords match
    if (isValid && passWordsMatch){
        message.textContent = 'Successfully Registered!'
        message.style.color = 'green';
    }
    

}

function storeFormData() {
    const user = {
        name: form.name.value,
        email:form.email.value,
        website:form.website.value,
        phone:form.phone.value,
        password:form.password.value
    };
    console.log(user);
}

function processFormData(e){
    e.preventDefault();
    // Validate form
    validateForm();
    // Submit Data if Valid
    if(isValid && passWordsMatch){
        storeFormData();
    }
}



// Event Listner
form.addEventListener('submit', processFormData);
