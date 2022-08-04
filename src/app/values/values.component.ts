import { Component, OnInit } from '@angular/core';
import { Value } from './value';
import { VALUES } from '../mock_values';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css'],
})
export class ValuesComponent implements OnInit {
  constructor() {}
  _values = VALUES;

  _newValue: Value = {
    id: 0,
    title: '',
  };

  ngOnInit(): void {}

  isEmptyOrSpaces(str): boolean {
    return str === null || str.match(/^ *$/) !== null;
  }

  onAdd() {
    if (this.isEmptyOrSpaces(this._newValue.title)) return;

    this._newValue.id = this._values.length + 1;

    this._values.push(this._newValue);
    this._newValue = {
      id: 0,
      title: '',
    };
  }

  removeValue(value: Value) {
    this._values.splice(this._values.indexOf(value), 1);
  }
}
