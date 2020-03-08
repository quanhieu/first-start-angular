import {Component} from '@angular/core';

@Component({
  templateUrl: './world.component.html',
  selector: 'app-world',
  styleUrls: [`./world.component.scss`]
})

export class WorldComponent {
  en = 'Hello';
  vn = 'Xin chao';
  imgUrl = 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png';
  isHidden = true;
  toggleHidden() {
    this.isHidden = !this.isHidden;
  }
}
