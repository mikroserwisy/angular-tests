import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExchangeRateComponent} from './exchange-rate.component';
import {ExchangeRateModel} from "../exchange-rate.model";
import {of} from "rxjs";

describe('ExchangeRateComponent', () => {

  let view: ExchangeRateView;

  beforeEach(async () => {
    const currencyServiceStub = jasmine.createSpyObj('CurrencyService', ['getExchangeRate']);
    currencyServiceStub.getExchangeRate.and.returnValue(of(new ExchangeRateModel('pl', 4.0)));
    await TestBed.configureTestingModule({
      declarations: [ExchangeRateComponent],
      providers: [{ provide: 'CurrencyService', useValue: currencyServiceStub }]
    }).compileComponents();
  });

  beforeEach(() => {
    view = new ExchangeRateView(TestBed.createComponent(ExchangeRateComponent));
  });

  it('should create', () => {
    expect(view.getComponent).toBeTruthy();
  });

  it('given country code should show current exchange rate', () => {
    view.setCountryCode('pl');
    expect(view.getExchangeRate()).toBe('Current exchange rate: 4');
  });
});

class ExchangeRateView {

  component: ExchangeRateComponent;

  constructor(private fixture: ComponentFixture<ExchangeRateComponent>) {
    this.component = fixture.componentInstance;
  }

  getComponent(): ExchangeRateComponent {
    return this.component;
  }

  setCountryCode(value: string) {
    const input = this.getInput();
    input.value = value;
    input.dispatchEvent(new Event('input', {bubbles: true, composed: true}));
    this.fixture.detectChanges();
  }

  getExchangeRate(): string {
    return  this.fixture.nativeElement.querySelector('div')!.textContent;
  }

  private getInput() {
    return this.fixture.nativeElement.querySelector('input')!
  }

}
