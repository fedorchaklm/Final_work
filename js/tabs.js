function Tabs() {
  const tabsItems = document.querySelectorAll(".tabs__item");
  const tabsContents = document.querySelectorAll(".tabs__content");
  const tabsList = document.querySelector(".tabs__list");

  function showItem(i) {
    tabsItems[i].classList.add("active");
    tabsContents[i].classList.remove("hide");
  }

  function hideItem(i) {
    tabsItems[i].classList.remove("active");
    tabsContents[i].classList.add("hide");
  }

  tabsItems.forEach((_, i) => {
    if (i === 0) {
      showItem(i);
    } else {
      hideItem(i);
    }
  });

  tabsList?.addEventListener("click", (event) => {
    const target = event.target;

    if (target && target.classList.contains("tabs__item")) {
      tabsItems.forEach((item, i) => {
        if (target == item) {
          showItem(i);
        } else {
          hideItem(i);
        }
      });
    }
  });
}