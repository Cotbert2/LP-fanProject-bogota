import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-color-page',
  templateUrl: './full-color-page.page.html',
  styleUrls: ['./full-color-page.page.scss'],
})
export class FullColorPagePage implements OnInit {

  constructor() { }

  @Input() backGroundColor : string = "";

  ngOnInit() {
    
  }

  //TODO: triple click anywhere integration

}
