const { DetailFrame } = require('./DetailFrame');
/** @typedef {import('./ServletRequest').ServletRequest} ServletRequest */

class POSDisplayer {
  constructor() {
    this._pageStateName = 'stage1';
    this._detailDisplay = undefined;
    this._marketBindings = {};
    this._displayDirection = [0, 0, 0, 0];
  }
  /**
   *
   * @param {ServletRequest} request
   */
  populate(request) {
    const values = request.getParameterValues(this._pageStateName);

    if (values != null && values.length > 0) {
      this._marketBindings[this._pageStateName + this._getDateStamp()] =
        values[0];
    }
    const detailDisplay = new DetailFrame();
    detailDisplay.setDescription(
      this._getDetailText() + ' ' + this._getProjectionText()
    );
    detailDisplay.show();
    this._setDisplayRegion(
      0,
      0,
      detailDisplay.frameLength,
      detailDisplay.frameWidth
    );
  }
  _setDisplayRegion(aX, aY, bX, bY) {
    this._displayDirection[0] = aX;
    this._displayDirection[1] = aY;
    this._displayDirection[2] = bX;
    this._displayDirection[3] = bY;
  }
  showMenu() {
    return this._displayDirection;
  }
  _getDetailText() {
    return 'detail text';
  }
  _getProjectionText() {
    return 'projection info';
  }
  _getDateStamp() {
    return new Date().toString();
  }
}

module.exports = { POSDisplayer };
