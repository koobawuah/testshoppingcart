import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from './reducers/cartSlice';

function App() {

    const dispatch = useDispatch()
    const products = useSelector( (state) => state.products )
    const cart = useSelector( (state) => state.cart );

  return (
    <div className="App">
      <p> Testshoppingcart </p>
      <br/>
      <b> Cart </b>
      { cart.map( 
          (cartItem, index) => ( 
            <div key={index}> 
              <p> {cartItem.name} - <b> GHS{cartItem.price}</b> </p> 
             <button onClick={ () => console.log(index)}>
                Remove from Cart 
              </button>  
            </div> 
            ) 
        ) 
      }
      <br/>
      <b> Products </b>
      { products.map( 
          (item, index) => ( 
            <div key={index}> 
              <p> {item.name} </p> 
              <b> GHS{item.price}</b> 
              <button onClick={ () => dispatch(addToCart(item)) }>
                Add to Cart 
              </button>  
            </div> 
            ) 
        ) 
      }
    </div>
  );
}

export default App;
