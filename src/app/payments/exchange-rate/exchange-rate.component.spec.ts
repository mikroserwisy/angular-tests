import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExchangeRateComponent} from './exchange-rate.component';
import {ExchangeRateModel} from "../exchange-rate.model";
import {of} from "rxjs";

describe('ExchangeRateComponent', () => {
  let component: ExchangeRateComponent;
  let fixture: ComponentFixture<ExchangeRateComponent>;

  beforeEach(async () => {
    const currencyServiceStub = jasmine.createSpyObj('CurrencyService', ['getExchangeRate']);
    currencyServiceStub.getExchangeRate.and.returnValue(of(new ExchangeRateModel('pl', 4.0)));

    await TestBed.configureTestingModule({
      declarations: [ExchangeRateComponent],
      providers: [{ provide: 'CurrencyService', useValue: currencyServiceStub }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExchangeRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('given country code should show current exchange rate', () => {
    // const paragraph: HTMLElement = fixture.nativeElement;
    // const countryCodeInput: HTMLInputElement = paragraph.querySelector('input')!;
    // const exchangeRateDiv: HTMLElement = paragraph.querySelector('div')!;
    // countryCodeInput.value = 'pl';
    // countryCodeInput.dispatchEvent(new Event('input', {bubbles: true, composed: true}));
    // fixture.detectChanges();
    // fixture.whenStable().then(() => {
    //   expect(exchangeRateDiv.textContent).toBe('Current exchange rate: 4');
    // });
  });
});
