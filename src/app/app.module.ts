import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './session-24/template-driven-form/template-driven-form.component';
import { LoginReactiveFormComponent } from './session-24/login-reactive-form/login-reactive-form.component';
import { ViewEncapsulationNoneComponent } from './session-23/view-encapsulation-none/view-encapsulation-none.component';
import { ViewEncapsulationShadowDomComponent } from './session-23/view-encapsulation-shadow-dom/view-encapsulation-shadow-dom.component';
import { ViewEncapsulationEmulatedComponent } from './session-23/view-encapsulation-emulated/view-encapsulation-emulated.component';
import { AngularPipesComponent } from './session-22/angular-pipes/angular-pipes.component';
import { AngularExpressionsComponent } from './session-21/angular-expressions/angular-expressions.component';
import { AngularDirectivesComponent } from './session-21/angular-directives/angular-directives.component';
import { AngularLifecycleComponent } from './session-20/angular-lifecycle/angular-lifecycle.component';
import { AngularDataBindingComponent } from './session-20/angular-data-binding/angular-data-binding.component';
import { AngularComponentsComponent } from './session-19/angular-components/angular-components.component';
import { ChildComponentComponent } from './session-19/angular-components/child-component/child-component.component';
import { ButtonComponentComponent } from './session-19/angular-components/button-component/button-component.component';
import { AngularModulesModule } from './session-23/angular-modules/angular-modules.module';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    LoginReactiveFormComponent,
    ViewEncapsulationNoneComponent,
    ViewEncapsulationShadowDomComponent,
    ViewEncapsulationEmulatedComponent,
    AngularPipesComponent,
    AngularExpressionsComponent,
    AngularDirectivesComponent,
    AngularLifecycleComponent,
    AngularDataBindingComponent,
    AngularComponentsComponent,
    ChildComponentComponent,
    ButtonComponentComponent,
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
