import { deposit, withdraw } from "../../store/amount/action";
import { connect } from "react-redux";
import { selectCurrentAmount } from "../../store/amount/reducer";

const mapStateToProps = (state) => {
  return {
    amount: selectCurrentAmount(state)
  };
};

export const Counter = ({ amount, deposit, withdraw }) => {
  return (
    <>
      <h1>{amount}</h1>
      <button onClick={() => deposit()}>Deposit $10</button>{" "}
      <button onClick={() => withdraw()}>Deposit $10</button>
    </>
  );
};

export default connect(mapStateToProps, { deposit, withdraw })(Counter);
