# React-Redux

React-Redux es una libreria que nos permite usar todos los conceptos de Redux junto con React, esta libreria nos provee de funcionalidades para interactuar con el store de Redux desde los componentes de React.

## Provider

React-Redux ofrece un componente llamado provider el cual nos permite tener disponible el store de Redux en toda la aplicación de React.

```js
import React from 'react';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
};
```

## connect

Connect es una high order component el cual nos sirve para conectar un componente de React al store de Redux, esto los hace a través de dos funciones que recibe como parámetro, las cuales son:

### mapStateToProps

Esta función recibe como parámetro el estado de la aplicación el cual proviene del store de Redux y mapea los atributos que deseemos a los props del componente.

```js
const mapStateToProps = state => ({
  numOfCakes: state.numOfCakes,
});
```

### mapDispatchToProps

Esta función recibe como parámetro la función dispatch del store de Redux, la cual nos servira para crear funciones que modifiquen el estado del store, finalmente como en el caso anterior estas funciones son pasadas como props al componente.

Nota: este segundo parámetro puede ser una función o un objeto.

```js
const mapDispatchToProps = dispatch => ({
  buyCake: () => dispatch(buyCake()),
});
```

Teniendo estas dos funciones definidas podemos hacer uso de connect de la siguiente forma.

```js
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
```

Con esto podremos hacer uso del estado retornado por la función mapStateToProps y de la función retornada por mapDispatchToProps en el componente cakeContainer.

```js
const CakeContainer = ({ numOfCakes, buyCake }) => {
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={buyCake}>Buy cake</button>
    </div>
  );
};
```

## React-Redux Hooks

En las últimas versiones de React-Redux se agregaron Hooks que permiten que componentes funcionales puedan acceder el estado de la aplicación y al método dispatch del store.

### useSelector

Este hook funciona un poco similar a la función mapStateToProps, basicamente este hook recibe una función que obtiene el estado de la aplicación y debe devolver la pieza de estado que deseemos obtener en el componente.

```js
import React from 'react';
import { useSelector } from 'react-redux';

const HooksCakeContainer = () => {
  const numOfCakes = useSelector(state => state.numOfCakes);
  return (
    <div>
      <h2>Number of cakes(hooks) - {numOfCakes}</h2>
      <button>Buy cake</button>
    </div>
  );
};

export default HooksCakeContainer;
```

## useDispatch

La función de este hook es obtener la función dispatch del store de Redux para poder cambiar el estado de la aplicación.

```js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/index';

const HooksCakeContainer = () => {
  const numOfCakes = useSelector(state => state.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes(hooks) - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>
    </div>
  );
};

export default HooksCakeContainer;
```
