import { bubbleSortAlgorithm } from "../BubbleSort/BubbleSort";
export const bubble = (disable, arr, speed) => {
  disable(true);
  let previousArray = [...arr];
  let [animations] = bubbleSortAlgorithm(previousArray);
  for (let i = 0; i < animations.length; i++) {
    const isColorChanged = i % 4 === 0 || i % 4 === 1;
    const arrayColumn = document.getElementsByClassName("column");
    if (isColorChanged === true) {
      const color = i % 4 === 0 ? "red" : "rgb(29, 42, 165)";
      const [barOneIndex, barTwoIndex] = animations[i];
      const barOneStyle = arrayColumn[barOneIndex].style;
      const barTwoStyle = arrayColumn[barTwoIndex].style;
      setTimeout(() => {
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
      }, i * speed);
    } else {
      const [barIndex, newHeight] = animations[i];
      if (barIndex === -1) {
        continue;
      }
      const barStyle = arrayColumn[barIndex].style;
      setTimeout(() => {
        barStyle.height = `${newHeight}px`;
      }, i * speed);
    }
  }
};
