/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

function baseColor(hue, saturation, lightness) {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

const gridContainer = document.querySelector(".grid");
const baseHue = 0;

gridContainer.addEventListener("mouseenter", function () {
  this.style.outline = `6px solid ${baseColor(239 - baseHue, 100, 50)}`;
});

gridContainer.addEventListener("mouseleave", function () {
  this.style.outline = "";
});

const squares = document.querySelectorAll(".cell");
const totalSquares = squares.length;

squares.forEach((element, index) => {
  const lightness = Math.floor(75 * (1 - index / totalSquares));
  const saturation = Math.floor(240 * (1 - index / totalSquares));

  element.addEventListener("mouseenter", function () {
    this.style.outline = `6px solid ${baseColor(
      baseHue,
      saturation,
      lightness
    )}`;
  });

  element.addEventListener("mouseleave", function () {
    // this.style.outline = "";
  });
});
