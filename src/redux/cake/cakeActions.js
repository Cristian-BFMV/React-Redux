import { BUY_CAKE } from './cakeTypes';

const buyCake = (numberOfCakes = 1) => ({
  type: BUY_CAKE,
  payload: numberOfCakes,
});

export default buyCake;
