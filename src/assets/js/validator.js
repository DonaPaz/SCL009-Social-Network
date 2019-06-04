//VALIDACIÓN REGISTRO NUEVO USUARIO NO ESTÉ VACÍO 
// VALIDACIÓN LARGO DE CLAVE

export const validateNewUser = (txtName, txtEmail, txtPassword) => {
  if (txtName === '' || txtEmail === '' || txtPassword === '') {
   	return false;
  }

  return true;
}

export const validatePassLength = (txtPassword) => {
  if (txtPassword.length < 6) {
    return false;
 }

 return true;
}


//VALIDACION EXPRESION REGULAR DE EMAIL
export const validateEmail = (txtEmail) => {
  
  let regEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  if ( !regEx.test(txtEmail) ){
    return false
  } 
  
  return true
}
    
