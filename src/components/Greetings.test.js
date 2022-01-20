import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

describe("Greeting component", () => {
  test("renders hello world", () => {
    // Arrange
    render(<Greetings />);

    //act
    //..nothing

    // Assert
    const helloworldelement = screen.getByText("Hello World", { exact: false });
    expect(helloworldelement).toBeInTheDocument();
  });

  test("renders greetings if the button was NOT clicked", () => {
    render(<Greetings />);

    const outpoutElement = screen.getByText("Greetings", { exact: false });
    expect(outpoutElement).toBeInTheDocument();
  });

  test("renders changed text if button was clicked", () => {
    //Arrange
    render(<Greetings />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outpoutElement = screen.getByText("changed text", { exact: false });
    expect(outpoutElement).toBeInTheDocument();
  });

  test('Greeting component does not render "Greetings" if button was clicked', () => {
       render(<Greetings />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outpoutElement = screen.queryByText("Greetings", { exact: false });
    expect(outpoutElement).toBeNull();
  });
});
