import Filter from './Filters'

export default class Chat {

    constructor(name) {
        this.name = name;
    }

    toListItem() {
        return {
            name: this.name,
            type: Filter.CHATS
        }
    }
}