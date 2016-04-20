"use strict";
const dialog = require("electron").remote.dialog;

module.exports = {
  /**
   * showOpenDialogのPromise対応
   * @param {object} browserWindow - electron BrowserWindow object
   * @param {object} properties - showOpenDialog parameter object
   * @returns {object} Promise
   */
  showOpenDialogAsync: (browserWindow, properties) => {
    return new Promise((resolve, reject) => {
      /**
       * showOpenDialogのcallback
       */
      function callback(items) {
        if (items) {
          resolve(items);
        } else {
          reject(new Error("showOpenDialog error."));
        }
      }
      
      // 引数のチェック
      if (typeof properties == "undefined") {
        properties = browserWindow;
        browserWindow = undefined;
      }
      
      if (browserWindow) {
        dialog.showOpenDialog(browserWindow, properties, callback);
      } else {
        dialog.showOpenDialog(properties, callback);
      }
    });
  },
  /**
   * showSaveDialogのPromise対応
   * @param {object} browserWindow - electron BrowserWindow object
   * @param {object} properties - showSaveDialog parameter object
   * @returns {object} Promise
   */
  showSaveDialogAsync: (browserWindow, properties) => {
    return new Promise((resolve, reject) => {
      /**
       * showSaveDialogのcallback
       */
      function callback(item) {
        if (item) {
          resolve(item);
        } else {
          reject(new Error("showSaveDialog error."));
        }
      }
      
      // 引数のチェック
      if (typeof properties == "undefined") {
        properties = browserWindow;
        browserWindow = undefined;
      }
      
      if (browserWindow) {
        dialog.showSaveDialog(browserWindow, properties, callback);
      } else {
        dialog.showSaveDialog(properties, callback);
      }
    });
  },
  /**
   * showMessageDialogのPromise対応
   * @param {object} browserWindow - electron BrowserWindow object
   * @param {object} properties
   * @returns {object} Promise
   */
  showMessageBoxAsync: (browserWindow, properties) => {
    return new Promise((resolve) => {
      /**
       * showMessageDialogのcallback
       */
      function callback(response) {
        resolve(response);
      }
      
      // 引数のチェック
      if (typeof properties == "undefined") {
        properties = browserWindow;
        browserWindow = undefined;
      }
      
      if (browserWindow) {
        dialog.showMessageBox(browserWindow, properties, callback);
      } else {
        dialog.showMessageBox(properties, callback);
      }
    });
  }
};