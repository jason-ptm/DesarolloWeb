let inpBar = document.querySelectorAll('.inp-bar');
let input = document.querySelectorAll('.input');
let btnInp = document.querySelector('.btn-inp');

let userInp = document.getElementById('user-inp');
let passwordInp = document.getElementById('password-inp');

for(let i = 0; i < inpBar.length; i++){
    input[i].addEventListener('focus',()=>{
        inpBar[i].classList.add('inp-active');
    });
    input[i].addEventListener('blur',()=>{
        inpBar[i].classList.remove('inp-active');
    });
}

btnInp.addEventListener('click',()=>loginRequest(userInp.value, passwordInp.value));

loginRequest = (user,password) =>{
    if(user == '1234' && password == '1234'){
        console.log('acediste crack');
    }
    else loginErr();
}

loginErr = () =>{
    swal(
        "Error","Datos de usuario incorrectos, verifique la información","error"
    );
    userInp.value = '';
    passwordInp.value = '';
    userInp.focus();
    for (const inp of document.querySelectorAll('.input-contenedor')) {
        inp.classList.add('error');
    }
    setTimeout(() => {
        for (const inp of document.querySelectorAll('.input-contenedor')) {
            inp.classList.remove('error');
        }   
    }, 3000);
    
}

