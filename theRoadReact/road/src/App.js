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
      queried: null,
    };

    this.onDismiss = this.onDismiss.bind(this);

    this.lookUp    = this.lookUp.bind(this);

  }

  onDismiss(ObjectID) {
    this.setState({list: this.state.list.filter(item => item.ObjectID !== ObjectID ? item : null)})
  }


  lookUp(event) {
    this.setState({queried : event.target.value})
  }



  render() {
    return (
        <div className="App">
        <form>
        <input id='queried' type='text' onChange={this.lookUp}/>
        </form>
        {this.state.list.filter(item => item.author === this.queried ? item : null).map(item => {
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
            <button className="button" onClick={() => this.onDismiss(item.ObjectID)}>
            Dismiss
            </button>
          </div>;
        })}
      </div>
    );
  }
}

export default App;
