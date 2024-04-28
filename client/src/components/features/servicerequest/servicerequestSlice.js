import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  servicerequest: [{ naam: "", money: 0, type: null }],
};

const servicerequest = createSlice({
  name: "servicerequest",
  initialState,
  reducers: {
    addservicerequest(state, action) {
      state.servicerequest = [
        ...state.servicerequest,
        {
          id: nanoid(),
          money: action.payload.money,
          type: action.payload.type,
          naam: action.payload.naam,
        },
      ];
    },
  },
});

export const serviceActions = servicerequest.actions;

export default servicerequest;
