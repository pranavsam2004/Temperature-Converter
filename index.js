const LOOKUP_TABLE_UNIT = {
  c: "Celcius",
  f: "Fahrenheit",
  k: "Kelvin",
};

const VALID_UNIT = ["c", "f", "k"];

function processTemperatureData() {
  let unitTypeFrom = document
    .getElementById("unitTypeFrom")
    .value.toLowerCase();
  let unitTypeTo = document.getElementById("unitTypeTo").value.toLowerCase();
  let value = document.getElementById("value").value;

  if (VALID_UNIT.includes(unitTypeFrom) && VALID_UNIT.includes(unitTypeTo)) {
    if (unitTypeFrom == unitTypeTo) {
      alert("You can't input the same unit!");
      return;
    } else if (unitTypeFrom == "c" && unitTypeTo == "f") {
      output = (value * 9) / 5 + 32;
    } else if (unitTypeFrom == "f" && unitTypeTo == "c") {
      output = ((value - 32) * 5) / 9;
    } else if (unitTypeFrom == "c" && unitTypeTo == "k") {
      output = value + 273.15;
    } else if (unitTypeFrom == "k" && unitTypeTo == "c") {
      output = value - 273.15;
    } else if (unitTypeFrom == "f" && unitTypeTo == "k") {
      output = ((value - 32) * 5) / 9 + 273.15;
    } else if (unitTypeFrom == "k" && unitTypeTo == "f") {
      output = (value - 273.15) * 1.8 + 32;
    }
    alert(
      `${value} ${LOOKUP_TABLE_UNIT[unitTypeFrom]} is equal to ${Math.round(
        output
      )} ${LOOKUP_TABLE_UNIT[unitTypeTo]}.`
    );
  } else {
    alert("Invalid input types!");
  }
}
// by Pranav Samudrala