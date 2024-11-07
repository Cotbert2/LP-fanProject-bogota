import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-full-color-page',
  templateUrl: './full-color-page.page.html',
  styleUrls: ['./full-color-page.page.scss'],
})
export class FullColorPagePage implements OnInit {

  backGroundColor : string = "white";
  isButtonBackVisible : boolean = true;

  constructor( private activedRouter : ActivatedRoute) { 
    this.activedRouter.queryParams.subscribe( params => {
      this.backGroundColor = params.backGroundColor;
    });
  }


  ngOnInit() {
    
  }

  backMainPage() : void{
    window.history.back();
  }

  //TODO: triple click anywhere integration

}
