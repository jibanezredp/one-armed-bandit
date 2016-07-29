import React from 'react';
import { connect } from 'react-redux';
import R from 'ramda';
import Fruit from '../components/Fruit';
import Spinner from '../components/Spinner';

const App = ({ fruits }) => {

  const SpinOrFruit = (fruit) => {
    if (fruit.isLoading) {
      return <Spinner />;
    }
    return <Fruit {...fruit} />;
  };

  return (
    <div className='one-armed-bandit'>
      {R.map(SpinOrFruit)(fruits)}
    </div>
  );
};

App.propTypes = {

};

const mapStateToProps = (state) => ({
  fruits: state.fruits,
});

export default connect(mapStateToProps)(App);
