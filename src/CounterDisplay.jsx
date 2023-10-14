function CounterDisplay({ count }) {
  const Style = {
    backgroundColor: "pink",
    color: "purple",
    borderRadius: "10px",
    border: "2px solid purple",
    padding: "10px",
  };

  return <h2 style={Style}>{count}</h2>;
}

export default CounterDisplay;
