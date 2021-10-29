import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-lifecycle',
  templateUrl: './angular-lifecycle.component.html',
  styleUrls: ['./angular-lifecycle.component.css']
})
export
class AngularLifecycleComponent
// interface bersifat optional namun disarankan,
// karena akan berguna pada aplikasi yang kompleks, di mana
// kita memiliki component yang di-extend, dan memerlukan hooks
// dari parent class.
implements OnInit
{

  constructor() { }

  // Lifecycle Hooks

  ngOnChanges(): void {}

  // dijalankan pertama kali component dibuat
  ngOnInit(): void {}

  // dijalankan setiap kali ada perubahan pada DOM
  // WARNING! Jika tidak di-handle dengan benar, akan berpengaruh
  // pada performa yang buruk!
  ngDoCheck(): void {}

  ngComponentAfterInit(): void {}
}
