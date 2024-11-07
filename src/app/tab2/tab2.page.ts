import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Share } = Plugins;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  linkWhatsApp : string = "https://chat.whatsapp.com/JdtOJ9i67Lk1S13j8qMhXm";
  linkInstagram : string = "https://www.instagram.com/linkinparkcolombia/";
  linkPlayList : string = "https://open.spotify.com/playlist/3DMnCkMO8GJKPf6wMkBpYm?si=xRQ8_8MMR3CSEZTdddrGzw";
  linkGithub : string = "https://github.com/Cotbert2/";

  async openUrlbasicShare() {
    await Share.share({
      title: 'Fan Projects LP Colombia 2024',
      text: 'Conoce más sobre los proyectos de la comunidad de fans de Linkin Park en Colombia',
      url : 'https://drive.google.com/file/d/1eUaCOahlKg0zUyAyzrw1_IDhHXZm9Gko/view',
      dialogTitle: 'Linkin Park Colombia'
    });
  }

  openUrl (url : string) : void {
    window.open(url, '_blank');
  }


  constructor() {}

}
