import { themeDashboard } from './themeDashboard.js';

export const themePreferences = () => {
  //Acá se muestra input nombre, contraseña, correo. botón enviar y botón ingresar con google
  document.getElementById('content').innerHTML = `<p>Elige tus preferencias</p>
                                              <button id="btn-dashboard">Ir al muro</button>`

  document.getElementById('btn-dashboard').addEventListener('click', () => {
    // llamar a la función que carga el theme project
    // cambiar el hash a #/project
    themeDashboard();
    window.location.hash = '#/dashboard';
  })
}