# crossComponentCommunicationAngular
use of @input( ) and @output( ) decorator for cross commumication between parent and child component,

====================================================================================================
app.component.html

'''<p>root works</p>'''
'''<app-parent></app-parent>'''

=====================================================================================================
parent.component.html

<h4>parent component</h4>
<label> enter the input for child component:</label>
<input type="text" class="form-control" [(ngModel)]="parent2child">
<h5>output from child: {{dataFromChild}}</h5>
<hr>
<app-child [dataFromParent]="parent2child" (eventFromChild)="eventReceivedFromChild($event)"></app-child>

===========================================================================================================
parent.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  parent2child!: string
  dataFromChild!: string

  eventReceivedFromChild(event: string) {
    this.dataFromChild = event;
  }

}

===========================================================================================================
child.component.ts

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

==========================================================================================================
child.component.html
  
<h4>child component</h4>
<label> enter the input for parent component:</label>
<input type="text" class="form-control" [(ngModel)]="child2parent" (input)="fromChildToParent()">
<h5>output from parent: {{dataFromParent}}</h5>
