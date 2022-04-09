import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ThiagoComponent } from './thiago/thiago.component';
import { RouterModule } from '@angular/router';
import { ThiagoDisciplinaService } from './thiago-disciplina.service';
import { ThiagoListaComponent } from './thiago-lista/thiago-lista.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path:'', component: ThiagoComponent},
    {path:'thiago-lista', component: ThiagoListaComponent},
  ]) ],
  declarations: [ AppComponent, HelloComponent, ThiagoComponent, ThiagoListaComponent ],
  bootstrap:    [ AppComponent ],
  providers:[ ThiagoDisciplinaService]
})
export class AppModule { }
