export default function menu() {
  const menuIcon = document.querySelector(".header__burger");
  const menuList = document.querySelector(".header__nav");

  function toggleMenu(menu) {
    menu.classList.toggle("header__nav_is-open");
    menuIcon.classList.toggle("header__burger_is-open");
    document.body.classList.toggle("lock");
  }

  menuIcon.addEventListener("click", () => toggleMenu(menuList));
}
