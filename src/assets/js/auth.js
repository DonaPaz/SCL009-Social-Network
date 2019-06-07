import { validateNewUser,validateSignInUser } from '../js/validator.js'
import { themeHome } from '../views/themeHome.js';
import { userNotRegistered } from '../views/themeSignIn.js';
import { themeDashboard } from '../views/themeDashboard.js';


export const registerUser = (txtName, txtEmail, txtPassword) => {

  if (validateNewUser(txtName, txtEmail, txtPassword)) {
    alert("El usuario fue creado exitosamente");
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(txtEmail, txtPassword)
    .then(function(){
    verify()
    var db = firebase.firestore();
    db.collection("users").add({
      name: txtName,
      email: txtEmail,
      password:txtPassword,
      
  })
  .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
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
  let provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    
    themeDashboard()
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
      //themeDashboard()
      //window.location.hash ='#dashboard'

      let user = firebase.auth().currentUser;

      if (user) {
       themeDashboard();
        window.location.hash = '#/dashboard';
      } else {
        window.location.hash = '#/signin';
      }

   
    
    })
    promise.catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;    
      
     userNotRegistered(errorCode)
      
    });

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