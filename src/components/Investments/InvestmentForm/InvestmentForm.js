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
  return (
    <StyledForm>
      <StyledInputGroup>
        <Input 
          id="current-savings" 
          label="Current Savings" 
          subLabel="$" />
        <Input 
          id="yearly-contribution" 
          label="Yearly Savings" 
          subLabel="$" />
      </StyledInputGroup>
      <StyledInputGroup>
        <Input 
          id="expected-return" 
          label="Expected Interest" 
          subLabel="%, per year" />
        <Input 
          id="duration" 
          label="Investment Duration" 
          subLabel="years" />
      </StyledInputGroup>
      <StyledActions>
        <Button 
          type="reset" 
          alt="true" 
          label="Reset" />
        <Button 
          type="submit" 
          label="Calculate" />
      </StyledActions>
    </StyledForm>
  )
}

export default InvestmentForm;