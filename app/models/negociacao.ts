export class Negociacao {
    private _data;
    private _quantidade;
    private _valor;
     _volume;

    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data() {
        return this._data
    }
    set data (data) {
        this._data = data

    }

    get quantidade() {
        return this._quantidade
    }

    get valor() {
        return this._valor
    }
    get volume() {
        return this._quantidade * this._valor
    }

}