

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RelatoriosLancamentosComponent } from './relatorios-lancamentos/relatorios-lancamentos.component';




@NgModule({
  declarations: [RelatoriosLancamentosComponent],
  imports: [
  
  CommonModule,
    FormsModule,
    

    CalendarModule,

    SharedModule,
    RelatoriosRoutingModule
  ]
})
export class RelatoriosModule { }