import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

const ItemContainer = ({ item, buyItem }) => {
  return (
    <div>
      <h2>Item - {item}</h2>
      <button onClick={buyItem}>Buy Item</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  item: ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  buyItem: ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
