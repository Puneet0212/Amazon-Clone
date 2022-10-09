import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';
import {Link} from "react-router-dom";

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (<Link to="/checkout">{basket?.length} items</Link>)
                </h1>
                {/* Payment section - Delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>457 React Lane</p>
                        <p>San Diego, CA-92115</p>
                    </div>
                </div>

                {/* Payment section - Review items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and Delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section - Payment Method */}
                <div className='payment__section'>
                    <div className='payment__tille'>
                        <h3>
                            Payment Method
                        </h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will go here  */}
                    </div>

                </div>          
            </div>
            
        </div>
    )
}

export default Payment
