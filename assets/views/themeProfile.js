import { themeDashboard } from './themeDashboard.js';
import { logOut } from '../js/logout.js';

export const themeProfile = () => {
  
  //Acá va el muro
  document.getElementById('content').innerHTML = `<p>Tu muro</p>
                                              <button id="btn-dashboard">Volver al muro</button>
                                              <button id="btn-logout">Cerrar</button>`

  document.getElementById('btn-dashboard').addEventListener('click', () => {
    //Acá llama a muro
    themeDashboard();
    window.location.hash = '#/dashboard';
  })
  document.getElementById('btn-logout').addEventListener('click', () => {
    //Acá cerrar sesión del user
    logOut();
  })

  
}