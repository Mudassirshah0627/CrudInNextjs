import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const CreateUser = createAsyncThunk(
  "CreateUser",
  async ({ rejectWithValue }) => {
    try {
      const userData = await axios.post(
        "https://65466341fe036a2fa9559c1e.mockapi.io/Crud"
      );
      return userData;
    } catch (error) {
      return rejectWithValue(error);
      // console.log(error);
    }
  }
);
const initialState = () => {
  users: [];
  loading: false;
  error: null;
};

const userDetails = createSlice({
  name: "userDetails",
  initialState,
  extraReducers: {
    [CreateUser.pending]: (state) => {
      state.loading = true;
    },
    [CreateUser.fulfilled]: (state, action) => {
      (state.loading = false), state.users.push(action.payload);
    },

    [CreateUser.rejected]: (state, action) => {
      (state.loading = false), (stat.error = action.payload.message);
    },
  },
});
export default userDetails.reducer;
