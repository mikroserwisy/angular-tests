import {ExchangeRateModel} from "./exchange-rate.model";

export interface ExchangeRate {

  getRates(): ExchangeRateModel[];

}
