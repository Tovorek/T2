const obj = {};

Object.defineProperty(obj, 'data', {
    _data: 0,                           // closure variable to hold the data
    get() {
        return this._data;
    },
    set(value) {
        this._data = value;
    }
});
