export const deposit = () => {
  return {
    type: "DEPOSIT_MONEY",
    payload: 10
  };
};

export const withdraw = () => {
  return {
    type: "WITHDRAW_MONEY",
    payload: -10
  };
};
