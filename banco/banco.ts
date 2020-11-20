
export default class banco {
    constructor(
       private conta: number,
       private deposito: number,
       private sacar: number,
       private tranferiencia: number,
       private saldo: number,


    ) { }

    static(): String {

        return (
            ("\nconta: " + this.conta) +
            ("\nDeposito: " + this.deposito.toFixed(1)) +
            ("\nsacar: " + this.sacar) +
            ("\ntranferiencia: " + this.tranferiencia) +
            ("\nsaldo: " + this.saldo.toFixed(1))


        );

    }
    public getdepos(){
        return this.deposito;
    }

    public setdepos(din: number): void {

        this.saldo = din + this.saldo;
    }

    public contabanco(bancaria: number): void {


    }
    public getsacarx(){
        return this.sacar;
    }

    public setsacarx(valor: number): void {

        this.saldo = this.saldo - valor;
        if (this.saldo <0 ){
            this.saldo= 0;
        }
        console.log('saldo indisponivel');

    }

    public gettranfe(){
        return this.tranferiencia;
    }
    public settranfe(dindin: number): void {
        this.tranferiencia = this.saldo - dindin;
        if (this.saldo <0 ){
            this.saldo= 0;
        }
        console.log('saldo indisponivel');



    }

}
