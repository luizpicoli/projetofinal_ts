import prompt from 'prompt-sync';
import Funcionario from './Funcionario';

let aranha: Funcionario = new Funcionario(10, 10, 10, 20, 40, 30,60);
let teclado = prompt();
let option: number = 0;
while (option != 9 || aranha.isDead()){
    console.log('********** Menu **********');
    console.log('1-Correr');
    console.log('2-Descansar');
    console.log('3-Comer');
    console.log('4-Dormir');
    console.log('5-Estudar');
    console.log('6-Trabalhar');
    console.log('7-imprimir dados')
    console.log('9-sair')
    console.log('**************************');
    option = +teclado('escolha uma ação: ');

    switch (option) {
        case 1:
            aranha.setcorridacorrer();
            console.log(aranha.static()) ;
            break;

        case 2:
            let horas: number = +teclado("digite o numero de horas: ");
            aranha.setsonodescansar(horas);
            console.log(aranha.static());
            break;

        case 3: 
            aranha.setcomidacomer();
            console.log(aranha.static());
            break;
            
        case 4:
            aranha.somodormir();
            console.log(aranha.static());
            break;
        
        case 5:
            aranha.setestudandeestudar();
            console.log(aranha.static());
            break;

        case 6:
            let rest: number = aranha.setempregotrabalhar();
            console.log(`emprego ${rest}`);
            console.log(aranha.static());            
         break;
        
        case 7: 
        console.log(aranha.static());
        
            break;

        default: console.log('Opção Invalida!');
            break;

    }
}
console.log('pode volta a trabalhar');

