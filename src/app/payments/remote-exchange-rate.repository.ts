import {ExchangeRate} from "./exchange-rate";
import {Observable} from "rxjs";
import {ExchangeRateModel} from "./exchange-rate.model";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RemoteExchangeRateRepository implements ExchangeRate {

  constructor(private httpClient: HttpClient) {
  }

  getRates(): Observable<ExchangeRateModel[]> {
    return this.httpClient.get<ExchangeRateModel[]>("http://localhost/exchange-rates");
  }

}
