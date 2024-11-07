import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  async basicShare() {
    await Share.share({
      title: 'Share my favorite app',
      text: 'This app is awesome, try it out!',
      url: 'https://ionicframework.com/docs/native/share',
      dialogTitle: 'Share with buddies'
    });
  }


  constructor() {}

}
