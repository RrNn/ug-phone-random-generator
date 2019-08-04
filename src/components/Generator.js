import React, { Component, useState } from 'react';
import { randomNumberGenerator } from '../utils';
import PhoneNumbers from './PhoneNumbers';


class Generator extends Component {
  constructor(props) {
    super(props);
    this.state = { numberOfNumbers: 1000 }
  }
  generate = (e) => {
    e.preventDefault();
    const phones = randomNumberGenerator(this.state.numberOfNumbers);
    localStorage.setItem('phones', JSON.stringify(phones))
    this.forceUpdate();
  }
  render() {
    let { numberOfNumbers, generating } = this.state
    let phones = JSON.parse(localStorage.getItem('phones')) || [];

    return (
      <React.Fragment>
      { !phones.length ?
        <form className="select-form" onSubmit={this.generate}>
        <label htmlFor="number">How many phone numbers do you want to generate?</label>
         <input
             className="input"
             id="number"
             type="number"
             min="1"
             value={numberOfNumbers}
             onChange={(e) => {
              if (e.target.value === '') e.target.value = 1
              this.setState({ numberOfNumbers: parseInt(e.target.value)})
            }}
         />
         <button className="button is-primary is-large is-fullwidth">
          { this.state.generating ? 'Generating...' : 'Generate Numbers' }
         </button>
        </form> :
        <PhoneNumbers phones={phones} match={this.props.match}/>
      }
      </React.Fragment>
    );
  }
}


export default Generator;
