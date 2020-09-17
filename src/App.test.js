import React from "react";
import { render } from "@testing-library/react";

import NotFound from "./containers/NotFound";

test("renders not found lander", () => {
  const { getByText } = render(<NotFound />);
  const linkElement = getByText(/Error 404: Page not found/i);
  expect(linkElement).toBeInTheDocument();
});
