import { configureStore } from "@reduxjs/toolkit";

import { rootBalance } from "./balanceSlice";

// export const withdraw = (newPay) => {
//   return {
//     type: "balance/withdraw",
//     payload: newPay,
//   };
// };

// const initialState = {
//   balance: {
//     value: 0,
//   },
// };

// const rootBalance = (state = { value: 0 }, action) => {
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         ...state,
//         value: state.value + action.payload,
//       };

//     case "balance/withdraw":
//       return {
//         ...state,
//         value: state.value - action.payload,
//       };

//     default:
//       return state;
//   }
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "balance/deposit":
//       return {
//         balance: {
//           value: state.balance.value + action.payload,
//         },
//       };

//     default:
//       return state;
//   }
// };

export const store = configureStore({
  reducer: rootBalance,
});
