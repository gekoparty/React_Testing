import { render, screen } from "@testing-library/react";
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
});
