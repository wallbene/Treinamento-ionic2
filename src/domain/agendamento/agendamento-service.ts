import {Agendamento} from './agendamento';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';
import { AgendamentoDao } from './agendamento-dao';

@Injectable()
export class AgendamentoService {

    constructor(private _http: Http, private _storage: Storage, private _dao: AgendamentoDao){}
    
    agenda(agendamento: Agendamento) {

        const api = `https://aluracar.herokuapp.com/salvarpedido?carro=${agendamento.carro.nome}&nome=${agendamento.nome}&preco=${agendamento.valor}&endereco=${agendamento.endereco}&email=${agendamento.email}&dataAgendamento=${agendamento.data}`;
        return this._dao.ehDuplicado(agendamento)
            .then(existe => {
                if(existe) throw new Error("Esse agendamento já foi realizado.");
                return this._http.get(api)
                    .toPromise()
                    .then(() => agendamento.confirmado = true, erro => console.log(erro))
                    .then(() => this._dao.salva(agendamento))
                    .then(() => agendamento.confirmado);
            })
    }
}