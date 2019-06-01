import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import menuData from './menu-data';
import MenuDisplay from './MenuDisplay';
import AdminDisplay from './AdminDisplay';

class Menu extends Component {
    state = { menuData }

    resetMenu = () => {
        console.log('here');
        console.log(menuData);
        this.setState({ menuData });
    }

    editMenu = (i, field, value) => {
        let newMenu = this.state.menuData;
        newMenu.items[i][field] = value;
        
        this.setState({
            menuData: newMenu
        });
    }

    menuComp = () => (
        <MenuDisplay data={this.state.menuData} />
    );

    adminComp = () => (
        <AdminDisplay data={this.state.menuData} editMenu={this.editMenu} resetMenu={this.resetMenu}/>
    );
    
    render(){
        return(
            <>
                <Nav />

                <Switch>
                    <Route path="/" exact component={this.menuComp}/>
                    <Route path="/admin" component={this.adminComp} />
                </Switch>
            </>
        )
    }
}

export default Menu;