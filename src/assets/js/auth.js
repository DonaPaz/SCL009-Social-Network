export const auth = () =>{

    (function() {
      
        // Obtener elementos
        const txtUser = document.getElementById('txtUser');
        const txtEmail = document.getElementById('txtEmail');
        const txtPassword = document.getElementById('txtPassword');
        
        const btnLogin = document.getElementById('btnLogin');
        const btnSignUp = document.getElementById('btnSignUp');
        const btnLogout = document.getElementById('btnLogout');
      
        // LOGIN EVENT
        btnLogin.addEventListener('click', e => {
          //Obtener email y pass
          const email = txtEmail.value;
          const pass = txtPassword.value;
          const auth = firebase.auth();
          
          // LOGIN // PASS AND EMAIL ADDRESS 
          const promise = auth.signInWithEmailAndPassword(email, pass);
          promise.catch(e => console.log(e.message));   
        });
      
        // REGISTRER EVENT
        btnSignUp.addEventListener('click', e => {
          // Obtener email y pass
          // TODO: comprobar que el email sea real
          const userName = txtUser.value;
          const email = txtEmail.value;
          const pass = txtPassword.value;
          const auth = firebase.auth();
          
          // CREATE A NEW ACCOUNT // PASS AND EMAIL ADDRESS 
          const promise = auth.createUserWithEmailAndPassword(email, pass)
          .then(function(){
            verify()
    
            var user = firebase.auth().currentUser;
    
            user.updateProfile({
            displayName: userName
            }).then(function() {
            // Update successful.
            }).catch(function(error) {
            // An error happened.
            });
          
          })
         promise.catch(e => console.log(e.message));
         
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
    
    
        //SEND A USER VERIFICATION EMAIL
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
    
      } ());
    }