import Filter from './Filters'

export default class Item {
  constructor(id, name, description, images, category) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.images = images;
    this.category = category;
  }

  add_image(filepath) {
    this.images.push(filepath);
  }

  remove_image(index) {
    this.images.splice(index, 1);
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
