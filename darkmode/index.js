// ---- SVG Icons ---- //
function moonIcon() {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  path.setAttribute("d", "M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z");

  svg.setAttribute(
    "style",
    "height: 18px; width: 18px;display: inline-block;vertical-align: middle;margin"
  );
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke-width", "2px");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");

  svg.appendChild(path);
  return svg;
}

function sunIcon() {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const circle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );

  path.setAttribute(
    "d",
    "M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
  );

  circle.setAttribute("cx", "12");
  circle.setAttribute("cy", "12");
  circle.setAttribute("r", "5");

  svg.setAttribute(
    "style",
    "height: 18px; width: 18px;display: inline-block;vertical-align: middle;margin"
  );
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke-width", "2px");
  svg.setAttribute("stroke-linecap", "round");
  svg.setAttribute("stroke-linejoin", "round");

  svg.appendChild(circle);
  svg.appendChild(path);

  return svg;
}

// ---- Functions ---- //

function addThemeVariable() {
  const el = document.documentElement;
  el.setAttribute("data-theme", "light");
}

function loadDarkReader() {
  const script = document.createElement("script");
  script.src = `https://cdn.jsdelivr.net/npm/darkreader@4.9.17/darkreader.min.js`;
  script.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(script);
}

function addDarkModeToggle() {
  const el = document.createElement("div");
  el.id = "wirtzdan-dark-mode-toggle";
  el.onclick = () => {
    toggleDarkMode();
  };
  el.appendChild(sunIcon());
  const spacer = document.createElement("div");
  spacer.setAttribute("style", "flex: 0 0 4px");
  el.setAttribute(
    "style",
    "height: 24px; width: 24px; text-align: center; color: #5C7080; cursor: pointer"
  );

  document.querySelector(".roam-topbar .flex-h-box").appendChild(spacer);
  document.querySelector(".roam-topbar .flex-h-box").appendChild(el);
}

function toggleDarkMode() {
  const el = document.documentElement;
  const toggle = document.getElementById("wirtzdan-dark-mode-toggle");
  const theme = el.getAttribute("data-theme");
  const settings = window.roamdarkmode;

  if (theme === "light") {
    el.setAttribute("data-theme", "dark");
    toggle.innerHTML = "";
    toggle.appendChild(moonIcon());
    DarkReader.enable({ settings });
  } else {
    el.setAttribute("data-theme", "light");
    toggle.innerHTML = "";
    toggle.appendChild(sunIcon());
    DarkReader.disable();
  }
}
// ---- Initialise Extension---- //
loadDarkReader();
addThemeVariable();
addDarkModeToggle();
