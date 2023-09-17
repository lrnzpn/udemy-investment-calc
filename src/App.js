import Header from "./components/UI/Header/Header";
import InvestmentForm from "./components/Investments/InvestmentForm/InvestmentForm";
import InvestmentTable from "./components/Investments/InvestmentTable/InvestmentTable";
import { useState } from 'react';

// flow: Inputs -> Buttons -> Form -> App -> Table

function App() {

  const [calculateData, setCalculateData] = useState();

  const calculateHandler = (userInput) => {
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    /* 
      - elegant to put this calculation outside the calculateHandler
      so that it will run whenever App() is called 
      - yearlyData becomes a derived state
      - add a checker for userInput, then compute
    */
    const yearlyData = []; // per-year results

    let currentSavings = +userInput['currentSavings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearlyContribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expectedReturn'] / 100;
    const duration = +userInput['duration'];
    let totalInterest = 0;

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      totalInterest += yearlyInterest;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        savingsEndOfYear: currentSavings,
        yearlyInterest: yearlyInterest,
        totalInterest: totalInterest,
        investedCapital: currentSavings-totalInterest,
      });
    }

    // do something with yearlyData ...
    setCalculateData(yearlyData);
  };

  const resetHandler = () => {
    setCalculateData();
  };

  return (
    <div>
      <Header />
      <InvestmentForm onCalculateData={calculateHandler} onResetData={resetHandler} />
      <InvestmentTable items={calculateData} />
    </div>
  );
}

export default App;
