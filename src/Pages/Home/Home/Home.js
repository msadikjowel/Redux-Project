import React from 'react';
import Cart from '../../Shared/Cart/Cart';
import Nav from '../../Shared/Nav/Nav';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-9">
                        <Products></Products>
                    </div>
                    <div className="col-md-3">
                        <Cart></Cart>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Home;