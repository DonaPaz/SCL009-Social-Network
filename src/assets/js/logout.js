import { themeHome } from '../views/themeHome.js';

export const logOut = () => {
	firebase.auth().signOut()
  .then(function() {
  	themeHome();
  	window.location.hash = '#/home'; 
  })
  .catch(function(error) {
    if (error) throw error;
  });
}