import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidUpdate() {
    this.ticker = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Aktuelle Uhrzeit: {this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

class MagicTable extends React.Component {
  crateTable() {
    let table = [];
    
    for(let i = 0; i < 10; i++) {
      let children = [];
      table.push(<tr><td><MagicButton/></td></tr>);
    }
    return table;
  }
  render() {
    return (
      <table>
        {this.crateTable()}
      </table>
    );
  }
}

class MagicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isRender:true};
  }

  deleteMe() {
    this.setState({
      isRender: false
    });
  }

  render() {
    if(this.state.isRender){
      return (
        <button onClick={(e) => this.deleteMe(e)}>
          Delete me
        </button>
      );
    } else {
      return null;
    }
  }
}

ReactDOM.render(
  <MagicTable/>,
  document.getElementById('root')
);

serviceWorker.unregister();
