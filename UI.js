const prompt = require('prompt-sync')({ sigint: true });
const BD = require('./BD');
const Cliente = require('./Cliente');
const Conta = require('./Conta');

const bd = new BD();

function iniciar() {
    do {
        exibeMenu();
        opcao = Number(prompt('Opção: '));
        escolheOpcao(opcao);
    } while (opcao != 9);
}

function exibeMenu() {
    console.log("\n\n\t Escolha a opção desejada");
    console.log("1 - Consultar Saldo");
    console.log("2 - Sacar");
    console.log("3 - Depositar");
    console.log("4 - Cadastrar Conta");
    console.log("5 - Listar Contas");
    console.log("9 - Sair");
}

function escolheOpcao(opcao) {

    switch (opcao) {
        case 1:
            console.log('Implementar saldo.');
            //Realizado na aula do dia 5/1/2022

            numero = Number(prompt('Informe o numero da conta: '));
            conta = bd.lerConta(numero);
            console.log('numero da conta ' + numero + '. saldo: ' + conta._saldo);
            break;
            
        case 2:
            console.log('Implementar saque.');
            break;

        case 3:
            console.log('Implementar deposito.');
            break;

        case 4:
            console.log("\nCadastrar nova conta.");

            const novoCliente = new Cliente();
            novoCliente.nome = prompt('Informe o nome: ');
            novoCliente.cpf = prompt('Informe o CPF: ');
            novoCliente.fone = prompt('Informar o numero de telefone: '); //Realizado na aula do dia 5
            novoCliente.endereco = prompt('Informar endereço: '); // Realizado na aula do dia 5


            const novaConta = new Conta();
            novaConta.agencia = Number(prompt('Informe a agencia: '));
            novaConta.numero = Number(prompt('Informe o número da conta: '));;
            novaConta._saldo = Number(prompt('Inserir saldo inicial da conta: R$:  ')) //Adicionado na aula do dia 5 para saldo inicial na hora da criação da conta do cliente
            novaConta.cliente = novoCliente;

            bd.cadastrarConta(novaConta);
            console.log("\nConta cadastrada com sucesso.") //Realizado na aula 05/01/2022
            break;

        case 5:
            console.log('Listando contas: ');
            bd.listarContas();
            break;
        case 9:
            console.log('Saindo da aplicação.');
            break;
        default:
            console.log("Opção inválida");
    }
}

iniciar();




/**
 * import java.util.Scanner;
public class Conta {
    private String nome;
    private int conta, saques;
    private double saldo;
    Scanner entrada = new Scanner(System.in);
    
    public Conta(String nome, int conta, double saldo_inicial){
        this.nome=nome;
        this.conta=conta;
        saldo=saldo_inicial;
        saques=0;
    }
    
    public void extrato(){
        System.out.println("\tEXTRATO");
        System.out.println("Nome: " + this.nome);
        System.out.println("Número da conta: " + this.conta);
        System.out.printf("Saldo atual: %.2f\n",this.saldo);
        System.out.println("Saques realizados hoje: " + this.saques + "\n");
        
    }
    
    public void sacar(double valor){
        if(saldo >= valor){
            saldo -= valor;
            saques++;
            System.out.println("Sacado: " + valor);
            System.out.println("Novo saldo: " + saldo + "\n");
        } else {
            System.out.println("Saldo insuficiente. Faça um depósito\n");
        }
    }
    
    public void depositar(double valor)
    {
        saldo += valor;
        System.out.println("Depositado: " + valor);
        System.out.println("Novo saldo: " + saldo + "\n");
    }
    
    public void iniciar(){
        int opcao;
        do{
            exibeMenu();
            opcao = entrada.nextInt();
            escolheOpcao(opcao);
        }while(opcao!=4);
    }
    
    public void exibeMenu(){
        
        System.out.println("\t Escolha a opção desejada");
        System.out.println("1 - Consultar Extrato");
        System.out.println("2 - Sacar");
        System.out.println("3 - Depositar");
        System.out.println("4 - Sair\n");
        System.out.print("Opção: ");
        
    }
    
    public void escolheOpcao(int opcao){
        double valor;
        
        switch( opcao ){
            case 1:    
                    extrato();
                    break;
            case 2: 
                    if(saques<3){
                        System.out.print("Quanto deseja sacar: ");
                        valor = entrada.nextDouble();
                        sacar(valor);
                    } else{
                        System.out.println("Limite de saques diários atingidos.\n");
                    }
                    break;
                    
            case 3:
                    System.out.print("Quanto deseja depositar: ");
                    valor = entrada.nextDouble();
                    depositar(valor);
                    break;
                    
            case 4: 
                    System.out.println("Sistema encerrado.");
                    break;
                    
            default:
                    System.out.println("Opção inválida");
        }
    }
}
 * 
 * 
 */