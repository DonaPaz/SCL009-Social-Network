// Function to show or hide user password when writing 
export const eye = () => {
  let eyeIcon = document.getElementById("eye_icon")
  let hiddenText = document.getElementById("txt-password")
  if (eyeIcon.getAttribute("src") == "../img/eye.svg"){
    hiddenText.setAttribute("type", "text")
    eyeIcon.setAttribute("src", "../img/eye-closed.svg")
  } 
  else {
    eyeIcon.setAttribute("src", "../img/eye.svg")
    hiddenText.setAttribute("type", "password")
  }
}