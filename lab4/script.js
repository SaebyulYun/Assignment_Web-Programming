/*
Saebyul Yun
041091398
lab04
*/

// Selecting input elements by id
let emailInput=document.querySelector("#email");
let nameInput=document.querySelector("#login");
let passwdInput=document.querySelector("#pass");
let passwd2Input=document.querySelector("#pass2");
let newsInput=document.querySelector("#newsletter");
let termInput=document.querySelector("#terms");

// made password input required 
// this makes the password field mandatory
passwdInput.attributes.required = "required";

// create paragraph to display the error Msg returned by vaildateEmail() function 
// and assign this paragraph to the class warning to style the error MSg
let emailError=document.createElement('p');
emailError.setAttribute("class","warning");
//append the created element to the parent of email div
document.querySelectorAll(".textfield")[0].append(emailError);

//this paragraph to display the error Msg returned by validateName() function 
let nameError=document.createElement('p');
nameError.setAttribute("class","warning");
document.querySelectorAll(".textfield")[1].append(nameError);

//this paragraph to display the error Msg returned by validatePasswd() function 
let passwdError=document.createElement('p');
passwdError.setAttribute("class","warning");
document.querySelectorAll(".textfield")[2].append(passwdError);

////this paragraph to display the error Msg returned by validatePasswd2() function 
let passwd2Error=document.createElement('p');
passwd2Error.setAttribute("class","warning");
document.querySelectorAll(".textfield")[3].append(passwd2Error);


// create paragraph to display the error Msg returned by vaildateTerms() function 
// and assign this paragraph to the class warning to style the error MSg
let termError=document.createElement('p');
termError.setAttribute("class","warning");
termError.setAttribute("id","termsError");
//append the created element to the parent of check div
document.querySelectorAll(".checkbox")[1].append(termError); // second check box error 

//define a global variables (error mesage)
let emailErrorMsg="X Email address should be non-empty with the formate xyz@xyz.xyz";
let nameErrorMsg="X User name should be non-empty and within 30 characters";
let passwdErrorMsg="X Password should be at least have 8 characters";
let passwd2ErrorMsg="X Please retype password";
let termErrorMsg="X Please accept the terms and conditions";
let defaultMsg="";



//method to validate email
function vaildateEmail(){
    let email = emailInput.value; // access the value of the email
    let regexp=/\S+@\S+\.\S+/; //reg. expression 

    if(regexp.test(email)){ //test is predefiend method to check if the entered email matches the regexp
    return defaultMsg;
    }
    else {
    return emailErrorMsg;      
    }
}

//method to validate user name
function validateName(){
    let name = nameInput.value; // access the value of the email

    if(name.length < 30 && name !== ''){ //test is predefiend method to check if the entered email matches the regexp
        return defaultMsg;
    }
    else {
    return nameErrorMsg;   
    }
}

//method to validate password
function validatePasswd(){
    let passwd = passwdInput.value; 

    if(passwd.length >= 8 && passwd !== ''){
        return defaultMsg;
    }
    else {
    return passwdErrorMsg;
    }
}

//method to validate retyped  password2 
function validatePasswd2(){
    let passwd2 = passwd2Input.value; // access the value of the passwd2
    if(passwd2===passwdInput.value && passwd2 !== ''){
        return defaultMsg;
    }
    else {
    return passwd2ErrorMsg;
    }
}

//method to validate newsletter subscription in the check box
function validateNews(){
    if(newsInput.checked){
        return alert(newsAlert);
    }
    else {
        return defaultMsg;
    }
}

// Method to validate acceptance of terms
function validateTerm(){
    if(termInput.checked){
        return defaultMsg;
    }
    else {
        return termErrorMsg;
    }
}

// Event handler for submit event
function validate(){
    
    let valid = true; //global validation 
    let emailValidation=vaildateEmail();
    let nameValidation=validateName();
    let passwdValidation=validatePasswd();
    let passwd2Validation=validatePasswd2();
    let termValidation=validateTerm();

//  displaying error messages when user check the box
    if(emailValidation !== defaultMsg){
        emailError.textContent = emailValidation;
        valid = false;
    }
    if(nameValidation !== defaultMsg){
        nameError.textContent = nameValidation;
        valid = false;
    }

 // Converting user name to lowercase
    nameInput.value=nameInput.value.toLowerCase();

    if(passwdValidation !== defaultMsg){
        passwdError.textContent = passwdValidation;
        valid = false;
    }
    if(passwd2Validation !== defaultMsg){
        passwd2Error.textContent = passwd2Validation;
        valid = false;
    }
    if(termValidation !== defaultMsg){
        termError.textContent=termValidation;
        valid = false;
    }
    return valid;
};

// event listner to empty the text inside the two paragraph when resent
document.querySelector("form").addEventListener("reset", reserFormError);
function reserFormError() {
    emailError.textContent=defaultMsg;
    nameError.textContent=defaultMsg;
    passwdError.textContent=defaultMsg;
    passwd2Error.textContent=defaultMsg;
    termError.textContent=defaultMsg;
}

//If the user selects to receive a newsletter, immediately alert them about
//possible spam by setting an event on this field. 
let messageAlert="You will now receive Weekly Kitten Pictures Newsletter!"; // message art string 

// added event listner to the email if you entered correct email,the error paragraph with be empty
emailInput.addEventListener("blur", function(){
    let x=vaildateEmail();
    if(x == defaultMsg){
        emailError.textContent = defaultMsg;
    }
    else{
        emailError.textContent=emailErrorMsg;
    }
    });

// Event listener to validate user name on blur
nameInput.addEventListener("blur",function(){ 
    let x=validateName();
    if(x===defaultMsg){
        nameError.textContent=defaultMsg;
     }
    else{
        nameError.textContent=nameErrorMsg;
        }
    });

// Event listener to validate user password on blur
passwdInput.addEventListener("blur",function(){ 
    let x=validatePasswd();
    if(x===defaultMsg){
        passwdError.textContent=defaultMsg;
     }
    else{
        passwdError.textContent=passwdErrorMsg;
        }
    });

// Event listener to validate retyped password2 on blur
passwd2Input.addEventListener("blur",function(){ 
    let x=validatePasswd2();
    if(x===defaultMsg){
        passwd2Error.textContent=defaultMsg;
    }
    else{
        passwd2Error.textContent=passwd2ErrorMsg;
    }
});

// Event listener to show alert on newsletter checkbox change
newsInput.addEventListener("change",function(){
    if(newsInput.checked){
        return alert(messageAlert);
    }
    else {
        return defaultMsg;
    }
})

// added event listner to the checkbox if you check the terms box,the error paragraph with be empty
    termInput.addEventListener("change", function(){// anonymous function
        if(termInput.checked){
            termError.textContent= defaultMsg;
        }
        else{
            termError.textContent=termErrorMsg;
        }
});

