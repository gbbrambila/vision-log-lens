import React from "react";
import Page from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Root Index Page", () => {
  it("renders the upload component if no errors available", () => {
    render(<Page />);
    const uploadArea = screen.getByTestId("upload-area");
    expect(uploadArea).toBeInTheDocument();
  });

  it("should render an error when upload of a file fails", () => {
    React.useState = jest
      .fn()
      .mockReturnValueOnce(["Error when trying to upload the file", {}]);
    render(<Page />);
    const errorArea = screen.getByTestId("error-area");
    expect(errorArea).toBeInTheDocument();
  });
});
