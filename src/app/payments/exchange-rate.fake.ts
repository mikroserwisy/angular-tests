import {ExchangeRateModel} from "./exchange-rate.model";
import {ExchangeRate} from "./exchange-rate";

export class ExchangeRateFake implements ExchangeRate {

  getRates(): ExchangeRateModel[] {
    return [
      new ExchangeRateModel('pl', 4.0),
    ];
  }

}
