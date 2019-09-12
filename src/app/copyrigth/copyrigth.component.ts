import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyrigth',
  templateUrl: './copyrigth.component.html',
  styleUrls: ['./copyrigth.component.css']
})
export class CopyrigthComponent implements OnInit {

  copyright:String = '© ACME S.A.';
  hoy: any = new Date();
  constructor() { }

  ngOnInit() {
  }

}
