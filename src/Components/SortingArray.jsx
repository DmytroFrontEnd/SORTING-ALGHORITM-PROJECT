import styles from "./SortingArray.module.css";
import { useState } from "react";
import { bubble } from "./BubbleSortAnimation/BubbleSortAnimation";
import { mergeSort } from "./MergeSortAnimation/MergeSortAnimation";
import Button from "./Button/Button";
import Input from "./Input/Input";

const SortingArray = () => {
  const [size, setSize] = useState(200);
  const [disable, setDisable] = useState(false);
  const [speed, setSpeed] = useState(1);

  let arrayColumn = [];
  for (let i = 0; i < size; i++) {
    arrayColumn.push(Math.trunc(Math.random() * 400 + 10));
  }
  const [array, setArray] = useState(arrayColumn);
  const generateNewArray = () => {
    arrayColumn = [];
    for (let i = 0; i < size; i++) {
      arrayColumn.push(Math.trunc(Math.random() * 400 + 10));
    }
    setArray(arrayColumn);
  };
  const sizeHandler = (e) => {
    setSize(e.target.value);
    generateNewArray();
    return arrayColumn;
  };
  const speedHandler = (e) => {
    setSpeed(e.target.value);
  };

  return (
    <div className="container">
      <div className="responsive">
        Sorry but this page currently is not responsive, please visit our site
        from your computer
      </div>
      <div className="screen">
        <div className="inputsDiv">
          <Input
            value={size}
            onChangeHandler={sizeHandler}
            min="50"
            max="300"
            step="1"
            text="Change the size of array"
            disable={disable}
          />

          <Input
            text="Change the speed of sorting: "
            value={speed}
            disable={disable}
            onChangeHandler={speedHandler}
            min="0.1"
            max="9"
            step="0.1"
          />
        </div>
        <div className={styles.allColumns}>
          {array.map((value, i) => (
            <div
              className="column"
              style={{ height: `${value}px` }}
              key={i}
            ></div>
          ))}
          <div className={styles.buttonsDiv}>
            <Button
              buttonHandler={() => setDisable(false)}
              text="Unable Buttons"
            />
            <Button
              disable={disable}
              buttonHandler={() => bubble(setDisable, array, speed)}
              text="Bubble Sort"
            />
            <Button
              buttonHandler={() => mergeSort(setDisable, array, speed)}
              disable={disable}
              text="Merge Sort"
            />
            <Button
              text="Generate New Array"
              disable={disable}
              buttonHandler={generateNewArray}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SortingArray;
