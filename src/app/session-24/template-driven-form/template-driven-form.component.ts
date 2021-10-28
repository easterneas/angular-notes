import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  categories: string[] = [
    'Shopping',
    'Work',
    'Education',
    'Financing'
  ];

  tasks: Task[] = []

  // Event Handlers
  handleFormOnSubmit (form: NgForm) {
    const { taskName, category } = form.value

    this.tasks.push(new Task(taskName, "incomplete", category))

    form.reset()
  }

}
