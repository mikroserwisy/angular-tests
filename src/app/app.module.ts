import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CurrencyService} from "./payments/currency.service";
import {HttpClientModule} from "@angular/common/http";
import {RemoteExchangeRateRepository} from "./payments/remote-exchange-rate.repository";
import { CounterComponent } from './counter/counter.component';
import { ExchangeRateComponent } from './payments/exchange-rate/exchange-rate.component';
import { UppercaseDirective } from './uppercase.directive';
import {HighlightDirective} from "./highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ExchangeRateComponent,
    UppercaseDirective,
    HighlightDirective
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
