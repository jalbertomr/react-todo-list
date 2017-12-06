import React, { Component } from 'react';
import TextDisplay from './TextDisplay';

class TextInput extends Component {

    constructor() {
        super();
        this.state = {
            TextInputValue: 'inicializado',
            TextInputOtherValue: 'OtherValInitialized'
        };
    }

    deleteLetter() {
      this.setState(
      { TextInputValue: this.state.TextInputValue.substr(0, this.state.TextInputValue.length - 1) }
      );
      console.log('delete letter');
    }

    handleChange(event) {
        this.setState({ TextInputValue: event.target.value });
    }

    render() {
        return (
        <div>
            <input
            type='text'
            placeholder='TextInput component'
            value={this.state.TextInputValue}
            onChange={this.handleChange.bind(this)}
            /><br />
            Component TextDisplay->
            <TextDisplay
              text={this.state.TextInputValue}
              deleteLetter={this.deleteLetter.bind(this)}
            />
        </div>
        );
    }
}

export default TextInput;
