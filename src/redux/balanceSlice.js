import { createAction, createReducer } from "@reduxjs/toolkit";

export const withdraw = createAction("balance/withdraw");

export const deposit = createAction("balance/deposit");

export const rootBalance = createReducer({ value: 0 }, (builder) => {
  builder.addCase(withdraw, (state, action) => {
    state.value -= action.payload;
  });

  builder.addCase(deposit, (state, action) => {
    state.value += action.payload;
  });
});
