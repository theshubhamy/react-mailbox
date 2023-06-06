import React, { useEffect } from "react";
import { Route, Link, Navigate, useLocation, Routes } from "react-router-dom";
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

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const emails = useSelector(selectEmails);
  const filteredEmails = useSelector(selectFilteredEmails);
  const tags = useSelector(selectTags);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchEmails());
  }, [dispatch]);

  return (
    <div className="flex">
      <div className="w-1/4 p-4">
        <Sidebar tags={tags} />
      </div>
      <div className="w-3/4 p-4">
        <Routes>
          <Route exact path="/">
            <Navigate to="/inbox" />
          </Route>
          <Route path="/inbox">
            <MailList emails={filteredEmails} />
          </Route>
          <Route path="/mail/:id">
            <EmailDetails emails={emails} />
          </Route>
          <Route path="/all">
            <MailList emails={emails} />
          </Route>
          <Route path="/search/:query">
            <MailList emails={filteredEmails} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
