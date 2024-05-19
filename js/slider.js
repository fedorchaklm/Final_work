function Slider(itemsSelector, contentsSelector) {
  const teamItems = document.querySelectorAll(itemsSelector);
  const teamContents = document.querySelectorAll(contentsSelector);

  let currentItem = 0;

  function showItem(i) {
    teamItems[i].classList.add("active");
    teamContents[i].classList.remove("hide");
  }

  function hideItem(i) {
    teamItems[i].classList.remove("active");
    teamContents[i].classList.add("hide");
  }

  function updateItemsVisibility() {
    teamItems.forEach((_, i) => {
      if (i === currentItem) {
        showItem(i);
      } else {
        hideItem(i);
      }
    });
  }

  teamItems.forEach((item, i) => {
    item.addEventListener("click", () => {
      currentItem = i;
      updateItemsVisibility();
    });
  });

  updateItemsVisibility();
}
