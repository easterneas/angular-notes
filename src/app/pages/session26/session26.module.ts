import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Session26Component } from './session26.component';
import { Session26RoutingModule } from './session26-routing.module';

import { ClickablesModule } from 'src/app/components/clickables/clickables.module';

@NgModule({
  declarations: [
    Session26Component,
  ],
  imports: [
    CommonModule,
    Session26RoutingModule,
    ClickablesModule
  ],
})
export class Session26Module { }
