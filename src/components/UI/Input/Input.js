import { styled } from "styled-components";

const StyledInput = styled.p`
label {
  display: block;
  margin-bottom: 0.25rem;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 0.5rem;
  font-weight: bold;
  text-transform: uppercase;
}

input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #76c0ae;
  border-radius: 0.25rem;
  background-color: transparent;
  color: #c2e9e0;
  font-size: 1rem;

  &::placeholder {
    color: #9BBAB3;
  }
}
`

const Input = (props) => {
  return <StyledInput>
    <label htmlFor={props.id}>{props.label} ({props.subLabel})</label>
    <input type="number" min="0.01" step="0.01"
      id={props.id} placeholder={props.placeholder}
      onChange={props.eventHandler}
      value={props.value}
      />
  </StyledInput>
}

export default Input;