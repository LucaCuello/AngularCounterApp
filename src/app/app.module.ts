import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CounterAppComponent } from './counter-app/counter-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CounterAppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatButtonModule],
  providers: [],
  bootstrap: [CounterAppComponent],
})
export class AppModule {}
