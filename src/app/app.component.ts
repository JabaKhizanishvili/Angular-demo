import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [NgbCarouselConfig]
})


export class AppComponent {
  images = [70, 53, 807, 4].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  color: string = "";
  title: string = 'Home';
  link: string = "../assets/vid/test.mp4";
  show: boolean = false;

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
  playVid() {
    this.show = !this.show;
    console.log(this.show)
  }
  jaba(e: any) {
    console.log(e.value)
  }

  myFunction() {
    let name = (document.getElementById("name") as HTMLInputElement).value;
    let surname = (document.getElementById("surname") as HTMLInputElement).value;
    let output = (document.getElementById("output") as HTMLInputElement)
    console.log(name, surname);
    output.innerHTML += `<h3>${name} ${surname}</h3>`;
  }
}
