import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import initalData from './menu-data';
import MenuDisplay from './MenuDisplay';
import AdminDisplay from './AdminDisplay';
import CartDisplay from './CartDisplay';

class Menu extends Component {
    state = { 
        menuData: initalData,
        totalPrice: 0.0,
        cartCount: 0
    }
    
    resetMenu = () => {
        this.setState({ menuData: initalData });
    }

    editMenu = (value, i, field) => {
        // Jank way to make sure im copying the data and not editing the reference of the variable
        let tmpMenu = JSON.parse(JSON.stringify(this.state.menuData));
            tmpMenu.items[i][field] = value;
        
        // Waits for state to update before executing price update
        (async () => {
            await this.setState({ menuData: tmpMenu });
            this.adjustTotalPrice();
        })();
    }

    adjustTotalPrice = () => {
        const data = this.state.menuData.items;
        let price = 0;
        console.log('GO');
        data.forEach(item => {
            console.log(item.isAvailable);
            if (("cartCount" in item) && (item.isAvailable)) {
                price = price + item.cartCount * item.price;
            }
        });
        this.setState({ totalPrice: price });
    }

    cartCount = () => {
        const data = this.state.menuData.items;
        let count = 0;
        data.forEach(item => {
            if (("cartCount" in item) && (item.isAvailable)) {
                count = count + item.cartCount;
            }
        });

        return count;
    }

    addItemToCart = (itemIndex) => {
        let newMenuData = this.state.menuData;
        let item = newMenuData.items[itemIndex];

        // Checks if property is there, adds 1 or sets 1
        if ("cartCount" in item) {
            item.cartCount++;
        } else {
            item.cartCount = 1;
        }
        newMenuData[itemIndex] = item;
        
        this.setState({ newMenuData });
        this.adjustTotalPrice();
    }

    removeItemFromCart = (itemIndex) => {
        let newMenuData = this.state.menuData;
        let item = newMenuData.items[itemIndex];

        item.cartCount--;
       
        newMenuData[itemIndex] = item;
        this.setState({ newMenuData });
        this.adjustTotalPrice();
    }

    menuComp = _ => (
        <MenuDisplay 
            data={this.state.menuData}
            cartCount={this.cartCount()}
            totalPrice={this.state.totalPrice}
            addItemToCart={this.addItemToCart}/>
    );

    adminComp = _ => (
        <AdminDisplay 
            data={this.state.menuData}
            editMenu={this.editMenu}
            resetMenu={this.resetMenu}
            recalculatePrice={this.adjustTotalPrice}/>
    );

    cartComp = _ => (
        <CartDisplay 
            data={this.state.menuData}
            totalPrice={this.state.totalPrice}
            cartCount={this.cartCount()}
            addItemToCart={this.addItemToCart} 
            removeItemFromCart={this.removeItemFromCart}/>
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