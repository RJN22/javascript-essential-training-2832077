/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import { Backpack, WorkoutBag } from "./Backpack.js";

const OgioBag = new Backpack("Ogio Bag", 10, "Black", 20, 10, 10, false);

const AdidasBag = new WorkoutBag(
  "Adidas Bag",
  30,
  "Black",
  4,
  0,
  0,
  true,
  false
);

const markup = (AdidasBag) => {
  return `
        <div>
          <h3>${AdidasBag.name}</h3>
          <ul>
            <li>Color: ${AdidasBag.color}</li>
            <li>Shoes in: ${AdidasBag.shoesIn}</li>
          </ul>
        </div>
      `;
};

const main = document.createElement("main");
document.body.appendChild(main);

// function to update the HTML each time a variable is changed
const updateDisplay = () => {
  main.innerHTML = markup(AdidasBag);
};

updateDisplay();
