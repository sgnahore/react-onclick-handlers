function TestButton(): JSX.Element {
 const handleClick = () => {
  console.log("Let me tell you something");
 }
 
  return (
  <button onClick={handleClick}>
    A cheeky test round 2
    </button>
  );
}

export default TestButton;
