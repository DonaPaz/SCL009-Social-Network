import { validateNewUser } from '../js/validator.js'

export const registerUser = (name, email, password) => {

  if (validateNewUser(name, email, password)) {
    alert("El usuario fue creado exitosamente");
    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, pass)
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
