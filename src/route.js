//import todas las vistas

import { themeRegister } from './assets/views/themeRegister.js';
import { themeSignIn } from './assets/views/themeSignIn.js';
import { themeHome } from './assets/views/themeHome.js';
import { themePreferences } from './assets/views/themePreferences.js';
import { themeDashboard } from './assets/views/themeDashboard.js';
import { themeProfile } from './assets/views/themeProfile.js';

const changeRoute = (hash) => {
  if (hash === '#/register' || hash === '#/signin' || hash === '#/preferences' || hash === '#/profile' || hash === '#/dashboard' || hash === '#/home' || hash === '' || hash === '#/' || hash === '/#') {
    return showTheme(hash);
  }
  return showTheme(hash);
}

// segunda función showTheme(hash)

const showTheme = (hash) => {
  // #/about
  const router = hash.substring(2); // home about project
  const container = document.getElementById('content');
  container.innerHTML = '';

  if (router == ''){
    themeHome();
  }
  else if (router === 'register'){
    themeRegister();
  }
  else if (router === 'signin'){
    themeSignIn();
  }
  else if (router === 'preferences'){
    themePreferences();
  }
  else if (router === 'profile'){
    themeProfile();
  }
  else if (router === 'dashboard'){
    themeDashboard();
  }
  else if (router === 'home'){
    themeHome();
  }
  else {
    container.innerHTML = `<h1>Error 404</h1>`
  }
}

export const initRouter = () => {
  // cuando la ventana se carga saca el hash y se lo pasa a changeRoute
  window.addEventListener('load', changeRoute(window.location.hash));

  // si encuentra un cambio en el hash lo vuelve a sacar y pasar como parámetro a changeRoute
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      changeRoute(window.location.hash);
    }
  }
}