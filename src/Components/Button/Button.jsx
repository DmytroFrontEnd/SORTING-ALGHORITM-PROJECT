const Button = (props) => {
  return (
    <div>
      <button
        className="btn"
        disabled={props.disable}
        onClick={props.buttonHandler}
      >
        {props.text}
      </button>
    </div>
  );
};
export default Button;
