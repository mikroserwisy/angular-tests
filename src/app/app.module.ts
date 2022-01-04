import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CurrencyService} from "./payments/currency.service";
import {HttpClientModule} from "@angular/common/http";
import {RemoteExchangeRateRepository} from "./payments/remote-exchange-rate.repository";
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CurrencyService,
    RemoteExchangeRateRepository,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
