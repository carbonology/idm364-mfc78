import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import money from './money';
import graphic from '../cart.svg';

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

class CartItems extends Component {
    increaseCount = (price, itemIndex) => {
        this.props.editCartCount(true);
        this.props.adjustTotal(true, price);
        this.props.editCart(itemIndex);
    }

    decreaseCount = (price, itemIndex, count) => {
        if (count <= 0){
            this.props.removeFromCart(itemIndex);
        } else {
            this.props.editCartCount(false);
            this.props.adjustTotal(false, price);
            this.props.editCart(itemIndex, true);
        }
        
    }

    render(){
        const items = this.props.data.map((item, index) => {
            return(
                <div className="cart-item" key={index} data-index={item.index}>
                    <div className="cart-item__top">
                        <h1 className="cart-item__title">{item.title}</h1>
                        <div className="cart-item__counter">
                            <p>{item.count}</p>
                            <div className="cart-item__arrows">
                                <div className="arrow" onClick={ () => {this.increaseCount(item.price, item.index)} }>
                                    <svg aria-hidden="true" focusable="false" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                                </div>
                                <div className="arrow arrow--down" onClick={ () => {this.decreaseCount(item.price, item.index, item.count)} }>
                                    <svg aria-hidden="true" focusable="false" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="cart-item__item-price">{money(item.count * item.price)}</p>
                </div>
            ) 
        });
        return items;
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
    render(){
        document.title = `${config.title} | Cart`;

        return(
            <>
                <section className="cart-container">
                    <h1 className="cart-container__header">Review Cart</h1>
                    <Placeholder cartCount={this.props.cartCount} />
                    <CartItems 
                        data={this.props.data} 
                        editCartCount={this.props.editCartCount} 
                        adjustTotal={this.props.adjustTotal} 
                        editCart={this.props.editCart}
                        removeFromCart={this.props.removeFromCart}/>
                    
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
                </section>
            </>
        )    
    }
}

export default CartDisplay;