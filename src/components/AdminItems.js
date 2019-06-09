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
                <div className="admin__item" data-index={index} key={index}>
                    <p>#{index+1}</p>
                    <div className="admin__input-section">
                        <input id={`t${index}`} className="admin__input" type="text" placeholder={item.title} onChange={(event) => this.handleChange(event, index, 'title')}></input>
                        <label htmlFor={`t${index}`} className="admin__item-label">Title</label>
                    </div>
                    
                    <div className="admin__input-section">
                        <textarea id={`d${index}`} placeholder={item.description} onChange={(event) => this.handleChange(event, index, 'description')}></textarea>
                        <label htmlFor={`d${index}`} className="admin__item-label">Description</label>
                    </div>

                    <div className="admin__input-section">
                        <input id={`p${index}`} className="admin__input" placeholder={item.price.toString()} onChange={(event) => this.handleChange(event, index, 'price')}></input>
                        <label htmlFor={`p${index}`} className="admin__item-label">Price</label>
                    </div>

                    <div className="admin__input-section">
                        <input id={`i${index}`} className="admin__input" placeholder={item.image} onChange={(event) => this.handleChange(event, index, 'image')}></input>
                        <label htmlFor={`i${index}`} className="admin__item-label">Image path</label>
                    </div>

                    <div className="admin__input-section">
                        <label>Sold Out?
                            <input className="admin__sold" type="checkbox" id={`${index}C`} checked={!item.isAvailable} onChange={() => this.changeAvailability(index)} />
                        </label>
                    </div>

                    <div className="admin__input-section">
                        <button className="button admin__button" onClick={() => this.props.deleteItem(index)}>Delete</button>
                    </div>
                </div> 
            )
        });
        return list;
    }
}

export default items;