import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


class CurrencyInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onCurrencyChange(e.target.value);
  }

  render() {
    const currency = this.props.curreny;
    const value = this.props.value;
    return(
      <fieldset>
        <legend>Gib die Menge in {currency} an:</legend>
        <input value={value} onChange={this.handleChange}/>
      </fieldset>
    );
  }
}

class CurrencyCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currency: 'Euro', value: ''};
    this.handleEuroChange = this.handleEuroChange.bind(this);
    this.handleDollarChange = this.handleDollarChange.bind(this);
  }

  handleDollarChange(value) {
    this.setState({currency: 'Dollar', value});
  }

  handleEuroChange(value) {
    this.setState({currency: 'Euro', value});
  }

  render() {
    const value = this.state.value;
    const currency = this.state.currency;
    let euro = 0;
    let dollar = 0;

    if(currency === "Euro") {
      euro = value;
      dollar = 1.14 * value;
    } else {
      dollar = value;
      euro = 0.86 * value;
    }

    return(
      <div>
        <CurrencyInput currency="Euro" value={euro} onCurrencyChange={this.handleEuroChange}/>
        <CurrencyInput currency="Dollar" value={dollar} onCurrencyChange={this.handleEuroChange}/>
      </div>
    );
  }
}

ReactDOM.render(
  <CurrencyCalculator/>,
  document.getElementById('root')
);

serviceWorker.unregister();
