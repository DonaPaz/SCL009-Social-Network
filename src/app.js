import { firebaseInit } from './assets/js/firebaseInit.js';
import { initRouter } from './route.js';

const init = () => {
  firebaseInit();
  initRouter();
  //llamar al observador (función)
}

window.addEventListener('load', init);

