"use strict";
const dialog = require("electron").remote.dialog;

module.exports = {
  /**
   * showOpenDialogのPromise対応
   * @param {object} properties
   * @returns {object} Promise
   */
  showOpenDialogAsync: (properties) => {
    return new Promise((resolve, reject) => {
      dialog.showOpenDialog(properties, (items) => {
        if (items) {
          resolve(items);
        } else {
          reject(new Error("no file or directory."));
        }
      })
    });
  }
};
