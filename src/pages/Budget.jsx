import React, { useState } from 'react';
import Header from '../components/Header'; //importing the automatic time and date
import Layout from '../layouts/Layout';

function Budget({user}) {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [budgetName, setBudgetName] = useState('');
  const [budgetAmount, setBudgetAmount] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [selectedBudget, setSelectedBudget] = useState(null);

  const createBudget = () => {
    const newBudget = {
      name: budgetName,
      amount: parseFloat(budgetAmount),
      spent: 0,
    };
    setBudgets([...budgets, newBudget]);
    setBudgetName('');
    setBudgetAmount('');
  };

  const addExpense = () => {
    if (selectedBudget !== null) {
      const newExpense = {
        name: expenseName,
        amount: parseFloat(expenseAmount),
        budget: selectedBudget,
        date: new Date().toLocaleDateString(),
      };
      setExpenses([...expenses, newExpense]);

      // Update the budget's spent amount
      const updatedBudgets = budgets.map(budget =>
        budget.name === selectedBudget
          ? { ...budget, spent: budget.spent + parseFloat(expenseAmount) }
          : budget
      );
      setBudgets(updatedBudgets);

      setExpenseName('');
      setExpenseAmount('');
    }
  };

  const deleteExpense = (expenseToDelete) => {
    setExpenses(expenses.filter(expense => expense !== expenseToDelete));

    // Update the budget's spent amount
    const updatedBudgets = budgets.map(budget =>
      budget.name === expenseToDelete.budget
        ? { ...budget, spent: budget.spent - expenseToDelete.amount }
        : budget
    );
    setBudgets(updatedBudgets);
  };

  const deleteBudget = (budgetToDelete) => {
    setBudgets(budgets.filter(budget => budget !== budgetToDelete));
    setExpenses(expenses.filter(expense => expense.budget !== budgetToDelete.name));
  };

  return (
    <Layout user ={user}>
       <Header>Budget Page</Header>
      <div className="budget-page">
       
        
        {/* Create and Add Expense Sections */}
        <div className="create-add-container">
          <div className="create-budget">
            <label htmlFor="budgetName">Budget Name</label>
            <input
              id="budgetName"
              type="text"
              value={budgetName}
              onChange={e => setBudgetName(e.target.value)}
              placeholder="Enter budget name"
            />
            <label htmlFor="budgetAmount">Amount</label>
            <input
              id="budgetAmount"
              type="number"
              value={budgetAmount}
              onChange={e => setBudgetAmount(e.target.value)}
              placeholder="Enter amount"
            />
            <div className="button-container">
              <button onClick={createBudget}>Create Budget</button>
            </div>
          </div>

          {/* Add Expense - Only shown if there is at least one budget */}
          {budgets.length > 0 && (
            <div className="add-expense">
              <label htmlFor="expenseName">Expense Name</label>
              <input
                id="expenseName"
                type="text"
                value={expenseName}
                onChange={e => setExpenseName(e.target.value)}
                placeholder="Enter expense name"
              />
              <label htmlFor="expenseAmount">Amount</label>
              <input
                id="expenseAmount"
                type="number"
                value={expenseAmount}
                onChange={e => setExpenseAmount(e.target.value)}
                placeholder="Enter amount"
              />
              <label htmlFor="budgetSelect">Select Budget</label>
              <select
                id="budgetSelect"
                value={selectedBudget || ''}
                onChange={e => setSelectedBudget(e.target.value)}
              >
                <option value="" disabled>Select Budget</option>
                {budgets.map((budget, index) => (
                  <option key={index} value={budget.name}>
                    {budget.name}
                  </option>
                ))}
              </select>
              <div className="button-container">
                <button onClick={addExpense}>Add Expense</button>
              </div>
            </div>
          )}
        </div>

        {/* Existing Budgets */}
        <div className="existing-budgets">
          <h2>Existing Budgets</h2>
          <div className="budget-items">
            {budgets.map((budget, index) => (
              <div key={index} className="budget-item">
                <h3>{budget.name}</h3>
                <div className="progress-container">
                  <progress value={budget.spent} max={budget.amount}></progress>
                  <div className="progress-info">
                    <span className="amount-spent">{`₱${budget.spent.toFixed(2)} spent`}</span>
                    <span className="amount-budgeted">{`₱${budget.amount.toFixed(2)} Budgeted`}</span>
                    <span className="amount-remaining">{`₱${(budget.amount - budget.spent).toFixed(2)} remaining`}</span>
                  </div>
                </div>
                <button onClick={() => setSelectedBudget(budget.name)}>Edit/View Details</button>
                <button onClick={() => deleteBudget(budget)}>Delete Budget</button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Expenses List */}
        {selectedBudget && (
          <div className="expenses-list">
            <h2>{selectedBudget} Expenses</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {expenses
                  .filter(expense => expense.budget === selectedBudget)
                  .map((expense, index) => (
                    <tr key={index} className="expense-item">
                      <td>{expense.name}</td>
                      <td>{`₱${expense.amount.toFixed(2)}`}</td>
                      <td>{expense.date}</td>
                      <td>
                        <button onClick={() => deleteExpense(expense)}>
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
        
        {/* Recent Expenses */}
        <div className="recent-expenses">
          <h2>Recent Expenses</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Budget</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index} className="recent-expense-item">
                  <td>{expense.name}</td>
                  <td>{`₱${expense.amount.toFixed(2)}`}</td>
                  <td>{expense.date}</td>
                  <td>{expense.budget}</td>
                  <td>
                    <button onClick={() => deleteExpense(expense)}>
                      🗑️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Budget;
        
