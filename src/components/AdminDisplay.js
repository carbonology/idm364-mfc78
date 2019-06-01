import React, { Component } from 'react';
import AdminItems from './AdminItems';

class AdminDisplay extends Component {
    render(){
        return(
            <>
                <AdminItems data={this.props.data} editMenu={this.props.editMenu} />
                <button onClick={this.props.resetMenu}>Reset to default</button>
            </>
        )    
    }
}

export default AdminDisplay;