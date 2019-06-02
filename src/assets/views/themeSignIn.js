import { themeDashboard } from './themeDashboard.js';


export const themeSignIn = () => {
  //Acá se muestra input correo, input contraseña, botón ingresar y botón ingresar con google
  document.getElementById('content').innerHTML = `<p>Inicia sesión</p>
                                              <button id="btn-enter">Entrar</button>`
                            
  document.getElementById('btn-enter').addEventListener('click', () => {
    themeDashboard();
    window.location.hash = '#/dashboard';
  })
}