import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../generic/config';
import money from '../generic/money';
import graphic from '../generic/cart.svg';

import CartItems from './CartItem';

class Placeholder extends Component {
    render(){
        if (this.props.cartCount <= 0){
            return(
                <div className="placeholder">
                    <h1>Nothing in your cart yet! Go to the <Link to="/" className="placeholder__link">menu</Link> and add some items!</h1>
                    <img className="placeholder__graphic" src={graphic} alt="Empty cart"/>
                </div>
            )
        } else {
            return null;
        }
    }     
}

class CartDisplay extends Component {
    getTax = () => {
        if (this.props.cartCount === 0){
            return 0;
        } else {
            return this.props.totalPrice * .07;
        }
    }

    getSubtotal = () => {
        if (this.props.cartCount === 0){
            return 0;
        } else {
            return this.props.totalPrice;
        }
    }

    getTotal = () => {
        if (this.props.cartCount === 0){
            return 0;
        } else {
            return this.getSubtotal() + this.getTax();
        }
    }

    componentDidMount () {
        // Hide calculations when cart is empty
        if (this.props.cartCount <= 0) {
            document.getElementsByClassName('cart-calc')[0].style.display = "none";
        }
    }
    render(){
        document.title = `${config.title} | Cart`;

        // Hide calculations when cart empty and something was previously added
        if ((this.props.cartCount <= 0) && (document.getElementsByClassName('cart-calc')[0])) {
            document.getElementsByClassName('cart-calc')[0].style.display = "none";
        }
        
        return(
            <main>
                <section className="cart-container">
                    <h1 className="cart-container__header">Review Cart</h1>
                    <Placeholder cartCount={this.props.cartCount} />
                    <div className="cart-container__cart-items-container">
                        <div className="cart-items__wrapper">
                            <CartItems 
                                data={this.props.data} 
                                addToCart={this.props.addItemToCart}
                                removeItemFromCart={this.props.removeItemFromCart}/>    
                        </div>
                        <div className="cart-calc">
                            <div className="cart-calc__calc">
                                <h3>Tax: </h3>
                                <h3 className="cart-calc__value">{money(this.getTax())}</h3>
                            </div>
                            <div className="cart-calc__calc">
                                <h3>Subtotal:</h3>
                                <h3 className="cart-calc__value">{money(this.getSubtotal())}</h3>
                            </div>
                            <div className="cart-calc__calc">
                                <h3 className="cart-calc__total">Total:</h3>
                                <h3 className="cart-calc__value cart-calc__total">{money(this.getTotal())}</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )    
    }
}

export default CartDisplay;