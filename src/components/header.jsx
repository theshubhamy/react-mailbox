import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white p-4 shadow-md">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold">MailBox</h1>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search mail"
          className="border border-gray-300 rounded-lg px-4 py-2 mr-4"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
