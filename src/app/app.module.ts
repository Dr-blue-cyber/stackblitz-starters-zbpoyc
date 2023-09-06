import { NgModule } from '@angular/core' 
import { BrowserModule } from '@angular/platform-browser' 
import { AppComponent } from './app.component'
import { CounterComponent } from './counter.component'
import { SurajComponent } from './suraj.component'


@NgModule({
  declarations: [AppComponent, CounterComponent, SurajComponent], 
  imports: [BrowserModule], 
  bootstrap: [AppComponent],
})

export class AppModule{}