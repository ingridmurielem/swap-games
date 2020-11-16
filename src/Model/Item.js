import Filter from './Filters'

export default class Item {
  constructor(id, name, description, images, category, ownerID) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.images = images;
    this.category = category;
    this.ownerID = ownerID;
  }

  static fromJson = (id, json) => {
    return new Item(id, json.name, json.description, [], json.category, json.ownerID);
  }

  static emptyItem = () => {
    return new Item("", "", "", [], "", "");
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
