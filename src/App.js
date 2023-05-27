import './App.css';
import PollDisplay from './PollDisplay.js';
function App() {
  return (
    <div className="App">
      <h1 align="center">Polling App</h1>
      <PollDisplay javascriptVote={1} pythonVote={3} javaVote={4} cVote={4}/>
      
    </div>
  );
}

export default App;
