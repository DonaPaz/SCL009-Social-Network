// Function to show or hide user password when writing 
export const eye = () => {
  let spanEye = document.getElementById("span-eye")
  let hiddenText = document.getElementById("txt-password")
  if (spanEye.getAttribute("value") == "eye-opened"){
    spanEye.innerHTML = '<i id="eye_icon" class="fas fa-eye-slash"></i>'
    spanEye.setAttribute("value", "eye-closed")
    hiddenText.setAttribute("type", "text")
  }
  else {
    spanEye.innerHTML = '<i id="eye_icon" class="fas fa-eye"></i>'
    spanEye.setAttribute("value", "eye-opened")
    hiddenText.setAttribute("type", "password")
  }
}