function Splash() {
  const splashBtn = document.querySelector(".splash__btn");
  const tabs = document.querySelector(".tabs");

  splashBtn?.addEventListener("click", () => {
    tabs.classList.toggle("close");
  });
}
