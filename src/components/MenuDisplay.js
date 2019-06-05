import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import config from '../config';
import money from './money';

class MenuDisplay extends Component{
    addToCart = (price, index) => {
        this.props.addItemToCart(index);
    }

    itemCountDisplay = () => {
        if (this.props.cartCount === 1){
            return `${this.props.cartCount} Item`;
        } else {
            return `${this.props.cartCount} Items`;
        }
    }

    render(){
        document.title = `${config.title} | Menu`;

        return(
            <>
                <section className="menu-container">
                    <MenuItem menu={this.props.data} addToCart={this.addToCart}/>
                </section>    
                
                <section className="cart-bar-container cart-bar">
                    <h2>{this.itemCountDisplay()}</h2>
                    <h2>Subtotal: {money(this.props.totalPrice)}</h2>
                    <div className="cart-bar__link-container">
                        <Link className="cart-bar__link" to="/cart">View Cart</Link>
                        <svg className="cart-bar__arrow" aria-hidden="true" focusable="false" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                    </div>
                </section>
            </>
        )
    }
}

export default MenuDisplay;