const Cliente = require('./Cliente');
const Conta = require('./Conta');

test('teste saque valor igual ao saldo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(100.0);
    contaDoCliente01.sacar(100.0);

    expect(contaDoCliente01.saldo).toBe(0.0);
});

test('teste saque valor maior que o saldo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(100.0);
    contaDoCliente01.sacar(200.0);

    expect(contaDoCliente01.saldo).toBe(100.0);
});

test('teste deposito valor maior que o saldo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(200.0);

    expect(contaDoCliente01.saldo).toBe(200.0);
});

test('teste deposito valor negativo', () => {
    var cliente01 = new Cliente();
    cliente01.nome = 'Jose da Silva';
    cliente01.cpf = '11100099954';
    var contaDoCliente01 = new Conta();
    contaDoCliente01.agencia = 1101;
    contaDoCliente01.numero = 2001;    
    contaDoCliente01.cliente = cliente01;

    contaDoCliente01.depositar(-200.0);

    expect(contaDoCliente01.saldo).toBe(0);
});

// Criação das contas A e B  

var cliente1 = new Cliente();
    var cliente2 = new Cliente();
    cliente1.nome = 'Jose da silva';
    cliente1.cpf = '11100099954';
    cliente2.nome = 'Zé fina';
    cliente2.cpf = '12345678985';
    contaDoCliente1 = new Conta();
    contaDoCliente1.agencia = 1101;
    contaDoCliente1.numero = 2001;    
    contaDoCliente1.cliente = cliente1;

    contaDoCliente2 = new Conta();
    contaDoCliente2.agencia = 1101;
    contaDoCliente2.numero = 1992;    
    contaDoCliente2.cliente = cliente2;

    contaDoCliente1.depositar(100.0);
    contaDoCliente2.depositar(50.0);

//Testes para transferência de valores 

test('teste transferir 50 reais da contaA para contaB', () => {
    var cliente1 = new Cliente();
    var cliente2 = new Cliente();
    cliente1.nome = 'Jose da silva';
    cliente1.cpf = '11100099954';
    cliente2.nome = 'Zé fina';
    cliente2.cpf = '12345678985';
    contaDoCliente1 = new Conta();
    contaDoCliente1.agencia = 1101;
    contaDoCliente1.numero = 2001;    
    contaDoCliente1.cliente = cliente1;

    contaDoCliente2 = new Conta();
    contaDoCliente2.agencia = 1101;
    contaDoCliente2.numero = 1992;    
    contaDoCliente2.cliente = cliente2;

    contaDoCliente1.depositar(100.0);
    contaDoCliente2.depositar(50.0);

    contaDoCliente1.transferir(50.0, contaDoCliente2);

    expect(contaDoCliente1.saldo).toBe(50.0);
    expect(contaDoCliente2.saldo).toBe(100.0);
});

test('teste transferir 50 reais da contaB para contaA', () => {
    var cliente1 = new Cliente();
    var cliente2 = new Cliente();
    cliente1.nome = 'Jose da silva';
    cliente1.cpf = '11100099954';
    cliente2.nome = 'Zé fina';
    cliente2.cpf = '12345678985';
    contaDoCliente1 = new Conta();
    contaDoCliente1.agencia = 1101;
    contaDoCliente1.numero = 2001;    
    contaDoCliente1.cliente = cliente1;

    contaDoCliente2 = new Conta();
    contaDoCliente2.agencia = 1101;
    contaDoCliente2.numero = 1992;    
    contaDoCliente2.cliente = cliente2;

    contaDoCliente1.depositar(50.0);
    contaDoCliente2.depositar(100.0);

    contaDoCliente2.transferir(50.0, contaDoCliente1);

    expect(contaDoCliente1.saldo).toBe(100.0);
    expect(contaDoCliente2.saldo).toBe(50.0);
});

test('teste transferir -100 reais da contaA para contaB', () => {
    var cliente1 = new Cliente();
    var cliente2 = new Cliente();
    cliente1.nome = 'Jose da silva';
    cliente1.cpf = '11100099954';
    cliente2.nome = 'Zé fina';
    cliente2.cpf = '12345678985';
    contaDoCliente1 = new Conta();
    contaDoCliente1.agencia = 1101;
    contaDoCliente1.numero = 2001;    
    contaDoCliente1.cliente = cliente1;

    contaDoCliente2 = new Conta();
    contaDoCliente2.agencia = 1101;
    contaDoCliente2.numero = 1992;    
    contaDoCliente2.cliente = cliente2;

    contaDoCliente1.depositar(100.0);
    contaDoCliente2.depositar(50.0);

    contaDoCliente1.transferir(-100.0, contaDoCliente2);

    expect(contaDoCliente1.saldo).toBe(100.0);
    expect(contaDoCliente2.saldo).toBe(50.0);
});

test('teste transferir 500 reais da contaB para contaA', () => {
    var cliente1 = new Cliente();
    var cliente2 = new Cliente();
    cliente1.nome = 'Jose da silva';
    cliente1.cpf = '11100099954';
    cliente2.nome = 'Zé fina';
    cliente2.cpf = '12345678985';
    contaDoCliente1 = new Conta();
    contaDoCliente1.agencia = 1101;
    contaDoCliente1.numero = 2001;    
    contaDoCliente1.cliente = cliente1;

    contaDoCliente2 = new Conta();
    contaDoCliente2.agencia = 1101;
    contaDoCliente2.numero = 1992;    
    contaDoCliente2.cliente = cliente2;

    contaDoCliente1.depositar(100.0);
    contaDoCliente2.depositar(50.0);

    contaDoCliente2.transferir(500.0, contaDoCliente1);

    expect(contaDoCliente1.saldo).toBe(100.0);
    expect(contaDoCliente2.saldo).toBe(50.0);
});

test('teste transferir 100 reais da contaA para contaA', () => {
    var cliente1 = new Cliente();
    cliente1.nome = 'Jose da silva';
    cliente1.cpf = '11100099954';
    
    contaDoCliente1 = new Conta();
    contaDoCliente1.agencia = 1101;
    contaDoCliente1.numero = 2001;    
    contaDoCliente1.cliente = cliente1;

    contaDoCliente1.depositar(100.0);

    contaDoCliente1.transferir(100.0, contaDoCliente1);

    expect(contaDoCliente1.saldo).toBe(100.0);
});

