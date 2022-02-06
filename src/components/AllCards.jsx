import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class AllCards extends React.Component {
  render() {
    const { cards } = this.props;
    return (
      <div>
        {
          cards.map((card) => (
            <Card key={ card.cardName } { ...card } />
          ))
        }
      </div>
    );
  }
}

AllCards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AllCards;
