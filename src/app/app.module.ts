import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMessageErrorModule, MessagesConfig } from 'ngx-message-error';

const customMessages: MessagesConfig = {
  email: 'O campo deve ser um email',
  max: 'O valor máximo permitido é ?',
  maxLength: 'Caracteres máximos permitidos ?/?',
  maxlength: 'Caracteres máximos permitidos ?/?',
  min: 'O valor mímimo permitido é ?',
  minLength: 'Caracteres mínimos permitidos ?/?',
  minlength: 'Caracteres mínimos permitidos ?/?',
  required: 'Campo de preenchimento obrigatório',
  requiredTrue: 'Campo de preenchimento obrigatório',
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxMessageErrorModule.forRoot(customMessages),
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
