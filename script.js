var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

var arr2 = getPositives(arr);

function getPositives(arr) {
  return arr.filter((number) => number >= 0);
}

console.log(arr2);
