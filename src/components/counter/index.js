import { deposit, withdraw } from "../../store/amount/action";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    amount: state.amountReducer.amount
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
