var buttonMenu = document.getElementById("buttonMenu")
var menu = document.getElementById("menu")
buttonMenu.addEventListener('click', toggleMenu)

function toggleMenu() {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active')
  } else {
    menu.classList.add('is-active')
  }
}
