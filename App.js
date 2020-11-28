import logo from './logo.svg';
import './App.css';
import YearOld  from './YearOld';
import Ex from './Ex';
import TableEx from './TableEx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
      <YearOld year="1993" name="moshe"/>
      <Ex/>
      <TableEx/>
    </div>
  );
}

export default App;
