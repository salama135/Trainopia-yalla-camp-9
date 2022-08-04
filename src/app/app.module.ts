import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ValuesComponent } from './values/values.component';
import { ChooseValueComponent } from './choose_value/choose_value.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ValuesComponent,
    ChooseValueComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
