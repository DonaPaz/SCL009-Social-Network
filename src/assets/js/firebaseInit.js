// INICIALIZA FIREBASE

export const firebaseInit = () => {

const firebaseConfig = {
  apiKey: "AIzaSyA_nw6Ca-i67DGP3X0RXHWOVLUZcxh_8go",
  authDomain: "mychingu-123.firebaseapp.com",
  databaseURL: "https://mychingu-123.firebaseio.com",
  projectId: "mychingu-123",
  storageBucket: "mychingu-123.appspot.com",
  messagingSenderId: "849463517687",
  appId: "1:849463517687:web:5cfb19a421bc1e0a"
};

firebase.initializeApp(firebaseConfig);

}