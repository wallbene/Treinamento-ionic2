import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms';
import { NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { Agendamento } from '../../domain/agendamento/agendamento';
import { AgendamentoService } from '../../domain/agendamento/agendamento-service';
import { DatePicker } from '@ionic-native/date-picker';
import { Vibration } from '@ionic-native/vibration';

@Component({
  templateUrl: 'cadastro.html'
})
export class CadastroPage {

  public agendamentoForm: FormGroup;
  private _alert: Alert;

  public agendamento: Agendamento

  constructor(
    public fb: FormBuilder,
    public navCtrl: NavController,
    public navParams: NavParams,
    private _service: AgendamentoService,
    public alertCtrl: AlertController,
    public vibration: Vibration,
    public datePicker: DatePicker ) {

    this.agendamento = new Agendamento(this.navParams.get('carro'), this.navParams.get('precoTotal'));
    
    this._alert = this.alertCtrl.create({
      title: 'Aviso',
      buttons: [{ text: 'ok', handler: () => {this.navCtrl.setRoot(HomePage)}}]
    });
  }


  ngOnInit(): void {
    this.agendamentoForm = this.fb.group({
        nome: ['', Validators.compose([Validators.required])],
        endereco: ['', Validators.required],
        email: ['', Validators.required],
        data: ['', Validators.required],
    });
}

  agenda(): void {

    this._service
    .agenda(this.agendamento)
    .then(confirmado => {
      
      this.vibration.vibrate(500);

      confirmado?
        this._alert.setSubTitle("Agendamento realizado com sucesso"):
        this._alert.setSubTitle("Falha ao realizar o agendamento, tente novamente mais tarde.");
      this._alert.present();
    })
  }
  selecionaData(){
    this.datePicker.show({
      date: new Date(),
      mode: "date",
      allowFutureDates: true,
      allowOldDates: false
    })
    .then(data => this.agendamento.data = data.toISOString())

  }

  get nome(){
    return this.agendamentoForm.get("nome");
  }
  get endereco(){
    return this.agendamentoForm.get("endereco");
  }
  get email(){
    return this.agendamentoForm.get("email");
  }
  get data(){
    return this.agendamentoForm.get("data");
  }

}
