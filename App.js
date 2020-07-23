import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
     return (
       <div className="App">
         <h1> HI, THIS S GAMMI</h1>
         <p> This s also inside</p>
         <Person name="Gammi" age="28"/>
         <Person ame="pammi" age="33">My Hobbies: Coding </Person>
         <Person ame="Mammi" age="50"/>
       </div>
       
     );
   // return React.createElement('div',{className:'App'},React.createElement('h1',null,'Does this work'));
  }
}

export default App;
