
let loginBtn = document.querySelector('.loginBtn');
let loggedUser = document.querySelector('.user');
console.log(loginBtn);

 let email = document.querySelector('.email');
let password = document.querySelector('.pass');



function checkExistence(){
    let usersList=JSON.parse(localStorage.getItem('usersList'));

let  emailValue = email.value;
let   passwordValue = password.value;
    let userFound =usersList.some((user)=> user && user.userEmail===emailValue && user.userPassword===passwordValue);
    console.log(userFound);
  
    if(userFound){
        window.location.href ='welcome.html';
    }else{
      alert("Email or password is invalid.")
    }

}

if(loginBtn){
loginBtn.addEventListener('click',(e)=>{
    e.preventDefault(); 
    checkExistence();
  

})
}
let logged= JSON.parse(localStorage.getItem('loggedUser'));
console.log(logged);

loggedUser.innerHTML=logged;

