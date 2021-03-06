import React, { Component } from 'react';

class MenuItem extends Component {
    render(){
        const items = this.props.menu["items"].map((item, index) => {
            if (item.isAvailable) {
                return(
                    <div className="menu-item" key={index}>
                        <div className="menu-item__top">
                            <h1>{item.title}</h1>
                            <p>{`$${item.price.toString()}`}</p>
                        </div>
                        <img className="menu-item__img" src={item.image} alt={item.title} />
                        <p className="menu-item__description">{item.description}</p>
                       
                        <button onClick={() => {
                                this.props.addToCart(item.price, index);
                        }}>Add to cart</button>
                    </div>
                ) 
            } else {
                return null;
            }
            
        });
        return items;
    }
}

export default MenuItem;