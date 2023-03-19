import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoTaskOneComponent } from './demo-task-one/demo-task-one.component';
import { DemoTaskTwoComponent } from './demo-task-two/demo-task-two.component';

const routes: Routes = [
  {
    path: '',
    component : DemoTaskOneComponent
  },
  {
    path: '1',
    component : DemoTaskTwoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
