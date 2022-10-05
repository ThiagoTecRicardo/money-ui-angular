import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';


import { CadastroPessoalComponent } from './cadastro-pessoa/cadastro-pessoa.componen';

import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { SharedModule } from '../shared/shared.module';
import { PessoasRoutingModule } from './pessoas-routing-module';
import { PessoaCadastroContatoComponent } from './pessoa-cadastro-contato/pessoa-cadastro-contato.component';




@NgModule({
   imports: [


    CommonModule,
    FormsModule,
    RouterModule,

    InputTextModule,
    PanelModule,
    DialogModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputMaskModule,
    
    SharedModule,
    PessoasRoutingModule
  ],
  declarations: [

    PessoasPesquisaComponent,
    CadastroPessoalComponent,
    PessoaCadastroContatoComponent
  ],
  exports: []

})
export class PessoasModule { }
