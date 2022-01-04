import {ExchangeRateModel} from "./exchange-rate.model";
import {ExchangeRate} from "./exchange-rate";
import {Observable, of} from "rxjs";

export class ExchangeRateFake implements ExchangeRate {

  getRates(): Observable<ExchangeRateModel[]> {
    return of([
      new ExchangeRateModel('pl', 4.0),
    ]);
  }

}
