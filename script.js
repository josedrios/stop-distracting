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
