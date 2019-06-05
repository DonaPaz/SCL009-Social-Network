import { validateNewUser,validateSignInUser } from '../js/validator.js'
//import { themeRegister } from '../js/validator.js'
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
  //themeRegister();
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
  let user = firebase.auth().currentUser;

  if (user != null) {
    // User is signed in.
    console.log(user);
    // console.log("usuario logueado")
    // var displayName = user.displayName;
    // var email = user.email;
    // var emailVerified = user.emailVerified;
    // var photoURL = user.photoURL;
    // var isAnonymous = user.isAnonymous;
    // var uid = user.uid;
    // var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
    console.log("no esta registrado");
    themeHome();
    window.location.hash = '#/home';
  }
}

/*
export const observer =() =>{
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log(user);
      console.log("usuario logueado")
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
      console.log("no esta registrado");
      window.location.hash = '#/home';
    }
  });
*/



/*export const auth = () =>{
 
  (function() {

    // Obtener elementos

    // LOGIN EVENT
    /*btnLogin.addEventListener('click', e => {
      //Obtener email y pass
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();

      // LOGIN // PASS AND EMAIL ADDRESS 
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));   
    });

    // REGISTRER EVENT
     

        var user = firebase.auth().currentUser;

        user.updateProfile({
        displayName: userName
        }).then(function() {
        // Update successful.
        }).catch(function(error) {
        // An error happened.
        });

      })
     

    });


    btnLogout.addEventListener('click', e => {
      firebase.auth().signOut();
    });


    // Añadir un listener en tiempo real
     firebase.auth().onAuthStateChanged( firebaseUser => {
      if(firebaseUser) {
        console.log(firebaseUser);
        btnLogout.style.display='inline';

        document.getElementById("show-msg").innerHTML = firebaseUser.displayName;

      } else {
        console.log('no logueado');
        btnLogout.style.display='none';
        document.getElementById('show-msg').innerHTML = ' ' 
      }    
    });
*/
