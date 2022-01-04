import {ExchangeRateModel} from "./exchange-rate.model";
import {Observable} from "rxjs";

export interface ExchangeRate {

  getRates(): Observable<ExchangeRateModel[]>;

}
