import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image';

class App extends Component {
  
    state={
      url:'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/05085531/Pug-1-resized.jpg'
    }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <Image src={this.state.url}/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
