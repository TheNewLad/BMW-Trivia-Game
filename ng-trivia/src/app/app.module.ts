import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { CounterService } from './counter.service';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
