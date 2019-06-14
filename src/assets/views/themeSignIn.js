//import { themeDashboard } from './themeDashboard.js';
import { signInUser, singInGoogle } from '../js/auth.js';
import { validateEmail} from '../js/validator.js';
import { eye } from '../js/lib.js';

//Creating template to login
export const themeSignIn = () => {
  document.body.style.background = "";
  document.getElementById('navbar').innerHTML= `<img src="./img/logo.png" id="logo" alt="logo">`

  document.getElementById('content').innerHTML = `<h2>Iniciar sesión</h2>
                                                  <input id="txt-email" type="email" placeholder="email">
                                                  <p id="alert-txt-email"></p>
                                                  <input id="txt-password" type="password" placeholder="contraseña"><button id="eye_btn" type="button"><span id="span-eye" value="eye-opened"><i id="eye_icon" class="fas fa-eye"></i></span></button><br>
                                                  <p id="alert-txt-password"></p>
                                                  <button id="btn-init-google" class="btn btn-secondary">Iniciar con Google</button><br>
                                                  <button id="btn-enter">Entrar</button>`
  
  document.getElementById('eye_btn').addEventListener('click', () => {
    eye();
  });
  document.getElementById('btn-init-google').addEventListener('click',()=>{
    singInGoogle();
  });
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

  //Event click on send button
  document.getElementById('btn-enter').addEventListener('click', () => { 
    let txtEmail = document.getElementById('txt-email').value;
    let txtPassword = document.getElementById('txt-password').value;

    if (txtEmail === '' || !validateEmail(txtEmail)) {
    document.getElementById('alert-txt-email').textContent="Debes ingresar un email";
    } else {
      document.getElementById('alert-txt-email').textContent=" ";
    };
    if (txtEmail === '' || !validateEmail(txtEmail)) {
      document.getElementById('alert-txt-email').textContent="Debes ingresar un email";
    } else {
      document.getElementById('alert-txt-email').textContent=" ";
    };
    if (txtPassword === '') {
    document.getElementById('alert-txt-password').textContent = "Debes ingresar una contraseña";             
    } else if (txtPassword.length <6) {
      document.getElementById('alert-txt-password').textContent = "Debes ingresar una contraseña de 6 caracteres";
    } else {
      document.getElementById('alert-txt-password').textContent = " ";
    };          
    if (txtEmail ==='' || txtPassword ==='' || txtPassword.length <6 || !validateEmail(txtEmail)) {
      window.location.hash = '#/signin';
    } else {
      signInUser(txtEmail,txtPassword);
    };
  });
};

//Alerts to invalid email or wrong password
export const userNotRegistered = (errorCode) => {
  if (errorCode = 'auth/invalid-email') {
  document.getElementById('alert-txt-email').textContent = 'El correo no está registrado';
  }
  if (errorCode = 'auth/wrong-password') {
    document.getElementById('alert-txt-password').textContent = 'La contraseña es incorrecta';
  };
};