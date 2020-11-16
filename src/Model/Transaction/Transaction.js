export default class Transaction {

    constructor(id, status, itemID, tradeOff, buyerID, ownerID, greetingsText) {
      this.id = id;
      this.itemID = itemID;
      this.tradeOff = tradeOff;
      this.status = status;
      this.buyerID = buyerID;
      this.ownerID = ownerID;
      this.greetingsText = greetingsText;
    }

    static fromJson = (id, json) => {
      return new Transaction(id, json.status, json.itemID, json.tradeOff, json.buyerID, json.ownerID, json.greetingsText);
    }
  
    to_json() {
      return { 
        id: this.id, 
        itemID: this.itemID, 
        tradeOff: this.tradeOff,
        status: this.status,
        buyerID: this.buyerID,
        ownerID: this.ownerID,
        greetingsText: this.greetingsText,
      }
    }
  }
  