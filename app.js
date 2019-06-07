import { firebaseInit } from './assets/js/firebaseInit.js';
import { initRouter } from './route.js';
import { observer } from './assets/js/auth.js';

const init = () => {
  firebaseInit();
  initRouter();
  observer()
  
}

window.addEventListener('load', init);

