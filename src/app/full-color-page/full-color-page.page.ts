import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-full-color-page',
  templateUrl: './full-color-page.page.html',
  styleUrls: ['./full-color-page.page.scss'],
})
export class FullColorPagePage implements OnInit {

  backGroundColor : string = "white";
  isButtonBackVisible : boolean = false;

  constructor( private activedRouter : ActivatedRoute) { 
    this.activedRouter.queryParams.subscribe( params => {
      this.backGroundColor = params.backGroundColor;
    });
  }


  ngOnInit() {
    this.setFullScreen();
  }

  async setFullScreen()  {
    await StatusBar.hide();
  }

  tripleClickCount : number = 0;
  tripleClickTimer : any;

  tripleClick() : void{
    this.tripleClickCount++;
    if(this.tripleClickCount == 1){
      this.tripleClickTimer = setTimeout(() => {
        this.tripleClickCount = 0;
      }, 300);

    }else if(this.tripleClickCount == 2){
      clearTimeout(this.tripleClickTimer);
      this.tripleClickCount = 0;
      this.changeVisibility();
    }
  }

  backMainPage() : void{
    window.history.back();
  }

  changeVisibility() : void{
    console.log("changeVisibility");
    this.isButtonBackVisible = true;
    setTimeout(() => {
      this.isButtonBackVisible = false;
    } , 2000);
  }

  //TODO: triple click anywhere integration

}
