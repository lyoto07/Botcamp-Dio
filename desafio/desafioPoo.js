class contaBancaria {
    constructor(agencia, numero, tipo) {

        this.agencia = agencia
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(Valor) {
        this._saldo = Valor;
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return 'Saque negado; Saldo insuficiente'
        }
        return this._saldo -= valor
    }
    depositar(valor) {
        return this._saldo += valor;
    }
}

class ContaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }
    get cartaoCredito() {
        return this._cartaoCredito;
    }

    set cartaoCredito(valor) {
        this._cartaoCredito = valor;
    }

}

class ContaPoupanca  extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria  extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'Universitaria';
    }

    sacar(valor){
        if(valor > 500){
            return"operação negada"
        }

        this._saldo -= valor;
    }
}


