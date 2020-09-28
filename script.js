// ---- VARIABLES ---- //
// Changes this variables to adjust the appearance of the dark mode
// Tip: The default is 100, from there you can increase or decrease the value
window.darkmode = {
  brightness: "100",
  contrast: "90",
  sepia: "10",
};

// ---- LOAD MAIN SCRIPT ---- //
// Link to the repository:
const script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://github.com/wirtzdan/";
script.async = true;
document.getElementsByTagName("head")[0].appendChild(script);
