import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/categories";

const useTransactions = (title) => {
  // creating a custom hook for transactions of a particular category
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const rightTransactions = transactions.filter((t) => t.type === title);
  const total = rightTransactions.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  rightTransactions.forEach((t) => {
    const category = categories.find((c) => c.type === t.category); // each transaction has id, type, category, amount, etc --> filters the type based on income or expense --> sums up the amount for all transactions of a particular category

    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0); // removes the transaction having amount < or = zero

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount), // returns amount for each category
        backgroundColor: filteredCategories.map((c) => c.color), // returns color for each category
      },
    ],
    labels: filteredCategories.map((c) => c.type), // returns type for each category
  };

  return { filteredCategories, total, chartData }; // returns the three
};

export default useTransactions;
