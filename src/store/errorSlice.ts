import { createSlice } from "@reduxjs/toolkit";
import { data, days } from "../components/data/sample";
type typeDayData = {
  count: number;
  code: number;
}[];
const errorSlice = createSlice({
  name: "errorSlice",
  initialState: { day: [], errorList: [] },
  reducers: {
    getErrorList(state, action) {
      const selectedDay: keyof typeof days = action.payload;
      const daygot = days[selectedDay];
      if (daygot.length > 0) {
        daygot.map((days) => daygot.push(days));
      }
      console.log(daygot);

      //if (daygot) state.day.push(daygot);
    },
  },
});

export const errorAction = errorSlice.actions;

export default errorSlice;
