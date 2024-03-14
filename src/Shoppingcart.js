

import React, { useState } from "react";
import img from "./jc-bggf-11144a-738x800.webp";

function TotalShoppingcart({ cartItems }) {
  const totalItems = cartItems.length;

  console.log(totalItems);
}

const Shoppingcart = () => {
  const [products, setProducts] = useState([]);

  const increment = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].quantity++;
    setProducts(updatedProducts);
  };

  const decrement = (index) => {
    const updatedProducts = [...products];
    if (updatedProducts[index].quantity > 0) {
      updatedProducts[index].quantity--;
    }
    setProducts(updatedProducts);
  };

  const addItem = () => {
    const newProduct = {
      id: products.length + 1,
      quantity: 0,
      price: generateRandomNumber(),
    };
    setProducts([...products, newProduct]);
  };

  const generateRandomNumber = () => {
    const min = 1;
    const max = 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <>
      <div className="container">
        <div className="cart">
          <div className="total d-flex justify-content-between mt-3 border-2">
            <p>Order</p>
            <p>Edit</p>
          </div> 
          <div className="items">
            <div className="d-flex border-1">
              <a href="#" className="logo">
                <img src={img} width={90} alt="" />
              </a>
              <div>
                <h6 className="mt-3">Item 1</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mt-2">Delivery 24th July</p>
                  <div className="ms-4 d-flex text-center align-items-center">
                    <h4 onClick={() => decrement(0)}>-</h4>
                    <h5 className="mx-4 border p-2">{products[0] ? products[0].quantity : 0}</h5>
                    <h4 className="text-info" onClick={() => increment(0)}>+</h4>
                    <h5 className="ms-5 mt-1 " onClick={() => addItem(0)} >${products[0] ? products[0].price : 0}</h5>
                  </div>  
                </div>
                {/* <button className="btn btn-primary" onClick={() => addItem(0)}>Add to Cart</button> */}
              </div>
            </div>
            {/* Repeat this block for other items */}
          </div>
          <div className="total d-flex justify-content-between mt-3">
            <p>Subtotal</p>
            <p>${products.reduce((total, product) => total + product.quantity * product.price, 0)}</p>
          </div>
          {/* <div className="total d-flex justify-content-between">
            <p>Shipping</p>
            <p>${products.reduce((total, product) => total + product.quantity * product.price, 0)}</p>
          </div> */}
          <div className="total d-flex justify-content-between ">
            <p>Total</p>
            <p>${products.reduce((total, product) => total + product.quantity * product.price, 0)}</p>
          </div>
          <button type="button" className="btn btn-info w-100">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default Shoppingcart;

