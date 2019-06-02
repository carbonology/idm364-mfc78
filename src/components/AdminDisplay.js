import React, { Component } from 'react';
import AdminItems from './AdminItems';
import config from '../config';

class AdminDisplay extends Component {
    render(){
        document.title = `${config.title} | Admin`;

        return(
            <>
                <AdminItems data={this.props.data} editMenu={this.props.editMenu} />
                <button onClick={this.props.resetMenu}>Reset to default</button>
            </>
        )    
    }
}

export default AdminDisplay;