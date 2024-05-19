function Popup() {
  const linkPopup = document.querySelector("#linkPopup");
  const popup = document.querySelector("#popup");
  const popupCloseBtn = document.querySelector("#cross");

  function openPopup() {
    popup.classList.toggle("hide");
    document.body.style.overflow = "hidden";
  }

  function closePopup() {
    popup.classList.toggle("hide");
    document.body.style.overflow = "";
  }

  linkPopup?.addEventListener("click", openPopup);
  popupCloseBtn?.addEventListener("click", closePopup);

  popup?.addEventListener("click", function (e) {
    if (e.target === popup) {
      closePopup();
    }
  });
}
