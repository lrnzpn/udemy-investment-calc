import { useState } from 'react';
import { styled } from 'styled-components';
import Input from '../../UI/Input/Input';
import Button from '../../UI/Button/Button';


const StyledForm = styled.form`
  padding: 1rem;
  max-width: 30rem;
  margin: 2rem auto;
  border-radius: 4px;
  background: linear-gradient(180deg, #307e6c, #2b996d);
`;

const StyledInputGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1.5rem;
`;

const StyledActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const InvestmentForm = (props) => {
  const [currentSavings, setCurrentSavings] = useState('');
  const [yearlySavings, setYearlySavings] = useState('');
  const [interest, setInterest] = useState('');
  const [duration, setDuration] = useState('');

  const currentSavingsHandler = (event) => {
    setCurrentSavings(event.target.value);
  }

  const yearlySavingsHandler = (event) => {
    setYearlySavings(event.target.value);
  }

  const interestHandler = (event) => {
    setInterest(event.target.value);
  }

  const durationHandler = (event) => {
    setDuration(event.target.value);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const userInputs = {
      currentSavings: currentSavings,
      yearlyContribution: yearlySavings,
      expectedReturn: interest,
      duration: duration,
    };
    props.onCalculateData(userInputs);
    setCurrentSavings('');
    setYearlySavings('');
    setInterest('');
    setDuration('');
  }

  return (
    <StyledForm onSubmit={submitHandler}>
      <StyledInputGroup>
        <Input 
          id="current-savings" 
          label="Current Savings" 
          subLabel="$" 
          placeholder="25000"
          eventHandler={currentSavingsHandler}
          value={currentSavings}
        />
        <Input 
          id="yearly-contribution" 
          label="Yearly Savings" 
          subLabel="$" 
          placeholder="40000"
          eventHandler={yearlySavingsHandler}
          value={yearlySavings}
        />
      </StyledInputGroup>
      <StyledInputGroup>
        <Input 
          id="expected-return" 
          label="Expected Interest" 
          subLabel="%, per year" 
          placeholder="7.5"
          eventHandler={interestHandler}
          value={interest}
        />
        <Input 
          id="duration" 
          label="Investment Duration" 
          subLabel="years" 
          placeholder="10"
          eventHandler={durationHandler}
          value={duration}
        />
      </StyledInputGroup>
      <StyledActions>
        <Button 
          type="reset" 
          alt="true" 
          label="Reset" 
          eventHandler={props.onResetData}
        />
        <Button 
          type="submit" 
          label="Calculate" />
      </StyledActions>
    </StyledForm>
  )
}

export default InvestmentForm;