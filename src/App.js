import { useState } from 'react';
import React from 'react';
import './App.css';
import PollDisplay from './PollDisplay.js';
import UserParticipation from './UserParticipation';
import AnotherParticipation from './AnotherUserParticipation';
class App extends React.Component {
  
  constructor(props){
    super(props)
    this.state = 
      {
        "question": "What is your favorite programming language?",
        "choices": [
        { "id": 1, "label": "JavaScript", "votes": 0 },
        { "id": 2, "label": "Python", "votes": 0 },
        { "id": 3, "label": "Java", "votes": 0 },
        { "id": 4, "label": "C#", "votes": 0 }
      ]
      }
  }
 
  handleVoteIncrement(val){
    this.setState({
         val
    })
    }
  render(){
   return(
    <div className="App">
        <h1 align="center">Polling App</h1>
        <PollDisplay data={this.state}/>
        <UserParticipation data={this.state} incrementVote={this.handleVoteIncrement}/>
        <AnotherParticipation/>
      </div>
   );
   }
    
  
  
}

export default App;
