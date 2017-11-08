import React, { Component } from 'react';
import './App.css';

const list = [
  {'title'        : 'React',
   'url'          : 'http:...',
   'author'       : 'Jordan',
   'num_comments' : 3,
   'points'       : 4,
   'ObjectID'     : 0},
  {'title'        : 'Redux',
   'url'          : 'http:...',
   'author'       : 'Abramov',
   'num_comments' : 2,
   'points'       : 5,
   'ObjectID'     : 1}
]

class App extends Component {
  render() {
    let hello = 'Welcome to the road to learn react!';
    return (
      <div className="App">
        {list.map(item => {
          return <div key={item.ObjectID}>
            <span>
            <a href={item.url}>
            {item.title}
          </a>
            </span>
            <span>
            {item.author}
          </span>
            <span>
            {item.num_comments}
            </span>
          </div>;
        })}
      </div>
    );
  }
}

export default App;
