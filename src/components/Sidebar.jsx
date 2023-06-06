import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, selectFilter } from "../features/emailsSlice";
const Sidebar = ({ tags }) => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);
  console.log(currentFilter);
  const handleClick = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <aside className="bg-white h-screen w-64 border-r border-gray-300">
      <div className="bg-indigo-300 min-h-screen m-0 p-4 flex flex-col justify-start gap-4">
        <button
          onClick={() => handleClick("inbox")}
          className=" bg-white p-2 rounded-md shadow"
        >
          Inbox
        </button>
        <button
          onClick={() => handleClick("draft")}
          className=" bg-white p-2 rounded-md shadow"
        >
          Draft
        </button>
        <button
          onClick={() => handleClick("spam")}
          className=" bg-white p-2 rounded-md shadow"
        >
          Spam
        </button>
        <button
          onClick={() => handleClick("trash")}
          className=" bg-white p-2 rounded-md shadow"
        >
          Trash
        </button>
        <button
          to="/all"
          onClick={() => handleClick("all")}
          className=" bg-white p-2 rounded-md shadow"
        >
          All
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
