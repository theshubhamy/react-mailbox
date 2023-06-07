import React, { useEffect } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchEmails,
  selectEmails,
  selectFilteredEmails,
  selectTags,
  selectFilter,
} from "./features/emailsSlice";

// Components
import MailList from "./components/MailList";
import EmailDetails from "./components/EmailDetails";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
const App = () => {
  const dispatch = useDispatch();
  const emails = useSelector(selectEmails);
  const filteredEmails = useSelector(selectFilteredEmails);
  const tags = useSelector(selectTags);
  // const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchEmails());
  }, [dispatch]);

  return (
    <div className="">
      <Header />
      <div className="flex justify-center items-start">
        <div className="w-1/6 ">
          <Sidebar tags={tags} />
        </div>
        <div className="w-5/6 p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/mail" />} />
            <Route
              path="/mail"
              element={<MailList emails={filteredEmails} />}
            />
            <Route path="mail/:id" element={<EmailDetails emails={emails} />} />
            <Route
              path="/search/:query"
              element={<MailList emails={filteredEmails} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
