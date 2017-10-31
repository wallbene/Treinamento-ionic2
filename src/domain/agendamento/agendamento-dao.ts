import {Agendamento} from './agendamento';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class AgendamentoDao {

    constructor(private _storage: Storage){

    }

    private _getKey(agendamento: Agendamento) {
        return agendamento.email + agendamento.data.substr(0, 10);
    }

    public salva(agendamento: Agendamento) {
        let key = this._getKey(agendamento);
        return this._storage.set(key, agendamento);

    }

    public ehDuplicado(agendamento) {
        let key = this._getKey(agendamento);
        return this._storage.get(key)
            .then((dado) => dado? true: false);
    }

}