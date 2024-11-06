import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  fanProject1ModalVisible : boolean = true;
  fanProject2ModalVisible : boolean = false;
  fanProject3ModalVisible : boolean = false;

  changeStatusFP1 () : void {
    this.fanProject1ModalVisible = !this.fanProject1ModalVisible;
  }

  changeStatusFP2 () : void {
    this.fanProject1ModalVisible = !this.fanProject1ModalVisible;
  }

  changeStatusFP3 () : void {
    this.fanProject1ModalVisible = !this.fanProject1ModalVisible;
  }

}
