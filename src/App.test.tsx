import React from "react";
import { render } from "@testing-library/react";
import { createBrowserHistory } from "history";
import App from "./App";

const history = createBrowserHistory();

test("renders learn react link", () => {
  const { getByText } = render(<App history={history} />);
  const linkElement = getByText(/Terpusat/g);
  expect(linkElement).toBeInTheDocument();
});
