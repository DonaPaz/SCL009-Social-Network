import { themeProfile } from './themeProfile.js';
import { logOut } from '../js/logout.js';
import { themePreferences } from './themePreferences.js';
import { savePost, getPost, observer, deletePost } from '../js/auth.js';
import { validateNewPost } from '../js/validator.js';

export const toConect = (doc) => {
  let postsContainer = document.getElementById('posts-container');
  let titleContainer = document.createElement('div');
  titleContainer.classList.add('title-container');
  let userName = document.createElement('p');
  userName.classList.add('user-name');
  userName.innerHTML = "Post";
  let deleteBtn = document.createElement('button');
  let btnlike = document.createElement('button');
  let textCounter =document.createElement('span');
  deleteBtn.classList.add('delete-btns')
  btnlike.classList.add('like-btns')
 
  //Saving post id as the btn id
 // textCounter.setAttribute('id',counter);
  
  deleteBtn.setAttribute('id', doc.id);
  deleteBtn.innerHTML = '<i id="cross-icon" class="fas fa-times-circle"></i>';
  
  let postContainer = document.createElement('div');
  postContainer.classList.add('postContainer');
  let postTxt = document.createElement('p');
  postTxt.classList.add('post-txt')
  postTxt.innerHTML = doc.data().post;
  postContainer.appendChild(postTxt);
  titleContainer.appendChild(userName);
  titleContainer.appendChild(deleteBtn);
  titleContainer.appendChild(btnlike);
  
  btnlike.appendChild(textCounter);
  postsContainer.appendChild(titleContainer);
  postsContainer.appendChild(postContainer);
  
  //function to delete a post
  deleteBtn.addEventListener('click', () => {
    //Calling function deletePost in auth
    deletePost(doc.id);
    alert('Mensaje borrado!');
    postsContainer.innerHTML = "";
    getPost()
  });

   //btn like
};


//Creating daashboard template. Here the user should be able to write a post and see it
export const themeDashboard = () => {
  
  document.body.style.background="#EA77A6";
  document.getElementById('navbar').innerHTML = `<img src="./img/logo.png"  id="logo" alt="logo">
                                                <a id="btn-logout">Cerrar sesión</a>
                                                <a id="btn-preference">Preferencias</a>
                                                <a id="btn-profile">perfil</a>
                                                <a href="javascript:void(0);" id="icon" class="icon" >
                                                  <i class="fa fa-bars"></i>
                                                </a>       
                                                `

  document.getElementById('content').innerHTML = `<h3 id="dashboard-title">Tu muro</h3>

                                                  <div id="post-header">
                                                    <p id="post-title-txt">¡Escribe un post!</p>
                                                  </div>
                                                  <div id="post-content">
                                                    <textarea id="user-txt" maxlength="50" rows="4" cols="40" placeholder="Escribe algo sobre tu Bias"></textarea>
                                                  </div>
                                                  <div><p id="user-txt-alert"></p></div>
                                                  <button id="send-btn" align=right>Enviar</button>
                                                  <h6>Todos los posts</h6>
                                                  <div id="posts-container"></div>
                                                  <button id="btn-profile">Ir al perfil</button>`

  // Se le entrega al observer la función que debe ejecutar 
  // después de verificar el user 
  observer(getPost);

  

  document.getElementById('send-btn').addEventListener('click', () => {

  let userTxt = document.getElementById('user-txt').value;
  let userTxtAlert = document.getElementById('user-txt-alert'); 
  if (userTxt === '' || userTxt === ' ' || !validateNewPost) {
    userTxtAlert.innerHTML = "Debes ingresar un comentario"
  }
  else {
    savePost();
    document.getElementById("posts-container").innerHTML = "";
    getPost();
  }

  })
  //BOTONES
  document.getElementById('btn-logout').addEventListener('click', () => {
    let x = document.getElementById("navbar");
    if (x.className === "responsive") {
      x.className = "top";
    } else {
      x.className = "responsive";
    }
    //Acá cerrar sesión del user
    logOut();
  })
  document.getElementById('btn-profile').addEventListener('click', () => {
    // llamar a la función que carga el theme project
    // cambiar el hash a #/project
    let x = document.getElementById("navbar");
    if (x.className === "responsive") {
      x.className = "top";
    } else {
      x.className = "responsive";
    }
    themeProfile();
    window.location.hash = '#/profile';
  }) 
  document.getElementById('btn-preference').addEventListener('click', () => {
    //Acá cerrar sesión del user
    let x = document.getElementById("navbar");
    if (x.className === "responsive") {
      x.className = "top";
    } else {
      x.className = "responsive";
    }
    themePreferences();
    window.location.hash = '#/preferences';
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
    document.body.style.background="#EA77A6";
    } else {
      document.getElementById("logo").style.width = "12rem";
      document.body.style.background="#EA77A6";
    }
  }

  var x = window.matchMedia("(max-width: 500px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

  document.getElementById("icon").addEventListener('click',() => {
    let x = document.getElementById("navbar");
    if (x.className === "top") {
      x.className = "responsive";
    } else {
      x.className = "top";
    }
  })
}