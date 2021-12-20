import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css'

const Cart = () => {
    const carts = useSelector((state) => state.cart.value);
    return (
        carts.length ?
            <div className='cart-container sticky-top'>
                <h4>Cart</h4>
                {
                    carts.map(cart => {
                        return <div className='d-flex cart' key={cart.id}>
                            <img src={cart.thumbnail} alt="laptop pic" className='img-fluid' />
                            <div className="cart-details">
                                <h2>{cart.name}</h2>
                                <h4>Price: {cart.price}</h4>
                            </div>
                        </div>
                    })
                }

            </div>
            : ""
    );
};

export default Cart;