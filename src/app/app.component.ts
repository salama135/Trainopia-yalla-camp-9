import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Top 3 Peronal Values';

  choose: boolean;

  ngOnInit() {
    this.choose = false;
  }

  next() {
    this.choose = true;
  }

  reset() {
    this.choose = false;
  }
}
