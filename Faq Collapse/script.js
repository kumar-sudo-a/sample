// - Bring in toggle buttons (querySelectorAll)
// - Loop through nodeList (forEach)
// - Add click event (addEventListener)
// - Toggle the active class on the parent node (.parentNode & classList.toggle())

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
    // In the above line, when the click event occurs, takes the toggle button and the parentNode and access the classList and call the toggle method and we want to toggle the active class. 
  });
});
