import React, { Component } from 'react';

class items extends Component{
    render(){
        const list = this.props.data["items"].map((item, index) => {
            return(
                <div data-index={index} key={index}>
                    <h1>Edit title: {item.title}</h1>
                    <input type="text" placeholder={item.title} id={`title${index}`}></input>
                    <button onClick={() => {
                            this.props.editMenu(
                                index, 
                                "title", 
                                document.getElementById(`title${index}`).value.toString());
                    }}>Submit</button>
                    
                    <h1>Edit description: {item.description}</h1>
                    <input placeholder={item.description} id={`description${index}`}></input>
                    <button onClick={() => {
                            this.props.editMenu(
                                index, 
                                "description", 
                                document.getElementById(`description${index}`).value.toString());
                    }}>Submit</button>
        
                    <h1>Edit price: {`$${item.price.toString()}`}</h1>
                    <input placeholder={item.price.toString()} id={`price${index}`}></input>
                    <button onClick={() => {
                            this.props.editMenu(
                                index, 
                                "price", 
                                document.getElementById(`price${index}`).value);
                    }}>Submit</button>
        
                    <p>------------------</p>
                </div> 
            )
        });
        return list;
    }
}

export default items;