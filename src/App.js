import './App.css';
import { useSelector } from 'react-redux';

function App() {

    const products = useSelector( (state) => state.products )

  return (
    <div className="App">
      <p> Testshoppingcart </p>
      <br/>
      <b> Cart </b>
      <br/>
      <p> Products </p>
      { products.map( (item, index) => ( <div key={index}> <p> {item.name} </p> <b> GHS{item.price}</b> </div> ) ) }
    </div>
  );
}

export default App;
