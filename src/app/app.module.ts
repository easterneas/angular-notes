import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './session-24/template-driven-form/template-driven-form.component';
import { LoginReactiveFormComponent } from './session-24/login-reactive-form/login-reactive-form.component';
import { AngularModulesModule } from './session-23/angular-modules/angular-modules.module';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    LoginReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
