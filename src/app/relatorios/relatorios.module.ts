import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RelatorisLancamentosComponent } from './relatoris-lancamentos/relatoris-lancamentos.component';


@NgModule({
  declarations: [
    RelatorisLancamentosComponent
  ],
  imports: [
 
  CommonModule,
    SharedModule,
    RelatoriosRoutingModule
  ]
})
export class RelatoriosModule { }
