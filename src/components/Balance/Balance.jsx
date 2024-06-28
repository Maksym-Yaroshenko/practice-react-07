import { useDispatch, useSelector } from "react-redux";
import { withdraw, deposit } from "../../redux/balanceSlice";
import { useState } from "react";

export default function Balance() {
  const [userInput, setUserInput] = useState("");

  const value = useSelector((state) => state.value);
  const dispatch = useDispatch();
  console.log(value);

  // function handleDeposit() {
  //   dispatch(deposit(Number(userInput)));
  // }

  const handleWithdraw = () => {
    dispatch(withdraw(5));
  };

  const handleChange = (event) => {
    if (event.target.value === "") {
      console.log("Error");
      return;
    }
    setUserInput(event.target.value);
  };

  return (
    <>
      <p>Balance: {value} </p>
      {/* <button onClick={handleDeposit}>Deposit</button> */}
      <button onClick={handleWithdraw}>Withdraw</button>
      <input
        onChange={handleChange}
        type="number"
        name="userQuevy"
        placeholder="Number"
      />
      <p>{userInput}</p>
    </>
  );
}

// // chaining

// const builder = {
//   a() {
//     console.log("a");
//     return this;
//   },
//   b() {
//     console.log("b");
//     return this;
//   },
// };

// builder.a().b().a().b().a().b().a().b();
