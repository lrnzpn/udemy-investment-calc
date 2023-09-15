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
}
`

const Input = (props) => {
  return <StyledInput>
    <label htmlFor={props.id}>{props.label} ({props.subLabel})</label>
    <input type="number" id={props.id} />
  </StyledInput>
}

export default Input;