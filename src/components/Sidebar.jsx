import React from "react";
import { v4 as uuidv } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { setFilter, selectFilter } from "../features/emailsSlice";
const Sidebar = ({ tags }) => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);
  console.log(tags);
  const handleClick = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <aside className="bg-gray-100 h-screen min-w-64 min-h-screen m-0 p-4 border-r border-gray-300">
      <div className="  flex flex-col justify-start gap-4">
        {tags.map((item) => (
          <button
            key={uuidv()}
            onClick={() => handleClick(item)}
            className=" bg-white p-2 rounded-md shadow"
          >
            {item}
          </button>
        ))}

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
