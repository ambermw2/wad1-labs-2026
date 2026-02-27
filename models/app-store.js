'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const appStore = {

  
  store: new JsonStore('./models/app-store.json', { info: { creators: [] } }),
  collection: 'info',

  getCreators() {
    const info = this.store.findAll(this.collection)[0]; // info is the first item in collection
    return info ? info.creators : [];
  },

  getAppInfo() {
    return this.store.findAll(this.collection);
  }

};

export default appStore;