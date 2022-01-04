import {Inject, Injectable} from '@angular/core';
import {ExchangeRateModel} from "./exchange-rate.model";
import {ExchangeRate} from "./exchange-rate";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(@Inject('ExchangeRate') private exchangeRate: ExchangeRate) {
  }

  getExchangeRate(countryCode: string): Observable<ExchangeRateModel> {
    return this.exchangeRate.getRates()
      .pipe(map(entries=> entries.filter(entry => entry.countryCode === countryCode).shift()!));
  }

}
