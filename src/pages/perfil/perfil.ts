import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../domain/usuario/usuario';
import { UsuarioService } from '../../domain/usuario/usuario-service';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  public url: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private _service: UsuarioService) {}

    get usuarioLogado(): Usuario {

      return this._service.obtemUsuarioLogado();
    }

}
