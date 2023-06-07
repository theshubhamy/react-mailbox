import React from "react";
import { Link } from "react-router-dom";
const MailList = ({ emails }) => {
  return (
    <div className=" flex justify-center items-center flex-col gap-4">
      {emails?.map((email) => (
        <div
          key={email.id}
          className=" w-full flex justify-start items-center text-gray-900 bg-indigo-200 p-1 rounded-md shadow-md"
        >
          <Link to={`/mail/${email.id}`}>{email.subject}</Link>
        </div>
      ))}
    </div>
  );
};

export default MailList;
