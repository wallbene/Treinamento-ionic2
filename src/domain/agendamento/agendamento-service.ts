import {Agendamento} from './agendamento';
import { Injectable } from '@angular/core';
import {Response, Http} from '@angular/http';

@Injectable()
export class AgendamentoService {

    constructor(private _http: Http){}
    
    agenda(agendamento: Agendamento): Promise<Response>{

        const api = `https://aluracar.herokuapp.com/salvarpedido?carro=${agendamento.carro.nome}&nome=${agendamento.nome}&preco=${agendamento.valor}&endereco=${agendamento.endereco}&email=${agendamento.email}&dataAgendamento=${agendamento.data}`;

        return this._http.get(api)
            .toPromise();
    }
}