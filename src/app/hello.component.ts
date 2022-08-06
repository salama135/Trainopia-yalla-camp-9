import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<div class="jumbotron  rounded-5" style="background-color: #00ADB5;">
  <h1 class="fs-1 fw-bolder">{{title}}</h1>
  </div>`,
  styles: [`h1 { }`],
})
export class HelloComponent {
  @Input() title: string;
}
