import { firebaseInit } from './assets/js/firebaseInit.js';
import { initRouter } from './route.js';
import { registerUser } from './assets/js/auth.js';

const init = () => {
  firebaseInit();
  initRouter();
  registerUser();
  //llamar al observador (función)
}

window.addEventListener('load', init);

