class Conta {
    agencia;
    numero;
    cliente;
    _saldo = 0.0;

    get saldo() {
        return this._saldo;
    }
    // Aula presencial do dia 22/12/2021, implemtar a conta parte de obterSaldo
    obterSaldo(){


    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo = this._saldo - valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo = this._saldo + valor;
    }

    transferir(valor, contaDestino) {
        // Implementar o código do método transferir
        if (this._saldo <= valor || valor < 0) {
            return;
        }
        this._saldo -= valor;
        contaDestino.depositar(valor);
    }
}

module.exports = Conta;