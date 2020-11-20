import {util} from "./aula02/util";
export class Funcionario{
    private _nome: string;
    private _descanser: number;
    private _comer: number;
    private _estudar: number;
    private _trabalhar: number;

    constructor(nome:string){
        this._nome=nome;
        this._descanser=util.randomizar(8,12);
        this._comer=util.randomizar(3,6);
        this._estudar=util.randomizar(3,8);
        this._trabalhar=util.randomizar(6,12);
    }

}