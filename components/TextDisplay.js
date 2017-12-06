import React, { Component } from 'react';

class TextDisplay extends Component {

    constructor() {
    super();
    this.state = {
        TextDisplayValue: 'Inicializado',
        TextDisplayOtherValue: 'OtherValueInicializado'
        };
    }

    render() {
        return (
            <div>TextDisplay this.props.text: {this.props.text} </div>
        );
    }
}

export default TextDisplay;
