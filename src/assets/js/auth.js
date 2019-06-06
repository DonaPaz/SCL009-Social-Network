import { validateNewUser,validateSignInUser } from '../js/validator.js'
import { themeHome } from '../views/themeHome.js';

export const registerUser = (txtName, txtEmail, txtPassword) => {

  if (validateNewUser(txtName, txtEmail, txtPassword)) {
    alert("El usuario fue creado exitosamente");
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(txtEmail, txtPassword)
    .then(function(){
    verify()
    promise.catch(e => console.log(e.message));  
    
    })
  
  }


  function verify (){
    let user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
      console.log("enviando correo");
    // Email sent.
  }).catch(function(error) {
    console.log("error")
    // An error happened.
  });

 }


}
export const singInGoogle =() =>{
  var provider = new firebase.auth.GoogleAuthProvider();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
    window.location.hash = '#/preferences';
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}

export const signInUser = (txtEmail,txtPassword) => {
  if (validateSignInUser(txtEmail,txtPassword)){
    
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(txtEmail, txtPassword)
    .then(function(){
    
    promise.catch(e => console.log(e.message));  
    

  })
}}

export const observer = () => {

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('user ok')
      
    } else {
     
      window.onhashchange ="";
      themeHome();
      //console.log('not current user')// No user is signed in.
    }
  });

/*  let user = firebase.auth().currentUser;

  if (user) {
  // User is signed in.
  } else {
    window.location.hash = '#/home';
  }*/

}