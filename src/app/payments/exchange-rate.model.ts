export class ExchangeRateModel {

  countryCode: string;
  value: number;

  constructor(countryCode: string,  value: number) {
    this.countryCode = countryCode;
    this.value = value;
  }

}
