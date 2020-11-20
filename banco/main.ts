import prompt from 'prompt-sync';
import Banco from './banco';

let banrisul: Banco = new Banco(0, 0, 0, 0, 0);
let teclado = prompt();
let option: number = 0;
while (option != 9 ) {
    console.log('********** Menu **********');
    console.log('1-Conta');
    console.log('2-Deposito');
    console.log('3-Sacar');
    console.log('4-tranferiencia');
    console.log('5-saldo');
    console.log('9-sair')
    console.log('**************************');
    option = +teclado('escolha uma ação: ');

    switch (option) {
        case 1:
            let agencia: number = +teclado("digite o conta: ");
            let agencia1: number = +teclado("digite o agencia: ");
            banrisul.contabanco(agencia);
            banrisul.contabanco(agencia1);
            console.log(banrisul.static());
            break;

        case 2:
            let dinheiro: number = +teclado("digite o valor do deposito: ");
            banrisul.setdepos(dinheiro);
            console.log(banrisul.static());
            break;

        case 3:
            let din: number = +teclado("digite o valor do saque: ");
            banrisul.setsacarx(din);            
            console.log(banrisul.static());
            break;

        case 4:
            let di: number = +teclado("digite o valor da tranferencia: ");
            banrisul.settranfe(di);
            console.log(banrisul.static());
            break;

     

        case 5:
            console.log(banrisul.static());

            break;

        default: console.log('Opção Invalida!');
            break;

    }
}


