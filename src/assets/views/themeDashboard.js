import { themeProfile } from './themeProfile.js';
import { logOut } from '../js/logout.js';
import { themePreferences } from './themePreferences.js';
import { savePost, getPost } from '../js/auth.js'

export const toConect = (doc) => {
  //console.log(doc.data())
  let postsContainer = document.getElementById('postsContainer');
  let postContainer = document.createElement('div');
  postContainer.classList.add('postContainer');
  let postTxt = document.createElement('p');
  postTxt.innerHTML = doc.data().post;
  postContainer.appendChild(postTxt);
  postsContainer.appendChild(postContainer);
}
//Creating daashboard template. Here the user should be able to write a post and see it
export const themeDashboard = () => {
  document.body.style.background="#EA77A6";
  document.getElementById('navbar').innerHTML = `<img src="./img/logo.png"  id="logo" alt="logo">
                                                <div class="dropdown">
                                                  <button id="btn-drop" class="dropbtn">Perfil</button>
                                                  <div id="myDropdown" class="dropdown-content">
                                                    <a id="btn-logout">Cerrar sesión</a>
                                                    <a id="btn-profile">Perfil</a>
                                                    <a id="btn-preference">favoritos</a>
                                                  </div>
                                                </div>              
  `
  document.getElementById('content').innerHTML = `<p>Tu muro</p>
                                                  <div id="post-header">
                                                    <p>Nombre user</p>
                                                  </div>
                                                  <div id="post-content">
                                                    <textarea id="user-txt" rows="4" cols="40" placeholder="Escribe aquí"></textarea>
                                                  </div>
                                                  <button id="send-btn">Enviar</button>
                                                  <h6>Todos los posts</h6>
                                                  <div id="postsContainer"></div>
                                                  <button id="btn-profile">Ir al perfil</button>`

  document.getElementById('send-btn').addEventListener('click', () => {
    savePost();
    getPost();
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
 
  document.getElementById('btn-drop').addEventListener('click', () => {
    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById('btn-logout').addEventListener('click', () => {
      //Acá cerrar sesión del user
      logOut();
    })
    document.getElementById('btn-preference').addEventListener('click', () => {
      //Acá cerrar sesión del user
      themePreferences();
      window.location.hash = '#/preferences';

    })
    document.getElementById('btn-profile').addEventListener('click', () => {
      //Acá cerrar sesión del user
      themeProfile();
    window.location.hash = '#/profile';

    })
 
  })
 
 
 



}
