import {CurrencyService} from './currency.service';
import {ExchangeRateModel} from "./exchange-rate.model";
import {ExchangeRate} from "./exchange-rate";
import {TestBed} from "@angular/core/testing";

describe('CurrencyService', () => {
  let service: CurrencyService;

  beforeEach(() => {
    const exchangeRateStub = jasmine.createSpyObj('ExchangeRate', ['getRates']);
    exchangeRateStub.getRates.and.returnValue([new ExchangeRateModel('pl', 4.0)]);

    TestBed.configureTestingModule({
        providers: [
          CurrencyService,
          { provide: 'ExchangeRate', useValue: exchangeRateStub }
        ]
      });

    service = TestBed.inject(CurrencyService);
  });

  it('given country code should return currency value for given country', () => {
    //service = new CurrencyService(new ExchangeRateRepository());

    //service = new CurrencyService(new ExchangeRateFake());

    //const exchangeRateStub = { getRates: () => [new ExchangeRateModel('pl', 4.0)] };
    //service = new CurrencyService(exchangeRateStub as ExchangeRate);

    // const exchangeRateStub = jasmine.createSpyObj('ExchangeRate', ['getRates']);
    // exchangeRateStub.getRates.and.returnValue([new ExchangeRateModel('pl', 4.0)]);
    // service = new CurrencyService(exchangeRateStub as ExchangeRate);

    const exchangeRate = service.getExchangeRate('pl');
    expect(exchangeRate?.value).toBe(4.0);
  });

});
