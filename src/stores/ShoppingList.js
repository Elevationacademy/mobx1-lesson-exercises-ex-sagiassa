import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    } 
    @action addItem = (name) => {
        let item = new Item(name)
        this.list.push(item)
        // your code here
    }
    @action editItem = (name, location) => {
        let item = this.list.find(i => i.name === name)
        item.location = location
        // your code here
    }
    @action deleteItem = (name) => {
        let index = this.list.findIndex(i => i.name === name)
        console.log(index)
        // console.log(name)
        this.list.splice(index,1)
        // your code here
    } 
}

