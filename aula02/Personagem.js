"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var Personagem = /** @class */ (function () {
    function Personagem(nome, energia, vida, ataque, defesa) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    return Personagem;
}());
var teclado = prompt_sync_1.default();
var aranha;
aranha = new Personagem('aranha', 100, 100, 80, 90);
//aranha.nome = 'teia';
//aranha.ataque = 10;
aranha.defesa = 60;
//aranha.energia = 50
//aranha.vida = 100;
console.log('persona:', aranha);
