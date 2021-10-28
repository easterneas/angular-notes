import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-reactive-form',
  templateUrl: './login-reactive-form.component.html',
  styleUrls: ['./login-reactive-form.component.css']
})
export class LoginReactiveFormComponent implements OnInit {

  constructor() { }

  loginData = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  handleLoginForm () {
    console.log(this.loginData.get('username'))
    console.log(this.loginData.get('password'))
  }

  ngOnInit(): void {
  }

}
