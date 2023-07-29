import ExpenseItem from './components/ExpenseItem';
import ExpenseData from './components/ExpenseData';
import './App.css';

function App() {
  const expenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14)
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.12,
        date: new Date(2021, 2, 28)
    },
    {
        id: 'e4',
        title: 'New Desk (wooden)',
        amount: 450,
        date: new Date(2021, 5, 12)
    }
];
  return (
    <div className="App-header">
      <h2>Mujju Palan</h2>
      <Expenses items={expenses} />
      {/* <div>
        <ExpenseItem 
          title={ExpenseData[0].title} 
          amount={ExpenseData[0].amount} 
          date={ExpenseData[0].date}>
        </ExpenseItem>
        <ExpenseItem 
          title={ExpenseData[1].title} 
          amount={ExpenseData[1].amount} 
          date={ExpenseData[1].date}>
        </ExpenseItem>
        <ExpenseItem 
          title={ExpenseData[2].title} 
          amount={ExpenseData[2].amount} 
          date={ExpenseData[2].date}>
        </ExpenseItem>
        <ExpenseItem 
          title={ExpenseData[3].title} 
          amount={ExpenseData[3].amount} 
          date={ExpenseData[3].date}>
        </ExpenseItem>
    </div> */}
    </div>
  );
}

export default App;
