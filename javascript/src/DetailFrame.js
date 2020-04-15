class DetailFrame {
  constructor({ description, accountSymbol, frameLength, frameWidth }) {
    this._description = description;
    this._accountSymbol = accountSymbol;
    this._frameLength = frameLength;
    this._frameWidth = frameWidth;
  }
  show() {
    console.log(this._description);
  }
  get accountSymbol() {
    return this._accountSymbol;
  }
  get frameWidth() {
    return this._frameWidth;
  }
  get frameLength() {
    return this._frameLength;
  }

  setFrameLength(length) {
    this._frameLength = length;
  }
  setFrameWidth(width) {
    this._frameWidth = width;
  }
  setDescription(description) {
    this._description = description;
  }
  setAccountSymbol(symbol) {
    this._accountSymbol = symbol;
  }
}

module.exports = { DetailFrame };
