//VALIDACIÓN REGISTRO NUEVO USUARIO NO ESTÉ VACÍO 
// VALIDACIÓN LARGO DE CLAVE

export const validateNewUser = (name, email, password) => {

    if (name === '' || email === '' || password === '') {
         return false;
    }
  
      return true;
  
  }
  
  export const passwordLength = (password) => {
      if (password.length < 6) {
          return false;
      }
      return true;
  }
  
  
  //VALIDACION EXPRESION REGULAR DE EMAIL
  export const validateEmail = (email) => {
      let regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if ( !regEx.test(email) ){
      return false
      } 
      return true
  }