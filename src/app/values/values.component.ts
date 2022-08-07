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

  @Output() newLengthEvent = new EventEmitter();

  ngOnInit(): void {
    this.maxValuesLength = MAX_NUMBER_OF_VALUES;
    this.sendNewLength();
  }

  isEmptyOrSpaces(str): boolean {
    return str === null || str.match(/^ *$/) !== null;
  }

  onAdd() {
    if (this._values.length == MAX_NUMBER_OF_VALUES) {
      alert(`لا يمكن اضافة قيم أكثر من "${MAX_NUMBER_OF_VALUES}"`);
      return;
    }
    if (this.isEmptyOrSpaces(this._newValue.title)) return;

    this._newValue.id = this._values.length + 1;

    this._values.push(this._newValue);
    this._newValue = {
      id: 0,
      title: '',
    };

    this.sendNewLength();
  }

  sendNewLength() {
    this.newLengthEvent.emit(this._values.length);
  }

  removeValue(value: Value) {
    this._values.splice(this._values.indexOf(value), 1);
    this.sendNewLength();
  }
}
