import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Features/cart';
import './Product.css';
const Product = ({ product }) => {
    const { name, price, thumbnail, key_features } = product;
    const dispatch = useDispatch();


    return (
        <div className="col-md-4 my-4">
            <div className='p-4 shadow p-container'>
                <div>
                    <img className='img-fluid' src={thumbnail} alt="" />
                </div>

                <div>
                    <h4>{name}</h4>
                    <strong>{price}</strong>
                    <p>{key_features.slice(0, 200)}...</p>

                    <div className='text-center'>
                        <button onClick={() => dispatch(addToCart(product))} className='btn btn-regular position-relative mx-2 fw-bold'>Add To Cart</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;