import { firebaseInit } from './assets/js/firebaseInit.js';
import { initRouter } from './route.js';
import { auth } from './assets/js/auth.js';

const init = () => {
  firebaseInit();
  initRouter();
  auth();
}

window.addEventListener('load', init);

