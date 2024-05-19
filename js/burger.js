function Burger() {
  const burger = document.querySelector("#burger");
  const menu = document.querySelector("#menu");
  const menuCloseBtn = document.querySelector("#menuCross");

  function openMenu() {
    burger.classList.toggle("active");
    menu.classList.toggle("hide");
    document.body.style.overflow = "hidden";
  }

  function closeMenu() {
    burger.classList.toggle("active");
    menu.classList.toggle("hide");
    document.body.style.overflow = "";
  }

  burger?.addEventListener("click", openMenu);
  menuCloseBtn?.addEventListener("click", closeMenu);

  menu?.addEventListener("click", function (e) {
    if (e.target === menu) {
      closeMenu();
    }
  });
}
