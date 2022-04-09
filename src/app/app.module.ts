import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ThiagoComponent } from './thiago/thiago.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path:'', component: ThiagoComponent},
  ]) ],
  declarations: [ AppComponent, HelloComponent, ThiagoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
