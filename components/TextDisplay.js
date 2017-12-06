import React, { Component } from 'react';

class TextDisplay extends Component {

    constructor() {
    super();
    this.state = {
        TextDisplayValue: 'Inicializado',
        TextDisplayOtherValue: 'OtherValueInicializado'
        };
    }

    handleClick() {
        console.log('Borra una Letra clicked');
        this.props.deleteLetter();
    }

    render() {
        return (
            <div>TextDisplay this.props.text: {this.props.text}
            <button onClick={this.handleClick.bind(this)}>Borra una Letra</button>
            </div>
        );
    }
}

export default TextDisplay;
