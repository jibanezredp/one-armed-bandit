import React from 'react';

const Fruit = ({ color, name }) => <div className='fruit'>{color}{name}</div>;

Fruit.propTypes = {
  color: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
};

export default Fruit;
