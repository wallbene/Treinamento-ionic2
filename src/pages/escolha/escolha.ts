import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Acessorio } from '../../domain/carro/acessorio';
import { Carro } from '../../domain/carro/carro';

@Component({
    templateUrl: 'escolha.html'
})
export class EscolhaPage {
    
    public carro: Carro;
    public acessorios: Acessorio[];
    private _precoTotal: number;

    constructor(public navParams: NavParams){

        this.carro = this.navParams.get('carroSelecionado');
        this._precoTotal = this.carro.preco;

        this.acessorios = [
            new Acessorio('Freio ABS', 800),
            new Acessorio('Ar-condicionado', 1000),
            new Acessorio('MP3 Player', 500)
        ];

    }

    atualizaTotal(ativado: boolean, precoAcessorio: number): void {
        ativado ?
        this._precoTotal+= precoAcessorio:
        this._precoTotal-= precoAcessorio;
    }

    get precoTotal(): number {
        return this._precoTotal;
    }

}
