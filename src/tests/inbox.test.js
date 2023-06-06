import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Inbox from "../Inbox";

test("renders inbox emails", () => {
  const emails = [
    {
      id: 1,
      subject: "Test Email 1",
      sender: "sender1@example.com",
      tags: ["inbox"],
    },
    {
      id: 2,
      subject: "Test Email 2",
      sender: "sender2@example.com",
      tags: ["inbox"],
    },
  ];

  const { getByText } = render(
    <Router>
      <Inbox emails={emails} />
    </Router>
  );

  expect(getByText("Test Email 1 - sender1@example.com")).toBeInTheDocument();
  expect(getByText("Test Email 2 - sender2@example.com")).toBeInTheDocument();
});
