import React from 'react';
import './component.css';

class Form extends React.Component {
  render() {
    return (
      <>
        <h1>Adicionar nova carta</h1>
        <form>
          <label htmlFor="card-name" className="titulo2">
            Nome
            <input type="text" data-testid="name-input" id="card-name" />
          </label>
          <label htmlFor="card-description" className="titulo2">
            Descrição
            <textarea data-testid="description-input" id="card-description" />
          </label>
          <label htmlFor="first-att" className="titulo2">
            Attr01
            <input type="number" data-testid="attr1-input" id="first-att" />
          </label>
          <label htmlFor="second-att" className="titulo2">
            Attr02
            <input type="number" data-testid="attr2-input" id="second-att" />
          </label>
          <label htmlFor="third-att" className="titulo2">
            Attr03
            <input type="number" data-testid="attr3-input" id="third-att" />
          </label>
          <label htmlFor="url-image" className="titulo2">
            Imagem
            <input type="text" data-testid="image-input" id="url-image" />
          </label>
          <label htmlFor="card-rare" className="titulo2">
            Raridade
            <select data-testid="rare-input" id="card-rare">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>
          <label htmlFor="super-trunfo" className="titulo2">
            Super Trybe Trunfo
            <input type="checkbox" data-testid="trunfo-input" id="super-trunfo" />
          </label>
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </>
    );
  }
}

export default Form;
