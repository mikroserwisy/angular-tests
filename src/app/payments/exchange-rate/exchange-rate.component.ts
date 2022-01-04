import {Component, Inject, OnInit} from '@angular/core';
import {CurrencyService} from "../currency.service";

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent {

  value = 0;

  constructor(@Inject('CurrencyService') private currencyService: CurrencyService) {
  }

  update(countryCode: string) {
    this.currencyService.getExchangeRate(countryCode)
      .subscribe(response => this.value = response.value);
  }

}
