import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {

  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  Prompt = (e) => {
    let location = prompt("what is your location?", "Tel Aviv");
    if(location) {
      this.editItem(e.target.value, location)
    }
    
  }
  editItem = (name, location) => {
    this.props.store.editItem(name, location)
  }
  deleteItem = (e) => {
    this.props.store.deleteItem(e.target.value)
    //your code here
  }
  render() {
    
    return (
      <div className={this.props.item.completed ? "crossed" : null}>
        <input type="checkbox" value={this.props.item.name} onClick={this.checkItem} />
         {this.props.item.name} {this.props.item.location}
         <button className="editButton" value={this.props.item.name} onClick={this.Prompt}>Change Location</button>
         <button className="deleteItem" value={this.props.item.name} onClick={this.deleteItem} >Delete</button> 
      </div>)
  }
}

export default Item

/*   your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
      */