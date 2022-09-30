

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CalendarModule } from 'primeng/calendar';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RelatorioLancamentosComponent } from './relatorio-lancamentos/relatorio-lancamentos.component';




@NgModule({
  declarations: [RelatorioLancamentosComponent],
  imports: [
  
  CommonModule,
    FormsModule,
    

    CalendarModule,

    SharedModule,
    RelatoriosRoutingModule
  ]
})
export class RelatoriosModule { }