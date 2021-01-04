import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/index';

const HooksCakeContainer = () => {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes(hooks) - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
};

export default HooksCakeContainer;
