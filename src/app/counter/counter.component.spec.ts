import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';
import {first} from "rxjs";
import {Router} from "@angular/router";

describe('CounterComponent', () => {

  const router = jasmine.createSpyObj('Router', ['navigateByUrl']);

  it("#increment() should increment value by 2", () => {
    const counter = new CounterComponent(router);
    counter.value = 10;
    const initValue = counter.value;
    counter.increment();
    expect(counter.value - initValue).toBe(2);
    counter.incremented.pipe(first()).subscribe(value => {
      expect(counter.value - initValue).toBe(value);
    });
  })

  it('should navigate after reset', () => {
    const counter = new CounterComponent(router);
    counter.reset();
    expect(router.navigateByUrl).toHaveBeenCalledWith('/start');
  });

});

describe("Angular CounterComponent", () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  const router = jasmine.createSpyObj('Router', ['navigateByUrl']);

  /*beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CounterComponent]
    })
    component = TestBed.inject(CounterComponent);
  });*/

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ],
      providers: [
        { provide: Router, useValue: router }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set message on init', () => {
    //component.ngOnInit();
    expect(component.message).toBe('Counter');
  });

  it("should show current value", () => {
    const paragraph: HTMLElement = fixture.nativeElement;
    expect(paragraph.textContent).toContain('Value: 0')
  });

});





