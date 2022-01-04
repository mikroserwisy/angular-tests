import {ExchangeRateModel} from "./exchange-rate.model";
import {ExchangeRate} from "./exchange-rate";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateRepository implements ExchangeRate {

  getRates(): ExchangeRateModel[] {
    return [
      new ExchangeRateModel('pl', 4.0),
      new ExchangeRateModel('en', 5.0)
    ];
  }

}
