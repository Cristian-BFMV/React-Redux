import React from 'react';
import { connect } from 'react-redux';
import { buyIceCream } from '../redux/index';

const IceCreamContainer = ({ numOfIceCreams, buyIceCream }) => {
  return (
    <div>
      <h2>Number of icecream - {numOfIceCreams}</h2>
      <button onClick={buyIceCream}>Buy icecream</button>
    </div>
  );
};

const mapStateToProps = state => ({
  numOfIceCreams: state.iceCream.numOfIceCreams,
});

const mapDispatchToProps = dispatch => ({
  buyIceCream: () => dispatch(buyIceCream()),
});

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
