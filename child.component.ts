import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() dataFromParent!: string
  child2parent!: string
  @Output() eventFromChild = new EventEmitter<string>();

  fromChildToParent() {
    this.eventFromChild.emit(this.child2parent);
  }

}
