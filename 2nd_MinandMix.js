// function findSecondMinAndMax(arr) {
//   if (arr.length < 2) {
//       throw new Error("Array must contain at least 2 elements to find the second min and second max");
//   }

//   let min = Number.MAX_VALUE, secondMin = Number.MAX_VALUE;
//   let max = Number.MIN_VALUE, secondMax = Number.MIN_VALUE;
//   let allElementsEqual = true;

//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < min) {
//           secondMin = min;
//           min = arr[i];
//       } else if (arr[i] < secondMin && arr[i] !== min) {
//           secondMin = arr[i];
//       }

//       if (arr[i] > max) {
//           secondMax = max;
//           max = arr[i];
//       } else if (arr[i] > secondMax && arr[i] !== max) {
//           secondMax = arr[i];
//       }

//       if (i > 0) {
//           allElementsEqual &= arr[i - 1] === arr[i];
//       }
//   }

//   if (allElementsEqual) {
//       throw new Error("All elements are equal. Cannot find the second min and second max");
//   }

//   return {
//       secondMin: secondMin,
//       secondMax: secondMax
//   };
// }



function findSecondMinAndMax(arr) {
    if (arr.length < 2) {
        throw new Error("Array must contain at least 2 elements to find the second min and second max");
    }

    let min = Number.MAX_VALUE, secondMin = Number.MAX_VALUE;
    let max = Number.MIN_VALUE, secondMax = Number.MIN_VALUE;

    for (let num of arr) {
        // Update min and second min
        if (num < min) {
            secondMin = min;
            min = num;
        } else if (num < secondMin && num !== min) {
            secondMin = num;
        }

        // Update max and second max
        if (num > max) {
            secondMax = max;
            max = num;
        } else if (num > secondMax && num !== max) {
            secondMax = num;
        }
    }

    if (min === secondMin || max === secondMax) {
        throw new Error("Array must contain at least two distinct elements to find the second min and second max");
    }

    return {
        secondMin,
        secondMax
    };
}



// Example usage:
const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const result = findSecondMinAndMax(array);
console.log(`Second Min: ${result.secondMin}, Second Max: ${result.secondMax}`);