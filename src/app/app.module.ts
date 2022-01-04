import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CurrencyService} from "./payments/currency.service";
import {ExchangeRate} from "./payments/exchange-rate";
import {ExchangeRateFake} from "./payments/exchange-rate.fake";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CurrencyService,
    { provide: 'ExchangeRate', useValue: new ExchangeRateFake()}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
