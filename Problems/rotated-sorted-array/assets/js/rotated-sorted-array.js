function searchInRotatedArray(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
      let mid = Math.floor((start + end) / 2);

      if (arr[mid] === target) {
          return mid;
      }
      if (arr[start] <= arr[mid]) {
          if (arr[start] <= target && target < arr[mid]) {
              end = mid - 1;
          } else {
              start = mid + 1;
          }
      }
      else {
          if (arr[mid] < target && target <= arr[end]) {
              start = mid + 1;
          } else {
              end = mid - 1;
          }
      }
  }
  return -1;
}
const rotatedArray = [4, 5, 6, 7, 0, 1, 2];
const targetElement = 0;
const resultIndex = searchInRotatedArray(rotatedArray, targetElement);

if (resultIndex !== -1) {
  console.log(`Element ${targetElement} found at index ${resultIndex}.`);
} else {
  console.log(`Element ${targetElement} not found in the array.`);
}