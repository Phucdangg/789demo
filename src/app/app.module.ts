import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoTaskOneComponent } from './demo-task-one/demo-task-one.component';
import { DemoTaskTwoComponent } from './demo-task-two/demo-task-two.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoTaskOneComponent,
    DemoTaskTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
