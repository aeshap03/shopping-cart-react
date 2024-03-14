
import './App.css';
import Shoppingcart from './Shoppingcart';
import React,{useState} from 'react'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [value,setValue] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = () => {
    if (value.trim() !== "") {
      setCartItems([...cartItems, parseInt(value)]);
      setValue("");
    }
  };

  return (
    <div className="App">
      <input type="number" name="num" placeholder='Enter number' value={value} onChange={(e)=>setValue(e.target.value)} />
      <button onClick={handleAddToCart}>Add</button>
      <Shoppingcart cartItems={cartItems} />
    </div>
  );
}

export default App;
