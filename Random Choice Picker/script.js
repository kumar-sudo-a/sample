const tagsEl = document.getElementById("tags");
const textarea = document.getElementById("textarea");

textarea.focus(); //focus method will automatically place the cursor in the text area.

textarea.addEventListener("keyup", (e) => {
  //keyup will fireoff when we press and let go a button on the keyboard.
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

function createTags(input) {
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());
  // split function is used here to make the inputs into an Array.
  // trim is used to remove the white spaces.
  // Also there is a condition "not be a white space".

  tagsEl.innerHTML = ""; // to clear the tags, not letting it pile up.

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.innerText = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30; // To run 30 times

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    // To highlight and unhighlight evey 100ms
    if (randomTag !== undefined) {
      highlightTag(randomTag);

      setTimeout(() => {
        unHighlightTag(randomTag);
      }, 100);
    }
  }, 100);


  // To Stop the highlighting and unhighlighting andlanding on randomly picked tag.
  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();

      highlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
  tag.classList.add("highlight");
}

function unHighlightTag(tag) {
  tag.classList.remove("highlight");
}
