import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

import { data, days } from "../components/data/sample";

const errorSlice = createSlice({
  name: "errorSlice",
  initialState: {
    day: [
      { code: 500, count: 1256 },
      { code: 501, count: 800 },
      { code: 502, count: 650 },
      { code: 400, count: 7856 },
    ],
    data: {
      booking1: 0,
      booking2: 0,
      search1: 0,
      search2: 0,
      clicks1: 0,
      clicks2: 0,
      average1: 0,
      average2: 0,
      errors1: 0,
      errors2: 0,
      zeroes1: 0,
      zeroes2: 0,
      timeout1: 0,
      timeout2: 0,
      ctr1: 0,
      ctr2: 0,
      str1: 0,
      str2: 0,
      gate_id: 0,
    },
    selectedDay: "",
  },
  reducers: {
    getErrorList(state, action) {
      const selectedDay: keyof typeof days = action.payload;
      const daygot: any = days[selectedDay];
      state.selectedDay = selectedDay;
      state.day = daygot;

      const dataSelected = selectedDay.split("_");
      let lastPart = dataSelected[dataSelected.length - 1];
      if (lastPart == "3days" || lastPart == "hour")
        lastPart = "last_" + lastPart;
      const booking1: keyof typeof data = ("bookings_current_" +
        lastPart) as keyof typeof data;
      const booking2: keyof typeof data = ("bookings_previous_" +
        lastPart) as keyof typeof data;
      const search1: keyof typeof data = ("searches_current_" +
        lastPart) as keyof typeof data;
      const search2: keyof typeof data = ("searches_previous_" +
        lastPart) as keyof typeof data;

      const clicks1: keyof typeof data = ("clicks_current_" +
        lastPart) as keyof typeof data;
      const clicks2: keyof typeof data = ("clicks_previous_" +
        lastPart) as keyof typeof data;
      const errors1: keyof typeof data = ("errors_" +
        lastPart) as keyof typeof data;
      const errors2: keyof typeof data = ("errors_" +
        lastPart) as keyof typeof data;
      const avg_price1: keyof typeof data = ("avg_price_" +
        lastPart) as keyof typeof data;
      const avg_price2: keyof typeof data = ("avg_price_" +
        lastPart) as keyof typeof data;
      const zeroes1: keyof typeof data = ("zeroes_current_" +
        lastPart) as keyof typeof data;
      const zeroes2: keyof typeof data = ("zeroes_previous_" +
        lastPart) as keyof typeof data;
      const timeout1: keyof typeof data = ("timeout_" +
        lastPart) as keyof typeof data;
      const timeout2: keyof typeof data = ("timeout_" +
        lastPart) as keyof typeof data;
      const ctr1: keyof typeof data = ("ctr_" + lastPart) as keyof typeof data;
      const ctr2: keyof typeof data = ("ctr_" + lastPart) as keyof typeof data;
      const str1: keyof typeof data = ("str_" + lastPart) as keyof typeof data;
      const str2: keyof typeof data = ("str_" + lastPart) as keyof typeof data;
      const gate_id: keyof typeof data = "gate_id" as keyof typeof data;

      state.data.booking1 = Number(data[booking1]);
      state.data.booking2 = Number(data[booking2]);
      state.data.search1 = Number(data[search1]);
      state.data.search2 = Number(data[search2]);
      state.data.clicks1 = Number(data[clicks1]);
      state.data.clicks2 = Number(data[clicks2]);
      state.data.errors1 = Number(data[errors1]);
      state.data.errors2 = Number(data[errors2]);
      state.data.average1 = Number(data[avg_price1]);

      state.data.average2 = Number(data[avg_price2]);

      state.data.zeroes1 = Number(data[zeroes1]);
      state.data.zeroes2 = Number(data[zeroes2]);

      state.data.timeout1 = Number(data[timeout1]);
      state.data.timeout2 = Number(data[timeout2]);
      state.data.ctr1 = Number(data[ctr1]);
      state.data.ctr2 = Number(data[ctr2]);
      state.data.str1 = Number(data[str1]);
      state.data.str2 = Number(data[str2]);
      state.data.gate_id = Number(data[gate_id]);

      //get the search data for the selected day
    },
  },
});

export const errorAction = errorSlice.actions;

export default errorSlice;
