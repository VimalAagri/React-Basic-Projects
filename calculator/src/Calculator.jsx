import { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const buttonArray = ["%", "*", "/", "-", "+", ".", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "=", "CE"];


  const [displayValue, setValue] = useState("");


  function handleButtonClick(value) {
    if (value === "CE") {
      setValue("");
    } else if (value === "=") {
      try {
        const result = eval(displayValue);
        setValue(result.toString());
      } catch (error) {
        setValue("Error");
      }
    } else {
      setValue(prev => prev + value);
    }
  }

  return (
    <>
      <div className='calculator'>
        <h2>Calculator</h2> <hr/>
        <input
          id='input'
          type="text"
          placeholder='0'
          value={displayValue}
          onChange={(e) => setValue(e.target.value)}
        />
        


        <div className='buttons'>
          {
            buttonArray.map((value, index) => (
              <button key={index} onClick={() => handleButtonClick(value)}>
                {value}
              </button>
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Calculator;
