import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { Usuario } from '../../domain/usuario/usuario';
import { UsuarioService } from '../../domain/usuario/usuario-service';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage implements OnInit {
  
  public url: string;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private _service: UsuarioService) {}
    
    ngOnInit(): void {
      this.url = this._service.obtemAvatar();
    }

    tiraFoto() {
      Camera.getPicture({
        destinationType: Camera.DestinationType.FILE_URI,
        saveToPhotoAlbum: true,
        correctOrientation: true,
      })
      .then(url => {
        this._service.guardaAvatar(url);
        this.url = url;
      })
      .catch(erro => console.log(erro));

    }

    get usuarioLogado(): Usuario {

      return this._service.obtemUsuarioLogado();
    }

}
