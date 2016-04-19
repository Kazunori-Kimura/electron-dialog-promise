"use strict";
const dialog = require("electron").remote.dialog;

module.exports = {
  /**
   * showOpenDialogのPromise対応
   * @param {object} focusedWindow
   * @param {object} properties
   * @returns {object} Promise
   */
  showOpenDialogAsync: (focusedWindow, properties) => {
    return new Promise((resolve, reject) => {
      dialog.showOpenDialog(focusedWindow, properties, (items) => {
        if (items) {
          resolve(items);
        } else {
          reject(new Error("no file or directory."));
        }
      })
    });
  }
};
