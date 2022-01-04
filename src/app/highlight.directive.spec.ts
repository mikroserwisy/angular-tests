import {Component} from "@angular/core";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HighlightDirective} from "./highlight.directive";

@Component({
  template: `<p appHighlight>Test</p>`
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
    const paragraph: HTMLElement = fixture.nativeElement;
    paragraph.dispatchEvent(new Event('mouseenter'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(paragraph.style.backgroundColor).toBe('blue');
    });
  });

});
