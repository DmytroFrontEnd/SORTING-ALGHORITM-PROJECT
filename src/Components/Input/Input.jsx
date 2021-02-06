const Input = (props) => {
  return (
    <div className="inputDiv">
      <label htmlFor="customRange" className="form-label">
        {props.text} {props.value}
      </label>
      <input
        disabled={props.disable}
        value={props.value}
        onChange={props.onChangeHandler}
        type="range"
        className="form-range"
        min={props.min} //0.1
        max={props.max} //9
        step={props.step} //0.1
        id="customRange"
      ></input>
    </div>
  );
};

export default Input;
