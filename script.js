// Creating the overlay
var overlay = document.createElement("div");
overlay.className = "sd-overlay";

// Remove previous overlays
document.querySelectorAll(".sd-overlay").forEach((overlay) => {
  overlay.remove();
});

// Adds overlay
document.body.appendChild(overlay);

// Inserted text to overlay
var overlayText = "STOP ";
overlay.innerText = overlayText.repeat(1000);

// 2, 5, 20, 60
var timeouts = document.createElement("div");
timeouts.classList.add("button-container");

var twoMin = document.createElement("button");
twoMin.innerText = "2 min";
twoMin.classList.add("two-min");
var fiveMin = document.createElement("button");
fiveMin.innerText = "5 min";
fiveMin.classList.add("five-min");
var twentyMin = document.createElement("button");
twentyMin.innerText = "20 min";
twentyMin.classList.add("twenty-min");
var sixtyMin = document.createElement("button");
sixtyMin.innerText = "60 min";
sixtyMin.classList.add("sixty-min");

timeouts.appendChild(twoMin);
timeouts.appendChild(fiveMin);
timeouts.appendChild(twentyMin);
timeouts.appendChild(sixtyMin);

document.body.appendChild(timeouts);
