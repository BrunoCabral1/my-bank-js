class Conta {
    agencia;
    numero;
    cliente;
    _saldo = 0.0;

    get saldo() {
        return this._saldo;
    }
    // Aula presencial do dia 22/12/2021, implemtar a conta parte de obterSaldo
    obterSaldo() {


    }

    sacar(valor) {
        if (this._saldo >= valor) {
            if (valor > 0) {

                this._saldo = this._saldo - valor;
                return 0;
            } else {
                return 1;
            }
        } else {
            return 2;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo = this._saldo + valor;
    }

    transferir(valor, contaDestino) {
        // Implementação do método transferir
        if (this._saldo <= valor || valor < 0) {
            return;
        }
        this._saldo -= valor;
        contaDestino.depositar(valor);
    }
}

module.exports = Conta;