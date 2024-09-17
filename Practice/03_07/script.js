/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const cup = {
  name: "Cafe 47 Cup",
  isFull: false,
  isEmpty: !this.isFull,
  lidOpen: false,
  lidClosed: !this.lidOpen,

  printState: function () {
    if (cup.isFull) {
      console.log("the cup is full");
    } else {
      console.log("the cup is not full");
    }

    if (cup.lidOpen) {
      console.log("the lid is open");
    } else {
      console.log("the cup is closed");
    }
  },

  toggleFull: function () {
    this.isFull = this.isEmpty;
    this.isEmpty = !this.isEmpty;
    updateDisplay();
  },

  toggleLid: function () {
    this.lidOpen = this.lidClosed;
    this.lidClosed = !this.lidClosed;
    updateDisplay();
  },
};

const markup = (cup) => {
  return `
    <div>
      <h3>${cup.name}</h3>
      <ul>
        <li>Is Full: ${cup.isFull}</li>
        <li>Lid Open: ${cup.lidOpen}</li>
      </ul>
    </div>
  `;
};

const main = document.createElement("main");
document.body.appendChild(main);

// function to update the HTML each time a variable is changed
const updateDisplay = () => {
  main.innerHTML = markup(cup);
};

updateDisplay();
