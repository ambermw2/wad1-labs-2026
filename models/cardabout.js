import card from "./card.json" with { type: "json" };
import JsonStore from "./json-store.js";

const empStore = {

 store: new JsonStore('./models/card.json', { employee: {} }),
  collection: 'employee',
  getAppInfo() {
    return this.store.findAll(this.collection);
  },
};

export default empStore; 