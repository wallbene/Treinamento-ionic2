import { Component } from '@angular/core';
import {AlertController, NavController,  NavParams} from 'ionic-angular';
import { UsuarioService } from '../../domain/usuario/usuario-service';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  email: string= "joao@alura.com.br";
  senha: string = "alura123";

  constructor(public navCtrl: NavController, private _alertCtrl: AlertController, public navParams: NavParams, private _service: UsuarioService) {}


  efetuaLogin(){

    console.log(this.email);
    console.log(this.senha);
    this._service.login(this.email, this.senha)
      .then(() => {
        this.navCtrl.setRoot(HomePage);
      })
      .catch(e => {
        this._alertCtrl.create({
          title: "Aviso",
          subTitle: "Login ou senha estão incorretos",
          buttons: [{text: 'ok'}]
        })
        .present();
      });
    
  }


}
