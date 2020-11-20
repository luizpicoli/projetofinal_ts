import  prompt from 'prompt-sync';
class Personagem {
   
    constructor(public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ) {
       
    }

}
let aranha:Personagem = new Personagem('aranha',100,80,40,50);
let teclado = prompt();
let option: number=0;
while(option != 9){
    console.log('|=====================|');
    console.log('|1.Treinar ataque     |');
    console.log('|2.Treinar defesa     |');
    console.log('|3.Imprimir atributos |');
    console.log('|9.Sair               |');
    console.log('|=====================|');

    option = +teclado('escolha uma ação: ');
    switch(option){
        case 1:
            aranha.ataque +=2;
            break;
        case 3:
            console.log('nome: ',aranha);
            break;
        default:
            break;
    }
}
//nome, energia, vida, ataque, defesa
/**import prompt from "prompt-sync";
class Personagem {
    constructor(
        public nome: string,
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number
    ) {}
}

let sansa: Personagem = new Personagem("Sansa Stark", 20+Math.random()*80, 40, 20, 20);

let teclado = prompt();
let option: number = 0;

while (option != 9) {
    console.log("+========= Personagem =============+");
    console.log("|1. Treinar ataque                 |");
    console.log("|2. Treinar defesa                 |");
    console.log("|3. Imprimir atributos             |");
    console.log("|9. Sair                           |");
    console.log("+==================================+");

    option = +teclado("Escolha uma ação");

    switch (option) {
        case 1:
            sansa.ataque += 4 + Math.round(Math.random() * 6);
            sansa.vida -= 10 + Math.round(Math.random() * 10);
            let random: number = (Math.random() * 100);

            if(random > sansa.vida){
                console.log('Vish. Faleceu!');
                break;
            }else{
                console.log('Segue a vida...');  
            }

            break;
        case 3:
            console.log("sansa :>> ", sansa);
            break;
        default:
            break;
    }
}

*/






