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
