import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-components',
  templateUrl: './angular-components.component.html',
  styleUrls: ['./angular-components.component.css']
})
export class AngularComponentsComponent implements OnInit {

  // saya siapkan 2 property dari parent, lalu akan dilempar
  // setiap value-nya ke ChildComponent

  // Perhatikan panah dari alur passing data!

  //    parentCounter
  //          |
  //    parentMessage           name                 passing prop value
  //          |                  |
  // Parent ---> ChildComponent ---> ButtonComponent
  //                    |                   |
  //                 counter               name      property
  //                    |
  //                 message
  parentCounter = 0
  parentMessage = 'Hi! I am your parent'

  constructor() { }

  ngOnInit(): void { }

  // event handlers

  // saya juga siapkan 2 event handler, yang satu untuk
  // mengubah pesan, yang satunya lagi adalah untuk
  // menambah counter dengan 1

  // Perhatikan panah dari alur event handler!

  //     lempar event       lempar event
  // Parent <--- ChildComponent <--- ButtonComponent

  changeMessageOnParent () {
    this.parentMessage = "Hi! Am I your child?"
  }

  changeCounterOnParent () {
    this.parentCounter++
  }

}
