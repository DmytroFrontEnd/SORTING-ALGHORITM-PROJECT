export const bubbleSortAlgorithm = (arr) => {
  let animations = [];
  let auxiliaryArray = arr.slice();
  bubbleSort(auxiliaryArray, animations);
  arr = auxiliaryArray;
  return [animations, arr];
};

const bubbleSort = (auxiliaryArray, animations) => {
  const N = auxiliaryArray.length;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N - 1; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      if (auxiliaryArray[j] > auxiliaryArray[j + 1]) {
        animations.push([j, auxiliaryArray[j + 1]]);
        animations.push([j + 1, auxiliaryArray[j]]);
        swap(auxiliaryArray, j, j + 1);
      } else {
        animations.push([-1, -1]);
        animations.push([-1, -1]);
      }
    }
  }
};

const swap = (auxiliaryArray, firstIndex, secondIndex) => {
  let temp = auxiliaryArray[firstIndex];
  auxiliaryArray[firstIndex] = auxiliaryArray[secondIndex];
  auxiliaryArray[secondIndex] = temp;
};
