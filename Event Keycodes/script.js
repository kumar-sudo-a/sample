const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
  <div class="key">
  ${event.key === " " ? "Space" : event.key}
  <small>event.key</small>
</div>
<div class="key">
  ${event.keyCode}
  <small>event.keyCode</small>
</div>
<div class="key">
  ${event.code}
  <small>event.code</small>
</div>
  `;
});

// This can be used to build games.

// ``- For Dynamic values, We are including Space when space button is clicked on the keyboard.

// e.key can be used as a shorthand instead of event.key (Can be anything - e, event, eb common values used by others)

// ? : = If then, else

// ${event.keyCode} - Deprecated in VS code but will still work
