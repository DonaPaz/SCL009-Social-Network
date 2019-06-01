import { themeProfile } from './themeProfile.js';

export const themeDashboard = () => {
  //Acá se muestra input nombre, contraseña, correo. botón enviar y botón ingresar con google
  document.getElementById('content').innerHTML = `<p>Tu muro</p>
                                              <button id="btn-profile">Ir al perfil</button>`

  document.getElementById('btn-profile').addEventListener('click', () => {
    // llamar a la función que carga el theme project
    // cambiar el hash a #/project
    themeProfile();
    window.location.hash = '#/profile';
  })
}