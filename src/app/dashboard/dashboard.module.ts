import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,

    PanelModule,
    ChartModule,

    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
