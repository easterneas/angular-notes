import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // app states

  title = 'angular-notes';
  currentSession = 19
  sessions = [
    19, 20, 21, 22, 23, 24, 25, 26, 27
  ]

  // form states

  form: {
    inputData: FormGroup
  } = {
    inputData: new FormGroup({
      session: new FormControl(19)
    })
  }

  // setters and getters

  get session () {
    return this.form.inputData.get('session')
  }

  // event handler(s)

  changeSession() {
    if(this.session){
      const value = this.session.value

      this.currentSession = value
    }
  }
}
