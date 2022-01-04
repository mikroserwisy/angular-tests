import {ExchangeRateModel} from "./exchange-rate.model";
import {ExchangeRate} from "./exchange-rate";
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExchangeRateRepository implements ExchangeRate {

  getRates(): Observable<ExchangeRateModel[]> {
    return of([
      new ExchangeRateModel('pl', 4.0),
      new ExchangeRateModel('en', 5.0)
    ]);
  }

}
