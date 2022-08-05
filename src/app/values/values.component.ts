import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Value } from './value';
import { VALUES, MAX_NUMBER_OF_VALUES } from '../mock_values';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css'],
})
export class ValuesComponent implements OnInit {
  constructor() {}
  _values = VALUES;

  maxValuesLength: number;

  _newValue: Value = {
    id: 0,
    title: '',
  };

  @Output() newLengthEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.maxValuesLength = MAX_NUMBER_OF_VALUES;
  }

  isEmptyOrSpaces(str): boolean {
    return str === null || str.match(/^ *$/) !== null;
  }

  onAdd() {
    if (this._values.length == MAX_NUMBER_OF_VALUES) {
      alert(
        `max number of personal values reacherd  "${MAX_NUMBER_OF_VALUES}"`
      );
      return;
    }
    if (this.isEmptyOrSpaces(this._newValue.title)) return;

    this._newValue.id = this._values.length + 1;

    this._values.push(this._newValue);
    this._newValue = {
      id: 0,
      title: '',
    };

    this.sendNewLength(this._values.length);
  }

  sendNewLength(length) {
    this.newLengthEvent.emit(length);
  }

  removeValue(value: Value) {
    this._values.splice(this._values.indexOf(value), 1);
  }
}
