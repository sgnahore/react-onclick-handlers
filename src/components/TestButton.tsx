function TestButton(): JSX.Element {
  return (
    <button
      onClick={function () {
        console.log("Let me tell you something");
        window.open("Let me tell you something");
      }}
    >
      A cheeky test round 2
    </button>
  );
}

export default TestButton;
