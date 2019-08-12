import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Item } from '../src/stores/Item'
import { ShoppingList } from '../src/stores/ShoppingList'


// let potatoes = new Item("Potatoes")
// let onione = new Item("Onione")
// let pineapple = new Item("Pineapple")
// groceryList.addItem('potatoes')
// groceryList.list.push(onione)
// groceryList.list.push(pineapple)
// Use the prop "store" for your store

let groceryList = new ShoppingList()
ReactDOM.render(<App store={groceryList}/>, document.getElementById('root'));
registerServiceWorker();
