"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { ImCart } from "react-icons/im";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity} from '../store/slices/cartSlice';
import Link from 'next/link'
import { useResult } from "./Hooks/shippingContext";



function Cart(props) {
  const [show, setShow] = useState(false);
  const [result, setResult] = useResult();
  const items = useSelector((state) => state.cart?.items || []);

  const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const dispatch = useDispatch()

  /* const {
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    isEmpty,
    totalItems,
  } = useCart(); */

  const handleSelect = (e) => {
    setResult(e.target.value);
  };


  const handleIncrement = (id, currentQty) => {
    dispatch(updateQuantity({ id, quantity: currentQty + 1 }));
  };

  const handleDecrement = (id, currentQty) => {
    if (currentQty > 1) {
      dispatch(updateQuantity({ id, quantity: currentQty - 1 }));
    }
    else{
      dispatch(removeFromCart(id))
    }
  };

  const val = parseInt(result)
  const totalres = totalPrice + val;

  if (items.length == 0) {
    return (
      <div className="contner_1" style={{display: 'none'}}>
        <div className="cartA">
          <h1>The cart is Empty</h1>
        </div>
      </div>
    );
  }
  const handleCart = () => {
    return setShow(!show);
  };

  return (
    <div className="cart">
      <div className="btncart">
        <button style={{background:'transparent'}} onClick={handleCart}>
          <ImCart className="ctlgo" />
          <span>{items.length}</span>
        </button>
      </div>
      {show && ( 
        <div className="contner_1">
          <div className="cartA">
            <div className="items-in-the-bag">
              <div className="cartB">
                <h1>Shopping Cart</h1>
                <p>{items.length} items</p>
              </div>
              <div className="itemss">
                {items.map((item, index) => {
                  return (
                    <div key={index} className="cartC">
                      <div className="cimg">
                      <img src={item.img} alt="img" />
                      </div>
                      <div className="text">
                        <p>{item.brand}</p>
                        <h3>{item.name}</h3>
                        <p className="perice">${item.price * item.quantity}</p>
                      </div>
                      <div className="cartD">
                        <button
                          onClick={() => handleDecrement(item.id , item.quantity)}
                        >
                          -
                        </button>
                        <div>{item.quantity}</div>
                        <button
                          onClick={() => handleIncrement(item.id , item.quantity)}
                        >
                          +
                        </button>
                      </div>
                      <p className="rice">${item.price * item.quantity}</p>
                      <div className="cartE">
                        <button
                          className="smallbtn"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          <FontAwesomeIcon icon={faX} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="backhomebtn">
                <button style={{display:'flex', height:'12px'}} onClick={handleCart}>
                  <span><FontAwesomeIcon style={{ marginRight:'7px'}} icon={faArrowLeft} /></span>
                  <span className="nono">Back to Home</span> 
                </button>
              </div>
            </div>
            <div className="carttotal">
              <div className="t">
                <div className="summary">
                  <h1>summary</h1>
                </div>
                <div className="subtotal">
                  <div className="item-price">
                    <h3>Items {items.length}</h3>
                    <h3>${totalPrice.toFixed(2)}</h3>
                  </div>
                  <div className="choices">
                    <label>SHIPPING</label>
                    <select value={result} onChange={handleSelect}>
                      <option value='5'>
                        Standard-Delivery (7-10 Shipping days)- $5
                      </option>
                      <option value='9'>
                        Special-Delivery (2-5 Shipping days)- $9
                      </option>
                    </select>
                    <label className="nile">GIVE CODE</label>
                    <input className='nile' type="text" placeholder=" Enter your code" />
                  </div>
                  <div className="tpc">
                    <div className="tp">
                      <h3>Total Price</h3>
                      <h3>{`$ ${totalres.toFixed(2)}`}</h3>
                    </div>
                    <button className="btncheck" onClick={() =>{ window.location.href = '/Checkout' }}>
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
