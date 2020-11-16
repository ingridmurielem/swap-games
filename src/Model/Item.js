import Filter from './Filters'

export default class Item {
  constructor(id, name, description, images, category) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.images = images;
    this.category = category;

    
    this.removeItem = this.removeItem.bind(this);
  }

  add_image(filepath) {
    this.images.push(filepath);
  }

  remove_image(index) {
    this.images.splice(index, 1);
  }
  removeItem = (removeItem,type) => {
      this.setState({
        ...this.state,
        item: this.state.item.filter(item => item !== removeItem)
    });
  }

  to_json() {
    return {Name: this.name, Description: this.description, Images: this.images}
  }

  toListItem() {
    return {
      name: this.name,
      type: Filter.ITEMS
    }
  }
}
