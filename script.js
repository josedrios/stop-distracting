// Input Checker
function checkInput(min) {
  // if (input.value === "I Hate Myself") {
  console.log(document.getElementsByClassName("control-input").value);
  if (document.getElementsByClassName("control-input").value === "I") {
    removeComponents();
    console.log(min + "minute timer has begun.");
    setTimeout(
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
  document.querySelectorAll(".sd-overlay").forEach((overlay) => {
    overlay.remove();
  });
  document.querySelectorAll(".control-center").forEach((control) => {
    control.remove();
  });
}

function implementComponents() {
  // Creating the overlay
  var overlay = document.createElement("div");
  overlay.className = "sd-overlay";
  var overlayText = "STOP ";
  overlay.innerText = overlayText.repeat(1000);

  // Creating Control Center Components
  var controls = document.createElement("div");
  var timeouts = document.createElement("div");
  var twoMin = document.createElement("button");
  var fiveMin = document.createElement("button");
  var twentyMin = document.createElement("button");
  var sixtyMin = document.createElement("button");
  var input = document.createElement("input");
  input.placeholder = "Type here...";
  var note = document.createElement("p");

  // Adding classes/text to those components
  controls.classList.add("control-center");
  timeouts.classList.add("button-container");
  input.classList.add("control-input");
  note.classList.add("control-center-note");
  note.innerText =
    "NOTE: type `I Hate Myself` in the input section then choose your break length";
  twoMin.innerText = "2 min";
  twoMin.classList.add("two-min");
  fiveMin.innerText = "5 min";
  fiveMin.classList.add("five-min");
  twentyMin.innerText = "20 min";
  twentyMin.classList.add("twenty-min");
  sixtyMin.innerText = "60 min";
  sixtyMin.classList.add("sixty-min");

  // Add to DOM
  controls.appendChild(input);
  timeouts.appendChild(twoMin);
  timeouts.appendChild(fiveMin);
  timeouts.appendChild(twentyMin);
  timeouts.appendChild(sixtyMin);
  controls.appendChild(timeouts);
  controls.appendChild(note);
  document.body.appendChild(overlay);
  document.body.appendChild(controls);

  twoMin.addEventListener("click", () => checkInput(2));
  fiveMin.addEventListener("click", () => checkInput(5));
  twentyMin.addEventListener("click", () => checkInput(20));
  sixtyMin.addEventListener("click", () => checkInput(60));
}

removeComponents();
implementComponents();
