let nameRegex =/^[A-Za-z]{3,}$/;
let emailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passRegex=/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let nameError = document.querySelector('.nameError');
let emailError = document.querySelector('.emailError');
let passError = document.querySelector('.passError');
let submitBtn = document.querySelector('.submitBtn');
let loggedUser = document.querySelector('.user');


// console.log(submitBtn);
// let loginBtn = document.querySelector('.loginBtn');
// console.log(loginBtn);




let name_ = document.querySelector('.name');
let email = document.querySelector('.email');
let password = document.querySelector('.pass');

let usersList=JSON.parse(localStorage.getItem('usersList'))||[];
let user;

function validateUserData(){
    if(validateEmail()&&
        validateName()&&
        validatePassword() ){
            if(!isEmailExist() ){
         user={
            userName:name_.value,
            userEmail:email.value,
            userPassword:password.value,
         }
       

       usersList.push(user);
       localStorage.setItem('usersList',JSON.stringify(usersList));
       localStorage.setItem('loggedUser',JSON.stringify(user.userName));
       console.log(usersList);
       clearForm();
       return true;
    }else{
        alert("Email already exists.");
        return false;
    }
}
}


function isEmailExist(){
    let emailFound = usersList.some((u)=> u && u.userEmail === email.value);
    if(emailFound){
        return true;
    }else{
        return false;
    }
}

//   window.onload(function(){
//      document.querySelector('input').classList.remove('is-invalid');
//     });

function validateName(){
    if(nameRegex.test(name_.value) == true){
        name_.classList.add('is-valid');
        name_.classList.remove('is-invalid');
        nameError.classList.add('d-none');
        return true;
    }else{
        name_.classList.remove('is-valid');
        name_.classList.add('is-invalid');
        nameError.classList.remove('d-none');
        return false; 
    }
}

function validateEmail(){
    if(emailRegex.test(email.value) == true){
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
        emailError.classList.add('d-none');
        return true;
    }else{
        email.classList.remove('is-valid');
        email.classList.add('is-invalid');
        emailError.classList.remove('d-none');
        return false; 
    }
}

function validatePassword(){
    if(passRegex.test(password.value) == true){
        password.classList.add('is-valid');
        password.classList.remove('is-invalid');
        passError.classList.add('d-none');
        return true;
    }else{
        password.classList.remove('is-valid');
        password.classList.add('is-invalid');
        passError.classList.remove('d-none');
        return false; 
    }
}



function clearForm(){
    name_.value=null;
    email.value=null;
    password.value=null;

    nameError.classList.remove('d-none');
    emailError.classList.remove('d-none');
    passError.classList.remove('d-none');
}


  
  
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault(); 
   if(validateUserData()){
   window.location.href='login.html';
   }
})