import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initialState = {
  email: "",
  userName: "",
  name: "",
  uid: "",
  avatarUrl: "",
  bio: "",
  followers: 0,
  posts: 0,
};
export const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    logUser: (state) => {
      console.log(state);
    },
  },
});
