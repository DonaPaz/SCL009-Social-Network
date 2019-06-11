import { validateNewUser,validateSignInUser } from '../js/validator.js'
import { themeHome } from '../views/themeHome.js';
import { userNotRegistered } from '../views/themeSignIn.js';
import { userAlreadyRegistered } from '../views/themeRegister.js';
import { themeDashboard, toConect } from '../views/themeDashboard.js';

//Function to save user info
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
        userId: firebase.auth().currentUser.uid
      })
      .then(function(docRef) {
          console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
          console.error("Error adding document: ", error);
      }); 
    });
    promise.catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      userAlreadyRegistered(errorCode);
    });
  }
}
//Function to send email to verify account 
function verify () {
  let user = firebase.auth().currentUser;
  user.sendEmailVerification().then(function() {
    console.log("enviando correo");
    // Email sent.
  }).catch(function(error) {
    console.log("error");
    // An error happened.
  });
};
//Function to sign in with google account
export const singInGoogle = () => {
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
};
//Function to signIn with an existing account
export const signInUser = (txtEmail,txtPassword) => {
  if (validateSignInUser(txtEmail,txtPassword)){
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(txtEmail, txtPassword)
    .then(function(){
      let user = firebase.auth().currentUser;
      if (user) {
        themeDashboard();
        window.location.hash = '#/dashboard';
      } 
      else {
        window.location.hash = '#/signin';
      };
    })
    promise.catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      userNotRegistered(errorCode);
    });
  };
};
//Fucntion to get el currentUser name from Firestore
export const getUser = (email)=> {
  var db = firebase.firestore();
  db.collection("users").where("email", "==", email)
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log("esta funcion obtiene el nombre del current user desde nuestra base de datos :3")
      firebase.auth().currentUser.email = doc.data().name;
    });
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
  });
};
//Function to save a post in Firestore
export const savePost = () => {
  var db = firebase.firestore();
  // Add a new document with a generated id.
  db.collection("posts").add({
  post: document.getElementById('user-txt').value,
  userId: firebase.auth().currentUser.uid,
})
.then(function(docRef) {
  console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
  console.error("Error adding document: ", error);
});
};
//Function to get the posts from Firestore
export const getPost = () => {
  var db = firebase.firestore()
    db.collection("posts").get().then(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id);
        //console.log(doc.data())
        toConect(doc)
    });
});

  /* var db = firebase.firestore();
  db.collection("posts").where("userId", "==", firebase.auth().currentUser.uid)
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      //console.log(doc.id)
      //console.log(doc.data())
      return doc.id
    });
    prueba(querySnapshot)
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
  }); */

};
//Function to know if there's an user loggedIn
export const observer = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('user ok');
    }
    else { 
      window.onhashchange ="";
      themeHome();
      //console.log('not current user')// No user is signed in.
    }
  });
};