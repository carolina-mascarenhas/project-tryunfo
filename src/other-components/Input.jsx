import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { title, type, dataTestId, id, cardName, inputChange } = this.props;
    return (
      <div>
        {
          cardName === true || cardName === false ? (
            <label htmlFor={ id } className="label">
              {title}
              <input
                type={ type }
                data-testid={ dataTestId }
                id={ id }
                name={ id }
                checked={ cardName }
                onChange={ inputChange }
              />
            </label>
          ) : (
            <label htmlFor={ id } className="label">
              {title}
              <input
                type={ type }
                data-testid={ dataTestId }
                id={ id }
                name={ id }
                value={ cardName }
                onChange={ inputChange }
              />
            </label>
          )
        }
      </div>
    );
  }
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dataTestId: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  cardName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default Input;
