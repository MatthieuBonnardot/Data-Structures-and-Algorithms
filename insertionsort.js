const node = require("prop-types");

let input = [5, 2, 4, 6, 1, 3];
let key = 0;

function insertionSort(A) {
  for (j = 1; j < A.length; j++) // n operations -> constant n
  {
    key = A[j]; // n - 1 operations
    i = j - 1; // n - 1 operations

    while (i >= 0 && A[i] > key) // worst case if A[i] > key always true for fixed j we do the test j times: C = (1/2(n(n+1))-1)
    {
      A[i + 1] = A[i]; // j-1 times assignment : C = (1/2(n-1)n)
      i = i - 1; // j-1 times assignment : C = (1/2(n-1)n)
    }
    A[i + 1] = key; //n-1 operations C = (n-1)
  }

  return A;
}
/*
If we sum all of the constants,
T(n) of form an^2 + bn + c 
we have an^2 > T(n) therefore T(n) --> O(n^2)
*/

console.log(insertionSort(input));
