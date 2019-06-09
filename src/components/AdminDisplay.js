import React, { Component } from 'react';
import AdminItems from './AdminItems';
import config from '../generic/config';

class AdminDisplay extends Component {
    render(){
        document.title = `${config.title} | Admin`;

        return(
            <main className="admin__container admin">
                <button className="button button--admin" onClick={this.props.resetMenu}>Reset to default</button>
                <h1 className="admin__header">All changes made below will automatically save</h1>
                <AdminItems deleteItem={this.props.deleteItem} data={this.props.data} editMenu={this.props.editMenu}/>
            </main>
        )    
    }
}

export default AdminDisplay;