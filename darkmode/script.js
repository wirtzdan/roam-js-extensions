// ---- VARIABLES ---- //
// Changes this variables to adjust the appearance of the dark mode
// Tip: The default is 100, from there you can increase or decrease the value
window.roamdarkmode = {
  brightness: "100",
  contrast: "90",
  sepia: "10",
};

// ---- LOAD MAIN SCRIPT ---- //
// Link to the repository: https://github.com/wirtzdan/roam-js-extensions
const script = document.createElement("script");
script.type = "text/javascript";
script.src =
  "https://cdn.jsdelivr.net/gh/wirtzdan/roam-js-extensions@master/darkmode/index.js";
script.async = true;
document.getElementsByTagName("head")[0].appendChild(script);

// ---- QUESTIONS ---- //
// For questions or feedback reach out to me on Twitter @wirtzdan
