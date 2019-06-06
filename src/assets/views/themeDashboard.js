import { themeProfile } from './themeProfile.js';
//


export const themeDashboard = () => {
 
  //observer() 
  //Acá se muestra input nombre, contraseña, correo. botón enviar y botón ingresar con google
  document.body.style.background="#EA77A6";
  document.getElementById('navbar').innerHTML=`  <img src="./img/logo.png"  id="logo" alt="logo">
                                                    
  `
  document.getElementById('content').innerHTML = `<p>Tu muro</p>
                                              <button id="btn-profile">Ir al perfil</button>`

 
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
   } else {
    document.getElementById("logo").style.width = "12rem";
   }
 }
 
 var x = window.matchMedia("(max-width: 500px)")
 myFunction(x) // Call listener function at run time
 x.addListener(myFunction) // Attach listener function on state changes

 
 
document.getElementById('btn-profile').addEventListener('click', () => {
    // llamar a la función que carga el theme project
    // cambiar el hash a #/project
    themeProfile();
    window.location.hash = '#/profile';
  })

}
