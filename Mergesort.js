const node = require("prop-types");

let input = [5, 2, 4, 6, 1, 3, 5, 3];

function mergesort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergesort(left), mergesort(right));
}

function merge(left, right) {
  let resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArr.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArr.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  return resultArr
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

console.log(mergesort(input));
