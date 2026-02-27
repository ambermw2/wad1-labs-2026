'use strict';

import JsonStore from "./json-store.js";

const empStore = {
  store: new JsonStore('./models/card.json', { employees: [] }),
  collection: 'employees',

  getAllEmployees() {
    return this.store.findAll(this.collection);
  }
};

export default empStore;