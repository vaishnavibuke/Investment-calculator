import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleInputChange(inputType, newUserInput) {
    // alert(e.target.value);
    setUserInput((preUserInput) => {
      return {
        ...preUserInput,
        [inputType]: +newUserInput,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput
        onInputChange={handleInputChange}
        userInput={userInput}
      />

      {inputIsValid ? (
        <Results userInput={userInput} />
      ) : (
        <p className="center">Please enter duration greater than 0</p>
      )}
    </>
  );
}

export default App;
