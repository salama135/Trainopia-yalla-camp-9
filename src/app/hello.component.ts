import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<div class="jumbotron bg-primary rounded-5">
  <h1 class="display-4">{{title}}</h1>
  </div>`,
  styles: [`h1 { }`],
})
export class HelloComponent {
  @Input() title: string;
}
