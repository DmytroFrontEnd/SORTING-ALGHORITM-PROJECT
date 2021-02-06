// export const mergeSortAlgorithm = (arr) => {
//   const animations = [];
//   if (arr.length <= 1) return arr;
//   const auxiliaryArray = arr.splice();
//   mergeSortHelper(arr, 0, arr.length - 1, auxiliaryArray, animations);
//   return animations;
// };

// function mergeSortHelper(
//   mainArray,
//   startIndex,
//   endIndex,
//   auxiliaryArray,
//   animations
// ) {
//   if (startIndex === endIndex) return;
//   const middle = Math.floor((startIndex + endIndex) / 2);
//   mergeSortHelper(auxiliaryArray, startIndex, middle, mainArray, animations);
//   mergeSortHelper(auxiliaryArray, middle + 1, endIndex, mainArray, animations);
//   doMerge(mainArray, startIndex, middle, endIndex, auxiliaryArray, animations);
// }
// function doMerge(
//   mainArray,
//   startIndex,
//   middle,
//   endIndex,
//   auxiliaryArray,
//   animations
// ) {
//   let s = startIndex;
//   let i = startIndex;
//   let m = middle + 1;
//   while (i <= middle && m <= endIndex) {
//     animations.push([i, m]);
//     animations.push([i, m]);

//     if (auxiliaryArray[i] <= auxiliaryArray[m]) {
//       animations.push([s, auxiliaryArray[i]]);
//       mainArray[s++] = auxiliaryArray[i++];
//     } else {
//       animations.push([s, auxiliaryArray[m]]);
//       mainArray[s++] = auxiliaryArray[m++];
//     }
//   }
//   while (i <= middle) {
//     animations.push([i, i]);
//     animations.push([i, i]);
//     animations.push(s, [auxiliaryArray[i]]);
//     mainArray[s++] = auxiliaryArray[i++];
//   }
//   while (m <= endIndex) {
//     animations.push([m, m]);
//     animations.push([m, m]);
//     animations.push([s, auxiliaryArray[m]]);
//     mainArray[s++] = auxiliaryArray[m++];
//   }
// }
export function mergeSortAlgorithm(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}
