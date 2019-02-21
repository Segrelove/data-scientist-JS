let floor = prompt("Hola, combien d'étage veux-tu?");


function pyramid() {
  for(let count = 1; count <= floor; count++) {
    console.log(" ".repeat(floor-count) + "#".repeat(count));
  }
}

pyramid();