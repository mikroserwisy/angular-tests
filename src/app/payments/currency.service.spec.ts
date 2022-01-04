import {CurrencyService} from './currency.service';
import {ExchangeRate} from "./exchange-rate";
import {TestBed} from "@angular/core/testing";
import {RemoteExchangeRateRepository} from "./remote-exchange-rate.repository";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {ExchangeRateModel} from "./exchange-rate.model";

describe('CurrencyService', () => {
  let service: CurrencyService;
  let httpClient: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    // const exchangeRateStub = jasmine.createSpyObj('ExchangeRate', ['getRates']);
    // exchangeRateStub.getRates.and.returnValue(of([new ExchangeRateModel('pl', 4.0)]));

    httpClient = jasmine.createSpyObj('HttpClient', ['get']);
    const exchangeRate = new RemoteExchangeRateRepository(httpClient);

    TestBed.configureTestingModule({
        providers: [
          CurrencyService,
          { provide: 'ExchangeRate', useValue: exchangeRate }
        ]
      });

    service = TestBed.inject(CurrencyService);
  });

  it('given country code should return currency value for given country', (done) => {
    //service = new CurrencyService(new ExchangeRateRepository());

    //service = new CurrencyService(new ExchangeRateFake());

    //const exchangeRateStub = { getRates: () => [new ExchangeRateModel('pl', 4.0)] };
    //service = new CurrencyService(exchangeRateStub as ExchangeRate);

    // const exchangeRateStub = jasmine.createSpyObj('ExchangeRate', ['getRates']);
    // exchangeRateStub.getRates.and.returnValue([new ExchangeRateModel('pl', 4.0)]);
    // service = new CurrencyService(exchangeRateStub as ExchangeRate);

    // const exchangeRate = service.getExchangeRate('pl');
    // expect(exchangeRate?.value).toBe(4.0);

    httpClient.get.and.returnValue(of([new ExchangeRateModel('pl', 4.0)]));

    service.getExchangeRate('pl').subscribe(exchangeRate => {
      expect(exchangeRate.value).toBe(4.0);
      done();
    });

  });

});
