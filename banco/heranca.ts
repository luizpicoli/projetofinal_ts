class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        public email: string,
        private idade: number
    ){}

    apresentarPessoa() {
        console.log("Seja Bem-Vindo(a) " + this.nome);
    }
}

class Estudante extends Pessoa {
    constructor(
        nome: string,
        sobrenome: string,
        email: string,
        idade: number,
        private periodo: number,
        private tipoGraduacao: string
    ){
        super(nome, sobrenome, email, idade)
    }

    apresentarEstudante() {
        super.apresentarPessoa();
        console.log("Me chamo " + this.nome + " e estou cursando " + this.tipoGraduacao + ". E estou no " + this.periodo + "º período da Faculdade.");
    }
}

let estudante = new Estudante("Felipe", "Picoli", "teste@gmail.com", 31, 5, "Análise de Sistemas");
estudante.apresentarEstudante();