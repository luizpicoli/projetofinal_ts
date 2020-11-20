
export default class Funcionario {
    constructor(
        private correr: number,
        private descansar: number,
        private comer: number,
        private dormir: number,
        private estudar: number,
        private trabalhar: number,
        private energia: number,


    ) { }

    static(): String {

        return (
            ("\ncorrer: " + this.correr.toFixed(1)) +
            ("\nDescansar: " + this.descansar.toFixed(1)) +
            ("\nComer: " + this.comer.toFixed(1)) +
            ("\nDormir: " + this.dormir.toFixed(1)) +
            ("\nEstudar: " + this.estudar.toFixed(1)) +
            ("\nTrabalhar: " + this.trabalhar.toFixed(1))

        );

    }
    public get corridacorrer(): number {
        return this.correr;
    }
    public setcorridacorrer(): void {

        this.correr += 8 + Math.round(Math.random() * 10);
        this.descansar += 4 + Math.round(Math.random() * 6);
        let random: number = (Math.random() * 100);

        if (random > this.descansar) {
            console.log('correu demais');

        } else {
            console.log('Segue a vida...');
        }

    }

    public get sonodescanser(): number {
        return this.descansar;
    }


    public setsonodescansar(tempo: number): void {

        this.descansar += tempo * (Math.random() * 8);
        if (this.descansar > 100) {
            this.descansar = 100;
        }
    }


    public get comidacomer(): number {

        return this.comidacomer;
    }

    public setcomidacomer(): void {
        this.comer += Math.random() * 8;
    }

    public somodormir(): void {
        this.dormir += Math.random() * 8;
        if (this.dormir > 100) {
            this.dormir = 100;
            console.log('dormiu demais')
        }
    }

public get estudandoestudar() : number{
    return this.estudandoestudar;
}

    public setestudandeestudar(): void {
        this.estudar += Math.random() * 8;
        if (this.estudar > 100) {
            this.estudar = 100;
            console.log('estudou demais')
        }

    }
    
    public get  empregotrabalhar() :number {
        return this.empregotrabalhar;
    }
    

    public setempregotrabalhar(): number {
        let desgaste: number = Math.random() * 12;
        this.trabalhar - desgaste;
        return desgaste;
    }
    isDead(): boolean {
        return this.trabalhar > 100;


    }

}
