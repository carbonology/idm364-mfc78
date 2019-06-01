import React, { Component } from 'react';
import MenuItem from './MenuItem';

class MenuDisplay extends Component{
    state = {
        totalPrice: 0.0
    }

    money(num){
        var pos = num.toString().indexOf(".");
        var newMoney = num.toString().substring(0, pos + 3);
        
        if (newMoney.substring(pos, newMoney.length).length < 3){
          return `$${newMoney}0`;
        } else {
          return `$${newMoney}`;
        }
    }

    addToCart = (price) => {
        const total = this.state.totalPrice;
        this.setState({ totalPrice: total + price });
        return total;
    }

    render(){
        return(
            <>
                <MenuItem menu={this.props.data} addToCart={this.addToCart}/>
                                
                <h1>CART</h1>
                <p>-------------</p>
                <h2>Tax: {this.money(this.state.totalPrice * .07)}</h2>
                <h2>{this.money(this.state.totalPrice)}</h2>
            </>
        )
    }
}

export default MenuDisplay;