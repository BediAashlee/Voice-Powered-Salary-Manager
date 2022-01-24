// changes the try saying 'income expense' words

import React from "react";

const isIncome = Math.round(Math.random()); // gives zero 50% times and 1 %0% times --> works as boolean

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: "center", padding: "0 10%" }}>
      Try saying: <br />
      Add {isIncome ? "Income " : "Expense "}
      for {isIncome ? "$100 " : "$50 "}
      in Category {isIncome ? "Salary " : "Travel "}
      for next {isIncome ? "Monday " : "Thursday "}
    </div>
  );
};

export default InfoCard;
