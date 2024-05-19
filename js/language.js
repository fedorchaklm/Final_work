function Language() {
  let lang = "en";
  const langItems = document.querySelectorAll(".language__item");

  const setCurrentLang = () => {
    langItems.forEach((item) => {
      item.classList.toggle("current", item.id === lang);
    });
  };

  setCurrentLang();

  langItems.forEach((item) => {
    item.addEventListener("click", () => {
      lang = item.id;
      setCurrentLang();
    });
  });
}