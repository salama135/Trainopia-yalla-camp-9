import { Component, OnInit } from '@angular/core';
import { VALUES, MAX_NUMBER_OF_VALUES, isArabic } from './mock_values';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'أهم ثلاث قيم';

  choose: boolean;
  newLength: Number;

  ngOnInit() {
    this.newLength = VALUES.length;
    this.choose = false;
  }

  next() {
    console.log(this.newLength);
    if (this.newLength < MAX_NUMBER_OF_VALUES) {
      alert(
        `max number of personal values not reacherd "${MAX_NUMBER_OF_VALUES}"`
      );
      return;
    }

    this.choose = true;
  }

  reset() {
    this.choose = false;
  }

  setNewLength(length) {
    console.log(length);
    this.newLength = length;
  }
}
