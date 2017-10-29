import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController  } from 'ionic-angular';
import { Http } from '@angular/http';
import { EscolhaPage } from '../escolha/escolha'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  
  public carros = [];

  constructor(
    public navCtrl: NavController,
    private _http: Http,
    private _loadingCtrl: LoadingController,
    private _alertCtrl: AlertController) {}


  ngOnInit(): void {
    let loading = this._loadingCtrl.create({
      content: 'Buscando os carros do servidor'
    });
    
    loading.present();
    
    this._http.get('https://aluracar.herokuapp.com')
              .map(res => res.json())
              .toPromise()
              .then(obj => {
                this.carros = obj
                loading.dismiss();
              })
             .catch(err => {
               loading.dismiss();
               console.log(err);
               this._alertCtrl.create({
                 title: 'Falha na conexão',
                 subTitle: 'Não foi possível obter a lista de carros. Tente mais tarde.',
                 buttons: [{ text: 'Estou ciente.' }]
               }).present();
              }
            );

  }
  seleciona(carro: any) {
    this.navCtrl.push(EscolhaPage, { carroSelecionado: carro });

    console.log(carro);
  }
}
