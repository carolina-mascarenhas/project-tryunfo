import React from 'react';
import './components/components.css';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value, type, checked } }) {
    if (type === 'checkbox') {
      return this.setState(({
        [name]: checked,
      }), this.checkValidation);
    }
    return this.setState(({
      [name]: value,
    }), this.checkValidation);
  }

  checkInputs() {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;
    const arr = [cardName, cardDescription, cardImage, cardRare];
    const validation = arr.every((state) => state !== '');
    return validation;
  }

  checkSum() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const arr = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];
    const maxSum = 210;
    const maxEach = 90;
    const validation = arr.reduce((acc, valor) => {
      acc += valor;
      return acc;
    });
    const validation2 = arr.every((attr) => attr <= maxEach && attr >= 0);
    if (validation <= maxSum && validation2) {
      return true;
    }
    return false;
  }

  checkValidation() {
    const a = this.checkInputs();
    const b = this.checkSum();
    if (a === true && b === true) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div className="components">
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          onInputChange={ this.handleChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
