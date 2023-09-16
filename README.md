# udemy-investment-calc
Section 9 - 1st practice project: Investment Calculator

### Tasks
- [x] Split app into components
- [x] Handle submit and reset button click events
- [x] Manage state
- [x] Output results conditionally
- [ ] Bonus: styling! (styled components/css modules)

### Hints
- Identify potential reusable building blocks
- Try not to be too granular
- Listen to events (form submit, reset click, user input changing)
- Consider generic / shared change handler functions
- Manage input states as single object or multiple state
- Lift up states
- Feel free to change **calculateHandler** 
- Derive calculations into a existing state
- Consider splitting CSS code into multiple component-scoped CSS files
- Format currency value output using code below:
```
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
 
// use like this:
formatter.format(yourValue);
```