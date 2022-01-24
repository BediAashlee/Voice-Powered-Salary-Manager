// Reducer --> a function that takes in the old state, and an action and returns a new state
// saving data on local storage

const contextReducer = (state, action) => {
  let transactions;

  switch (action.type) {
    case "DELETE_TRANSACTION":
      transactions = state.filter(
        (transaction) => transaction.id !== action.payload // if id is not equal to payload --> remove it --> without affecting the other ones
      );

      localStorage.setItem("transactions", JSON.stringify(transactions));

      return transactions; // return everything after deleting
    case "ADD_TRANSACTION":
      transactions = [action.payload, ...state]; // add a new transaction keeping all the other ones

      localStorage.setItem("transactions", JSON.stringify(transactions));

      return transactions;
    default:
      return state;
  }
};

export default contextReducer;
