import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { RuneDetailsComponent } from './components/rune_details/rune_details.component';

import { RuneDetailsService } from './services/rune_details.service';

@NgModule({
  declarations: [
    AppComponent,
    RuneDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    RuneDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
