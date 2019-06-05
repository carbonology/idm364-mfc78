import React, { Component } from 'react';

class items extends Component{
    handleChange = (event, index, field) => {
        this.props.editMenu(event.target.value, index, field);
    }

    changeAvailability = (index) => {
        const check = document.getElementById(`${index}C`).checked;
        this.props.editMenu(!check, index, 'isAvailable');
    }

    render(){
        const list = this.props.data["items"].map((item, index) => {
            return(
                <div className="admin-item" data-index={index} key={index}>
                    <input type="text" placeholder={item.title} onChange={(event) => this.handleChange(event, index, 'title')}></input>
                    
                    <textarea placeholder={item.description} onChange={(event) => this.handleChange(event, index, 'description')}></textarea>
        
                    <input placeholder={item.price.toString()} onChange={(event) => this.handleChange(event, index, 'price')}></input>

                    <label>Sold Out?
                        <input type="checkbox" id={`${index}C`} checked={!item.isAvailable} onChange={() => this.changeAvailability(index)} />
                    </label>
        
                </div> 
            )
        });
        return list;
    }
}

export default items;