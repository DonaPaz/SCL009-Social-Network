// Function to show or hide user password when writing 
export const eye = () => {
  let eyeIcon = document.getElementById("eye_icon")
  let hiddenText = document.getElementById("txt-password")
  if (eyeIcon.getAttribute("class") == "fa-eye"){
    hiddenText.setAttribute("type", "text")
    eyeIcon.setAttribute("class", "fa-eye-slash")
  } 
  else {
    eyeIcon.setAttribute("class", "fa-eye")
    hiddenText.setAttribute("type", "password")
  }
}