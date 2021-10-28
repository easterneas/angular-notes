import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';



@NgModule({
  declarations: [
    TodoDashboardComponent
  ],
  imports: [
    CommonModule
  ],

  // Kita harus export component yang dibutuhkan, jika kita ingin
  // menggunakan component di dalam root component
  exports: [
    TodoDashboardComponent
  ]
})
export class AngularModulesModule { }
