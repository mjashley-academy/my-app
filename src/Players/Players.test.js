import { render, screen } from "@testing-library/react";
import Players from "./Players";

describe("React Course", () => {
  test("Players - Greetings Validation", () => {
    render(<Players />);
    const greetingMsg = screen.getByText(/hi hello/i);
    expect(greetingMsg).toBeInTheDocument();
  });
});
