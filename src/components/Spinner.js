function Spinner(props) {
  return (
    <div
      className={`spinner-border ${props.color} ${props.className}`}
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default Spinner;
