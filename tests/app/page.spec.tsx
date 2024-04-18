import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

describe("Root Index Page", () => {
  it("renders the upload component if no errors available", () => {
    render(<Page />);
    const heading = screen.getByTestId("upload-area");
    expect(heading).toBeInTheDocument();
  });
});
