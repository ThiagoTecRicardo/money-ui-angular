import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../seguranca/auth.guard';
import { RelatoriosLancamentosComponent } from './relatorios-lancamentos/relatorios-lancamentos.component';



const routes: Routes = [
  {
    path: 'lancamentos',
    component: RelatoriosLancamentosComponent,
    canActivate: [AuthGuard],
    data: {roloes: ['ROLE_PESQUISAR_LANCAMENTOS']}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  


exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
