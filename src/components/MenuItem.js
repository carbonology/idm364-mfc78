import React, { Component } from 'react';

class MenuItem extends Component {
    render(){
        const items = this.props.menu["items"].map((item, index) => {
            return(
                <>
                    <h1 key={index}>{item.title}</h1>
                    <p>{item.description}</p>
                    <p>{`$${item.price.toString()}`}</p>
                    <button onClick={() => {
                            this.props.addToCart(item.price);
                    }}>Add to cart</button>
                </>
            ) 
        });
        return items;
    }
}

export default MenuItem;