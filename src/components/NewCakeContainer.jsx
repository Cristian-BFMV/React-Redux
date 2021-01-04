import React, { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/index';

const NewCakeContainer = ({ numOfCakes, buyCake }) => {
  const [numberOfCakes, setNumberOfCakes] = useState(0);

  const handleChange = e => {
    setNumberOfCakes(e.target.value);
  };
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <input type="text" value={numberOfCakes} onChange={handleChange} />
      <button onClick={() => buyCake(numberOfCakes)}>Buy cake</button>
    </div>
  );
};

const mapStateToProps = state => ({
  numOfCakes: state.cake.numOfCakes,
});

const mapDispatchToProps = dispatch => ({
  buyCake: numberOfCakes => dispatch(buyCake(numberOfCakes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
