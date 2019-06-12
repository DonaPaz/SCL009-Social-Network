import { themeDashboard } from './themeDashboard.js';
//import { observer } from '../js/auth.js';

export const themePreferences = () => {
 
  //observer();
  //Acá se muestra input nombre, contraseña, correo. botón enviar y botón ingresar con google
  document.body.style.background="";
  document.getElementById('navbar').innerHTML=`  <img src="./img/logo.png"  id="logo" alt="logo">`
  document.getElementById('content').innerHTML = `
  <div id="title-preferences">
  <p>Elige a tus favoritos</p>
      </div>                      
      <div id=companies>  
      <p>Compañias</p>
      <img src="./img/sm_btn.png"  id="sm" alt="logo">
      <img src="./img/yg_btn.png"  id="yg" alt="logo">
      <img src="./img/jyp_btn.png"  id="jyp" alt="logo">
      </div>
  <div id="artist">
  <p>Grupos</p>
  <img src="./img/exo_btn.png"  id="sm" alt="logo">
  <img src="./img/bts_btn.png"  id="sm" alt="logo">
  </div>

  <button id="btn-dashboard">Ir al muro</button>`

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
     document.body.style.background="#000000 url('./img/back_8.jpg') no-repeat 50% 100% fixed";
    } else {
    document.getElementById("logo").style.width = "12rem";
    document.body.style.background="#000000 url('./img/back_6.jpg') no-repeat 50% 50% fixed";
  }
 }
 
 var x = window.matchMedia("(max-width: 500px)")
 myFunction(x) // Call listener function at run time
 x.addListener(myFunction) // Attach listener function on state changes


  document.getElementById('btn-dashboard').addEventListener('click', () => {
    // llamar a la función que carga el theme project
    // cambiar el hash a #/project
  
    themeDashboard();
    window.location.hash = '#/dashboard';
  })
}