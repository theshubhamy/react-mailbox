import React from "react";
import { useParams } from "react-router-dom";

const EmailDetails = ({ emails }) => {
  const { id } = useParams();
  const email = emails.find((email) => email.id === id);

  if (!email) {
    return <div>Email not found.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{email.subject}</h2>
      <p>From: {email.sender}</p>
      <p>To: {email.recipient}</p>
      <p>{email.body}</p>
    </div>
  );
};

export default EmailDetails;
