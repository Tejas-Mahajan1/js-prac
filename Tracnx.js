/*
Check substring:

Find whether B is a substring of A.
Substring is defined as: if all characters of B are found in A at alternate positions in the same order.

Testcases:
  Input:
    A = "abcdefghij"
    B = "aceg"
  Output:
    true

  Input:
    A = "abcdefghij"
    B = "dfhj"
  Output:
    true

  Input:
    A = "abcdefghij"
    B = "bcde"
  Output:
    false

  Input:
    A = "abcdefghij"
    B = "aecg"
  Output:
    false

*/

function substr(A, B) {
  const lenA = A.length;
  const lenB = B.length;

  // Iterate over all possible starting positions in A
  for (let start = 0; start < lenA; start++) {
      let j = 0;
      // Check if we can match all characters of B starting from position 'start'
      for (let i = start; i < lenA && j < lenB; i += 2) {
          if (A[i] === B[j]) {
              j++;
          }
      }
      // If we have matched all characters of B, return true
      if (j === lenB) {
          return true;
      }
  }

  // If no matching sequence was found, return false
  return false;
}