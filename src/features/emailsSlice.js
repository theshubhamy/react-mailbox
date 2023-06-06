import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEmails = createAsyncThunk("mail/fetchEmails", async () => {
  const response = await fetch(
    "https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123"
  );
  const data = await response.json();
  return data;
});

const emailSlice = createSlice({
  name: "mail",
  initialState: {
    emails: [],
    filter: "inbox",
    tags: [],
  },
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEmails.fulfilled, (state, action) => {
      state.emails = action.payload;
      state.tags = [...new Set(action.payload?.map((email) => email.tag))];
    });
  },
});

export const { setFilter } = emailSlice.actions;

export const selectEmails = (state) => state.mail?.emails;
export const selectFilteredEmails = (state) =>
  state.mail.filter === "all"
    ? state.mail.emails
    : state.mail.emails?.filter((email) => email.tag === state.mail.filter);

export const selectTags = (state) => state.mail.tags;
export const selectFilter = (state) => state.mail.filter;

export const selectEmailById = (state, id) =>
  state.mail.emails?.find((email) => email.id === id);
export default emailSlice.reducer;
