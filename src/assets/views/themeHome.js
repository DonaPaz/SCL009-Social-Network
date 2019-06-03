
import { themeRegister } from './themeRegister.js';
import { themeSignIn } from './themeSignIn.js';

export const themeHome = () => {
  //Acá se muestra botón registro y el de inicio sesión
  
  document.getElementById('navbar').innerHTML=`  <img src="./img/logo.png"  id="logo" alt="logo">
                                                 <a id="btn-signin">Iniciar sesión</a>`
  document.getElementById('content').innerHTML = `<h1>Encuentra amigos</h1>
                                     <div class=register-text>                                             
                                          <h5> Bienvenido a MyChingu donde podras compartir todo
                                                sobre tus Bias y hacer amigos </h5>
                                      </div>
                                              <button id="btn-register">Registrarse</button>
                                              
                                                 `
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
     document.body.style.background="#000000 url('./img/back_7.jpg') no-repeat 50% 100% fixed";
    } else {
    document.getElementById("logo").style.width = "12rem";
    document.body.style.background="#000000 url('./img/back_6.jpg') no-repeat 50% 50% fixed";
  }
 }
 
 var x = window.matchMedia("(max-width: 500px)")
 myFunction(x) // Call listener function at run time
 x.addListener(myFunction) // Attach listener function on state changes





  document.getElementById('btn-signin').addEventListener('click', () => {
    themeSignIn();
    window.location.hash = '#/signin';
  })
  document.getElementById('btn-register').addEventListener('click', () => {
    themeRegister();
    window.location.hash = '#/register';
  })
}