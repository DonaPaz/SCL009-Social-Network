import { themePreferences } from './themePreferences.js';

export const themeRegister = () => {
  //Acá se muestra input nombre, contraseña, correo. botón enviar y botón ingresar con google
  document.getElementById('content').innerHTML = `<p>Regístrate</p>
                                              <button id="btn-preferences">Ir a Preferences</button>`

  document.getElementById('btn-preferences').addEventListener('click', () => {
    // llamar a la función que carga el theme project
    // cambiar el hash a #/project
    themePreferences();
    window.location.hash = '#/preferences';
  })
}