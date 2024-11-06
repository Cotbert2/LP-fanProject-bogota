import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  ngOnInit(): void {
    //change page

    /*
    this.router.navigate(['/full-color-page'], {
      queryParams: {
        backGroundColor: "red"
      }
    });
    */
  }
  constructor(
    private router: Router
  ) {}


  fanProject1ModalVisible : boolean = false;
  fanProject2ModalVisible : boolean = false;
  fanProject3ModalVisible : boolean = false;

  changeStatusFP1 () : void {
    this.fanProject1ModalVisible = !this.fanProject1ModalVisible;
  }

  changeStatusFP2 () : void {
    this.fanProject2ModalVisible = !this.fanProject2ModalVisible;
  }

  changeStatusFP3 () : void {
    this.fanProject3ModalVisible = !this.fanProject3ModalVisible;
  }

  changeToFullColorPage (color : string) : void {
    this.router.navigate(['/full-color-page'], {
      queryParams: {
        backGroundColor: color
      }
    });
  }

}
