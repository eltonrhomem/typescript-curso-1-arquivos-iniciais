export class Negociacao {
    private _data: Date;
    private _quantidade: number;
    private _valor: number;
     _volume: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data(): Date {
        return this._data
    }
    set data (data) {
        this._data = data

    }

    get quantidade(): Number {
        return this._quantidade
    }

    get valor(): Number {
        return this._valor
    }
    get volume(): Number {
        return this._quantidade * this._valor
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }

}