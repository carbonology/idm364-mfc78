import React, { Component } from 'react';
import money from '../generic/money';

class CartItems extends Component {
    increaseCount = (itemIndex) => {
        this.props.addToCart(itemIndex);
    }

    decreaseCount = (itemIndex) => {
        this.props.removeItemFromCart(itemIndex);
    }

    render(){
        const items = this.props.data.items.map((item, index) => {
            if (item.cartCount && item.isAvailable){
                return(
                    <div className="cart-item" key={index} data-index={item.index}>
                        <div className="cart-item__top">
                            <img className="cart-item__img" src={item.image} alt={item.title} />
                            <h1 className="cart-item__title">{item.title}</h1>
                            <div className="cart-item__counter">
                                <p>{item.cartCount}</p>
                                <div className="cart-item__arrows">
                                    <div className="arrow" onClick={ () => {this.increaseCount(index)} }>
                                        <svg aria-hidden="true" focusable="false" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                                    </div>
                                    <div className="arrow arrow--down" onClick={ () => {this.decreaseCount(index)} }>
                                        <svg aria-hidden="true" focusable="false" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="cart-item__item-price">{money(item.cartCount * item.price)}</p>
                    </div>
                )
            } else {
                return null;
            }
        });
            
        return items;
    }
}

export default CartItems;