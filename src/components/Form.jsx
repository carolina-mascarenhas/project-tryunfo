import React from 'react';
import './component.css';
import PropTypes from 'prop-types';

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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;

    return (
      <>
        <h1>Adicionar nova carta</h1>
        <form>
          <label htmlFor="card-name" className="titulo2">
            Nome
            <input
              type="text"
              data-testid="name-input"
              id="card-name"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="card-description" className="titulo2">
            Descrição
            <textarea
              data-testid="description-input"
              id="card-description"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="first-att" className="titulo2">
            Attr01
            <input
              type="number"
              data-testid="attr1-input"
              id="first-att"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="second-att" className="titulo2">
            Attr02
            <input
              type="number"
              data-testid="attr2-input"
              id="second-att"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="third-att" className="titulo2">
            Attr03
            <input
              type="number"
              data-testid="attr3-input"
              id="third-att"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="url-image" className="titulo2">
            Imagem
            <input
              type="text"
              data-testid="image-input"
              id="url-image"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="card-rare" className="titulo2">
            Raridade
            <select
              data-testid="rare-input"
              id="card-rare"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="super-trunfo" className="titulo2">
            Super Trybe Trunfo
            <input
              type="checkbox"
              data-testid="trunfo-input"
              id="super-trunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </>
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
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
