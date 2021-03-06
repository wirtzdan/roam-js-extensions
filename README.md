# Roam JS Extension

This is a collection of my JS Extensions for Roam Research.

## Extensions

### Darkmode

The darkmode extension adds a small toggle to the toolbar, which you can use to quickly switch Roam Research to a dark mode. Uses [Darkreader](darkreader.org/help/en/) under the hood.

**Script to copy:**

```javascript
// ---- VARIABLES ---- //
// Change these variables to adjust the appearance of the dark mode
// Tip: The default is 100, from there you can increase or decrease the value
window.roamdarkmode = {
  brightness: "130",
  contrast: "100",
  sepia: "0",
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
```

### How can I install a Roam Research extension?

1. Create yourself a new page called "roam/js"
2. Add a block with the content `{{[[roam/js]]}}`
3. Nest a code block under that block
4. Insert the script
5. Active the extension

## Having trouble?

Just write me directly on Twitter at [@wirtzdan](https://twitter.com/wirtzdan)
