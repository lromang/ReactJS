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
  constructor(props){
    super(props);

    this.state = {
      list: list,
    };

    this.onDismiss = this.onDismiss.bind(this);

  }

  onDismiss(ObjectID) {
    this.setState({list: this.state.list.filter(item => {return item.ObjectID !== ObjectID ? item : null})})
  }

  render() {
    let hello = 'Welcome to the road to learn react!';
    return (
      <div className="App">
        {this.state.list.map(item => {
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
            <button type="button" onClick={() => this.onDismiss(item.ObjectID)}>
            Dismiss
            </button>
          </div>;
        })}
      </div>
    );
  }
}

export default App;
