function InputFeedback(props) {
  return (
    <div className={props.invalid ? "invalid-feedback" : "valid-feedback"}>
      {props.children}
    </div>
  );
}

export default InputFeedback;
