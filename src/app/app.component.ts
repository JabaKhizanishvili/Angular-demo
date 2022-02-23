import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbCarouselConfig]
})

// export class NgbdCarouselConfig {
//   images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

//   constructor(config: NgbCarouselConfig) {
//     // customize default values of carousels used by this component tree
//     config.interval = 10000;
//     config.wrap = false;
//     config.keyboard = false;
//     config.pauseOnHover = false;
//   }
// }

export class AppComponent {
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  color: string = "";
  title: string = 'Home';
  link: string = "../assets/vid/test.mp4";
  click(e: any): void {
    if (this.color == "red") {
      this.color = "blue";
      this.title = "Home";
    } else {
      this.color = "red";
      this.title = "ხოუმი";
    }
    e.target.style.backgroundColor = this.color;

  }

}
