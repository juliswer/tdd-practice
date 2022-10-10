import { render, screen, cleanup } from "@testing-library/react";
import { afterEach, describe, it, expect } from "vitest";

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];

const operations = ["+", "-", "*", "/"];

const Calculator = () => {
  return (
    <section>
      <h1>Calculator</h1>
      <div role="grid">
        {rows.map((row, idx) => (
          <div key={idx} role="row">
            {row.map((number) => (
              <span key={number}>{number}</span>
            ))}
          </div>
        ))}
        {operations.map((operation, idx) => (
          <span key={idx}>{operation}</span>
        ))}
      </div>
    </section>
  );
};

describe("Calculator", () => {
  afterEach(cleanup);
  it("Should Render", () => {
    render(<Calculator />);
  });

  it("Should render title correctly", () => {
    render(<Calculator />);
    screen.getByText("Calculator");
  });

  it("Should render numbers", () => {
    render(<Calculator />);

    numbers.forEach((number) => {
      screen.getByText(number);
    });
  });

  it("Should render 4 row", () => {
    render(<Calculator />);

    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(4);
  });

  it("Should render operations", () => {
    render(<Calculator />);

    operations.forEach((operation) => {
      screen.getByText(operation);
    });
  });
});
