import ExpenseItem from './components/ExpenseItem';
import ExpenseData from './components/ExpenseData';
import './App.css';

function App() {
  return (
    <div className="App-header">
      <h2>Mujju Palan</h2>
      <div>
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
      </div>
    </div>
  );
}

export default App;
