import { mergeSortAlgorithm } from "../MergeSort/MergeSort";

export function mergeSort(disable, arr, speed) {
  disable(true);
  const prevArray = [...arr];
  const animations = mergeSortAlgorithm(prevArray);
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = document.getElementsByClassName("column");
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? "red" : "green";
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * speed);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * speed);
    }
  }
}
