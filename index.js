const { quickSort } = require('./quick_sort')

let numbers = [10, 5, 6, 3, 2, 8, 9, 4, 7, 1]

quickSort(numbers)

document.getElementById("app").innerHTML = `
      <h1>Data Structures in JS using POI and Jest</h1>
      <h2>Quick Sort Example</h2>
      <p> Open developer console </p>
    `
