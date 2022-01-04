import {Inject, Injectable} from '@angular/core';
import {ExchangeRateModel} from "./exchange-rate.model";
import {ExchangeRate} from "./exchange-rate";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(@Inject('ExchangeRate') private exchangeRate: ExchangeRate) {
  }

  getExchangeRate(countryCode: string): ExchangeRateModel | undefined {
    return this.exchangeRate.getRates()
      .filter(entry => entry.countryCode === countryCode)
      .shift();
  }

}
