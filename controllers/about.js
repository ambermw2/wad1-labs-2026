'use strict';

import logger from "../utils/logger.js";
import empStore from "../models/cardabout.js";

const about = {
  createView(request, response) {
    logger.info("Dashboard page loading!");
    
    const viewData = {
      title: "About the Playlist App",
      employee: empStore.getAppInfo()
    };
    
    response.render('about', viewData);
  },
};

export default about;
