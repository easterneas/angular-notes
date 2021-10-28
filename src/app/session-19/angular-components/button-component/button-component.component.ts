// Pastikan        [EventEmitter]      dan      [Output]
//                                 di-import dari              [@angular/core]!
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponentComponent implements OnInit {

  @Output() onEventTrigger = new EventEmitter()
  @Input() name = ''

  constructor() { }

  ngOnInit(): void {
  }

  // event handlers

  emitEvent() {
    this.onEventTrigger.emit()
  }

}
