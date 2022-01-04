import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input()
  value = 0;
  @Output()
  incremented = new EventEmitter<number>();
  message = '';

  increment() {
    this.value += 2;
    this.incremented.emit(this.value);
  }

  ngOnInit(): void {
    this.message = 'Counter';
  }

}
