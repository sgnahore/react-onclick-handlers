function TestButton(): JSX.Element {
 function handleClick() {
  console.log("Let me tell you something");
 }
 
  return (
  <button onClick={handleClick}>A cheeky test</button>
  );
}

export default TestButton;
