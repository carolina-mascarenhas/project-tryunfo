import React from 'react';
import PropTypes from 'prop-types';
import Input from '../other-components/Input';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="container">
        <h1>Adicionar nova carta</h1>
        <form className="form">
          <Input
            title="Nome"
            type="text"
            dataTestId="name-input"
            id="cardName"
            cardName={ cardName }
            inputChange={ onInputChange }
          />

          <label htmlFor="card-description" className="label">
            Descrição
            <textarea
              data-testid="description-input"
              id="card-description"
              name="cardDescription"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <Input
            title="Attr01"
            type="number"
            dataTestId="attr1-input"
            id="cardAttr1"
            cardName={ cardAttr1 }
            inputChange={ onInputChange }
          />

          <Input
            title="Attr02"
            type="number"
            dataTestId="attr2-input"
            id="cardAttr2"
            cardName={ cardAttr2 }
            inputChange={ onInputChange }
          />

          <Input
            title="Attr03"
            type="number"
            dataTestId="attr3-input"
            id="cardAttr3"
            cardName={ cardAttr3 }
            inputChange={ onInputChange }
          />

          <Input
            title="Imagem"
            type="text"
            dataTestId="image-input"
            id="cardImage"
            cardName={ cardImage }
            inputChange={ onInputChange }
          />

          <label htmlFor="card-rare" className="label">
            Raridade
            <select
              data-testid="rare-input"
              id="card-rare"
              name="cardRare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>

          { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : (
            <Input
              title="Super Trybe Trunfo"
              type="checkbox"
              dataTestId="trunfo-input"
              id="cardTrunfo"
              cardName={ cardTrunfo }
              inputChange={ onInputChange }
            />
          )}
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
