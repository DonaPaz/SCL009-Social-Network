import { registerUser } from '../js/auth.js';
import { validateEmail} from '../js/validator.js';
import { singInGoogle } from '../js/auth.js';
import { themePreferences } from './themePreferences.js';
import { themeSignIn } from './themeSignIn.js';
import { eye } from '../js/lib.js';

export const themeRegister = () => {
  //Acá se muestra input nombre, contraseña, correo. botón enviar y botón ingresar con google
  document.body.style.background="";
  document.getElementById('navbar').innerHTML=`  <img src="./img/logo.png"  id="logo" alt="logo">
                                                  <button id="btn-signin">Iniciar sesión</button>`
  
  
  document.getElementById('content').innerHTML = `<h2>Regístrate</h2>
                         <input id="txt-user" type="text" placeholder="nombre">
                         <p id="alert-txt-user"></p>
                         <input id="txt-email" type="email" placeholder="email">
                         <p id="alert-txt-email"></p>
                         <input id="txt-password" type="password" placeholder="contraseña"><button id="eye_btn" type="button"><object><i id="eye_icon" width="15" alt="oculto" class="fas fa-eye"></i></object></button><br>
                         <p id="alert-txt-password"></p>
                         <button id="btn-init-google" class="btn btn-secondary">Iniciar con Google</button><br>
                         <button id ="btn-preferences"  href="#preferences" class="btn btn-secondary">Enviar</button><br>`

  document.getElementById('eye_btn').addEventListener('click', () => {
    eye();
  })

 document.getElementById('btn-signin').addEventListener('click', () => {
   themeSignIn();
   window.location.hash = '#/signin';
})


  document.getElementById('btn-init-google').addEventListener('click',()=>{
  singInGoogle();
 })
 document.getElementById('btn-preferences').addEventListener('click', () =>{
   let txtUser = document.getElementById('txt-user').value;
   let txtEmail = document.getElementById('txt-email').value;
   let txtPassword = document.getElementById('txt-password').value;

   
   // 
   if (txtUser===''){
     document.getElementById('alert-txt-user').textContent="Debes ingresar un nombre"
     window.location.hash = '#/register'
   }else{
    document.getElementById('alert-txt-user').textContent=" "
   }

   if (txtEmail==='' || !validateEmail(txtEmail)){
    document.getElementById('alert-txt-email').textContent="Debes ingresar un email"
   }else{
    document.getElementById('alert-txt-email').textContent=" "
  }
  
  if ( !validateEmail(txtEmail)){
    document.getElementById('alert-txt-email').textContent="Debes ingresar un email valido"
   }else{
    document.getElementById('alert-txt-email').textContent=" "
  }


  
  if (txtPassword ===''){
    document.getElementById('alert-txt-password').textContent="Debes ingresar una contraseña"
  
  } else if (txtPassword.length <6){
    document.getElementById('alert-txt-password').textContent="Debes ingresar una contraseña de 6 caracteres"
  }
  else{
    document.getElementById('alert-txt-password').textContent=" "
  }

  if (txtUser==='' || txtEmail==='' || txtPassword==='' || txtPassword.length <6 ||  !validateEmail(txtEmail)){
    window.location.hash = '#/register';
  } else{
    registerUser(txtUser,txtEmail,txtPassword)
    themePreferences();
  }

 })
 
 
 
 
 
 //navbar
 // AL BAJAR 80 PX SE ADAPTA EL NAVBAR
  window.onscroll = function() {scrollFunction()};

 function scrollFunction() {
   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
     document.getElementById("navbar").style.padding = "10px 10px";
     
   } else {
     document.getElementById("navbar").style.padding = "15px 10px";
    
   }
 }   
 // FUNCION PARA LOGO
 function myFunction(x) {
   if (x.matches) { // If media query matches
     document.getElementById("logo").style.width = "10rem";
     document.body.style.background="";
   } else {
    document.getElementById("logo").style.width = "12rem";
    document.body.style.background="";
   }
 }
 
 var x = window.matchMedia("(max-width: 500px)")
 myFunction(x) // Call listener function at run time
 x.addListener(myFunction) // Attach listener function on state changes

}

export const userAlreadyRegistered = (errorCode) => {
  if(errorCode == 'auth/email-already-in-use'){
  document.getElementById('alert-txt-email').textContent='El correo ya ha sido registrado'
  }
}