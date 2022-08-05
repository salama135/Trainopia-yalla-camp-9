import { Component, Input, OnInit } from '@angular/core';
import { Value } from '../values/value';
import { VALUES } from '../mock_values';

@Component({
  selector: 'app-choose_value',
  templateUrl: './choose_value.component.html',
  styleUrls: ['./choose_value.component.css'],
})
export class ChooseValueComponent implements OnInit {
  constructor() {}

  _values = VALUES;

  i: any = 0;
  j: any = 0;
  finished: boolean = false;

  _valueOption1: Value;
  _valueOption2: Value;

  ngOnInit(): void {
    this.i = 0;
    this.j = this.i + 1;
    this._valueOption1 = this._values[this.j - 1];
    this._valueOption2 = this._values[this.j];

    this.finished = false;
  }

  choose(optionNumber: Number) {
    if (this.finished) return;

    if (optionNumber == 2) {
      this._values[this.j - 1] = this._valueOption2;
      this._values[this.j] = this._valueOption1;
    } else {
      this.j = 0;
    }

    this.nextIteration();
  }

  nextIteration() {
    this.j--;
    if (this.j <= 0) {
      this.i++;
      if (this.i >= this._values.length - 1) {
        this.finished = true;
        this.viewTop3PerosnalValues();
        return;
      }

      this.j = this.i + 1;

      this._valueOption1 = this._values[this.j - 1];
      this._valueOption2 = this._values[this.j];
      return;
    } else {
      this._valueOption1 = this._values[this.j - 1];
      this._valueOption2 = this._values[this.j];
    }
  }

  viewTop3PerosnalValues() {
    console.log(this._values[0]);
    console.log(this._values[1]);
    console.log(this._values[2]);
  }
}
