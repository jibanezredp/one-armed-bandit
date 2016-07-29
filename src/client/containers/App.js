import React from 'react';
import { connect } from 'react-redux';
import R from 'ramda';
import Fruit from '../components/Fruit';

const App = ({ fruits }) => {

  const fruitElems = (fruit) => <Fruit {...fruit} key={fruit.id} />;

  return (
    <div className='one-armed-bandit'>
      {R.values(R.map(fruitElems)(fruits))}
    </div>
  );
};

App.propTypes = {
  fruits: React.PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  fruits: state,
});

export default connect(mapStateToProps)(App);
