import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {

  it("#increment() should increment value by 2", () => {
    const counter = new CounterComponent();
    const initValue = counter.value;
    counter.increment();
    expect(counter.value - initValue).toBe(2);
  })





  // let component: CounterComponent;
  // let fixture: ComponentFixture<CounterComponent>;
  //
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ CounterComponent ]
  //   })
  //   .compileComponents();
  // });
  //
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(CounterComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  //
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
