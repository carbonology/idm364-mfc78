import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import menuData from './menu-data';
import MenuDisplay from './MenuDisplay';
import AdminDisplay from './AdminDisplay';
import CartDisplay from './CartDisplay';

class Menu extends Component {
    state = { 
        menuData,
        cartItems: [],
        totalPrice: 0.0,
        cartCount: 0
    }

    adjustTotal = (isAdding, price) => {
        const total = this.state.totalPrice;

        if (isAdding) {
            return this.setState({ totalPrice: total + price });
        } else {
            return this.setState({ totalPrice: total - price });
        }
    }

    editCartCount = (isAdding) => {
        if (isAdding) {
            return this.setState({ cartCount: this.state.cartCount + 1 });
        } else {
            return this.setState({ cartCount: (this.state.cartCount - 1) });
        }
    }

    removeFromCart = (itemIndex) => {
        let cart = this.state.cartItems;
        let removeValue = null;

        cart.forEach((item, i) => {
            if (item.index === itemIndex){
                return removeValue = i;
            }
        });
        cart.splice(removeValue, 1);
        this.setState({ cartItems: cart });
    }

    resetMenu = () => {
        this.setState({ menuData });
    }

    editMenu = (i, field, value) => {
        let newMenu = this.state.menuData;
        newMenu.items[i][field] = value;
        
        this.setState({
            menuData: newMenu
        });
    }

    editCartData = (index, _isRemoving) => {
        let added = false;
        let cart = this.state.cartItems;
        let itemToAdd = this.state.menuData.items[index];
            itemToAdd.index = index;
        
        cart.forEach((item, i) => {
            if (itemToAdd.index === item.index){
                if (!_isRemoving){
                    cart[i].count++; 
                } else {
                    cart[i].count--;
                }
                
                added = true;
            }
        });
        
        if (added){
            return this.setState({ cartItems: cart });
        } else {
            itemToAdd.count = 1;
            cart.push(itemToAdd);
            return this.setState({ cartItems: cart });
        }
    }

    menuComp = () => (
        <MenuDisplay 
            data={this.state.menuData}
            editCart={this.editCartData}
            editCartCount={this.editCartCount}
            cartCount={this.state.cartCount}
            adjustTotal={this.adjustTotal}
            totalPrice={this.state.totalPrice}/>
    );

    adminComp = () => (
        <AdminDisplay 
            data={this.state.menuData}
            editMenu={this.editMenu}
            resetMenu={this.resetMenu}/>
    );

    cartComp = () => (
        <CartDisplay 
            data={this.state.cartItems}
            editCart={this.editCartData}
            editCartCount={this.editCartCount}
            cartCount={this.state.cartCount}
            adjustTotal={this.adjustTotal}
            totalPrice={this.state.totalPrice}
            removeFromCart={this.removeFromCart} />
    )
    
    render(){
        return(
            <>
                <Nav />

                <Switch>
                    <Route path="/" exact component={this.menuComp}/>
                    <Route path="/admin" component={this.adminComp} />
                    <Route path="/cart" component={this.cartComp} />
                </Switch>
            </>
        )
    }
}

export default Menu;