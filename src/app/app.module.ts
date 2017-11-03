import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EscolhaPage } from '../pages/escolha/escolha';
import { CadastroPage } from '../pages/cadastro/cadastro';
import {AgendamentosPage} from '../pages/agendamentos/agendamentos';
import { LoginPage } from '../pages/login/login';
import { PerfilPage } from '../pages/perfil/perfil';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { AgendamentoService } from '../domain/agendamento/agendamento-service';
import { UsuarioService } from '../domain/usuario/usuario-service';
import { Storage } from '@ionic/storage';
import { AgendamentoDao } from "../domain/agendamento/agendamento-dao";
import { Vibration } from '@ionic-native/vibration';
import { Camera } from '@ionic-native/camera';
import { DatePicker } from '@ionic-native/date-picker';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

function provideStorage() {
  return new Storage({
    name: 'aluracar',
    storeName: 'agendamentos'
  });
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    EscolhaPage,
    CadastroPage,
    AgendamentosPage,
    LoginPage,
    PerfilPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    HttpModule,
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    EscolhaPage,
    CadastroPage,
    AgendamentosPage,
    LoginPage,
    PerfilPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AgendamentoService,
    { provide: Storage, useFactory: provideStorage },
    AgendamentoDao,
    UsuarioService,
    Vibration,
    Camera,
    DatePicker,
    SplashScreen,
    StatusBar
  ]
})
export class AppModule {}
