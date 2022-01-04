import {Component, DebugElement} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HighlightDirective} from "./highlight.directive";
import {By} from "@angular/platform-browser";

@Component({
  template: `<p appHighlight color="blue">Test</p>`
})
class UpperCaseTestComponent {
}

describe('UppercaseDirective', () => {

  let component: UpperCaseTestComponent;
  let fixture: ComponentFixture<UpperCaseTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpperCaseTestComponent, HighlightDirective]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperCaseTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set text to uppercase', () => {
    const paragraph: DebugElement = fixture.debugElement.query(By.css('p'));
    //paragraph.dispatchEvent(new Event('mouseenter', {bubbles: true, composed: true, cancelable: false}));
    paragraph.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(paragraph.nativeElement.style.color).toBe('blue');
    });
  });

});
