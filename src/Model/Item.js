import Filter from './Filters'

export default class Item {
  constructor(id, name, description, images, category, ownerID, sold) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.images = images;
    this.category = category;
    this.ownerID = ownerID;
    this.sold = sold;
  }

  static fromJson = (id, json) => {
    return new Item(id, json.name, json.description, [], json.category, json.ownerID, json.sold);
  }

  static emptyItem = () => {
    return new Item("", "", "", [], "", "", false);
  }

  add_image(filepath) {
    this.images.push(filepath);
  }

  remove_image(index) {
    this.images.splice(index, 1);
  }

  toJson() {
    return {name: this.name, description: this.description, category: this.category, ownerID: this.ownerID, sold: this.sold }
  }

  toListItem() {
    return {
      id: this.id,
      name: this.name,
    }
  }
}
