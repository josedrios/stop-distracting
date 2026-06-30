// Input Checker
function checkInput(min, input) {
  if (input.value === "Bye Bye Brain") {
    console.log(min + " minute timer has begun.");
    removeComponents();
    timerId = setTimeout(
      () => {
        implementComponents();
        console.log(min + " minutes are over.");
      },
      min * 60 * 1000,
    );
  } else {
    console.log("Incorrect input value to start timer.");
  }
}

// Remove previous components if needed
function removeComponents() {
  document.querySelectorAll(".sd-root").forEach((control) => {
    control.remove();
  });
}

function implementComponents() {
  removeComponents();
  // Creating Containers
  var root = document.createElement("div");
  root.classList.add("sd-root");

  var overlay = document.createElement("div");
  overlay.className = "sd-overlay";

  var controls = document.createElement("div");
  controls.classList.add("sd-control");

  document.body.appendChild(root);
  root.appendChild(overlay);
  root.appendChild(controls);

  // Populating overlay
  var overlayText = "STOP ";
  overlay.innerText = overlayText.repeat(1000);

  // Setting up controls
  var input = document.createElement("input");
  input.classList.add("sd-control__input");
  input.placeholder = "Type here...";
  controls.appendChild(input);

  var buttons = document.createElement("div");
  buttons.classList.add("sd-control__buttons");
  controls.appendChild(buttons);

  var twoMin = document.createElement("button");
  twoMin.innerText = "2 min";
  twoMin.classList.add("two-min");
  buttons.appendChild(twoMin);
  twoMin.addEventListener("click", () => checkInput(2, input));

  var fiveMin = document.createElement("button");
  fiveMin.innerText = "5 min";
  fiveMin.classList.add("five-min");
  buttons.appendChild(fiveMin);
  fiveMin.addEventListener("click", () => checkInput(5, input));

  var twentyMin = document.createElement("button");
  twentyMin.innerText = "20 min";
  twentyMin.classList.add("twenty-min");
  buttons.appendChild(twentyMin);
  twentyMin.addEventListener("click", () => checkInput(20, input));

  var sixtyMin = document.createElement("button");
  sixtyMin.innerText = "60 min";
  sixtyMin.classList.add("sixty-min");
  buttons.appendChild(sixtyMin);
  sixtyMin.addEventListener("click", () => checkInput(60, input));

  var note = document.createElement("p");
  note.classList.add("sd-control__note");
  note.innerText =
    'Type "Bye Bye Brain" in the input, then choose your break length.';
  controls.appendChild(note);
}

implementComponents();
