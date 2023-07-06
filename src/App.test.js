import { render, screen, logRoles } from '@testing-library/react';
import App from './App';


test.skip("example test one", () => {
  render(<App />)
  // test whether the button exist or not.
  logRoles(screen.getByTestId("parent-container"))
  const button = screen.getByRole("button", { name: "Click here", exact: false}) 
  // perform assertion.
  expect(button).toBeInTheDocument(); 
 })


