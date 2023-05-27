import { useState } from 'react';
import './App.css';
import PollDisplay from './PollDisplay.js';
function App() {
  const simpleData = {
    "question": "What is your favorite programming language?",
    "choices": [
    { "id": 1, "label": "JavaScript", "votes": 0 },
    { "id": 2, "label": "Python", "votes": 0 },
    { "id": 3, "label": "Java", "votes": 0 },
    { "id": 4, "label": "C#", "votes": 0 }
  ]
  }
  const [data, setData] = useState(simpleData);
  return (
    <div className="App">
      <h1 align="center">Polling App</h1>
      <PollDisplay data={data}/>
      
    </div>
  );
}

export default App;
