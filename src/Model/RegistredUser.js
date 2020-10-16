import User from "./User"
import Item from "./Item"
import Filter from './Filters'

export default class RegistredUser {
    constructor(id, name, email, password, city, tags) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.city = city;  
        this.tags = tags;
        //this.items = new Array();
        //this.trades = new Array();
    }
    
    /**
     * @param {string} new_tag
     */
    add_tag(new_tag) {
        this.tags.push(new_tag)
    }

    /**
     * @param {string} tag_name
     */
    remove_tage(tag_name) {
        this.tag.filter(tag => tag != tag_name)
    }
    
    /**
     * @param {string} name
     * @param {string} description
     * @param {array} images 
     */
    add_item(name, description, images) {
        const new_item = new Item(name, description, images)
        this.items.push(new_item)
    }

    remove_item(index) {
        this.items.splice(index, 1)
    }

    get items() {
        return [];   
    }

    get trades() {
        return [];
    }

    to_json() {
        return {Name: this.name, Email: this.email, Password: this.password, City: this.city,
                Tags: this.tags, Item: this.items, Trades: this.trades}
    } 

    toListItem() {
        return {
          name: this.name,
          type: Filter.USERS
        }
      }
}