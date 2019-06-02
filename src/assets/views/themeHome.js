
import { themeRegister } from './themeRegister.js';
import { themeSignIn } from './themeSignIn.js';

export const themeHome = () => {
  //Acá se muestra botón registro y el de inicio sesión
  document.getElementById('content').innerHTML = `<p>Bienvenido</p>
                                              <button id="btn-signin">Iniciar sesión</button>
                                              <button id="btn-register">Registrarse</button>`


  document.getElementById('btn-signin').addEventListener('click', () => {
    themeSignIn();
    window.location.hash = '#/signin';
  })
  document.getElementById('btn-register').addEventListener('click', () => {
    themeRegister();
    window.location.hash = '#/register';
  })
}