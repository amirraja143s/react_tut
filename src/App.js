import './App.css';
import  { LifeCycle } from "../src/components/LifeCycle"
function App() {
  return (
    <div className="App">
      <LifeCycle props="hello" age="23"/>
      <h1>hello</h1>
    </div>
  );
}

export default App;
