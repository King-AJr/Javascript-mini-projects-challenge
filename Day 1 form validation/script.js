const form = document.getElementById('form');
const password = document.getElementById('Password');
const username = document.getElementById('Username');
const email = document.getElementById('Email');
const password2 = document.getElementById('password2');


// Function to show appropriate error msg when any of the required criterias isnt met
showError=(input, message)=>{
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small')
    small.innerText = message;
}

// Function to change css properties to indicate success
showSuccess =(input) => {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
// Function to check if required fields are filled
checkRequired = (inputArray)=>{
    inputArray.forEach(function(input){
        if(input.id === password2 && input.value.length === ''){
            showError(input,`This field is required`);
        }
        else if(input.value === ''){
            showError(input,`${input.id} is required`);
         }else{
             showSuccess(input);
         }
    })
    
}

// Function to check if the fields are filled with the required length of char
CheckReqLength = (input,min, max) => {
     if(input.value.length < min){
        showError(input, `${input.id} must be more than ${min} characters`)
    }
    else if(input.value.length > max){
    {showError(input, `${input.id} must be less than ${max} characters`)
    }}
        
    else(showSuccess(input))
}

// Function to compare passwords
comparePassword = (a,b) => {
    if (a.value!==b.value ) {
        showError(b,`Your password didn't match`);
    }
    else{ showSuccess(b)}
}

//Event listener that listens for the submit button and calls all the appropriate functions with their parameters
form.addEventListener('submit', function(input) {
    input.preventDefault();
    checkRequired([username, email, password, password2]);
    CheckReqLength(username, 3, 15);
    CheckReqLength(password, 8, 15);
    comparePassword(password, password2);
    
})