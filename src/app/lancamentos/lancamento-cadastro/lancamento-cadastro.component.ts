import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';


import { MessageService } from 'primeng/api';

import { PessoaService } from 'src/app/pessoas/pessoa.service';
import { CategoriaService } from '../../categorias/categoria.service';
import { ErrorHandlerService } from '../../core/error-handler.service';
import { Lancamento } from '../../core/model';
import { LancamentoService } from '../lancamento.service';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {


  categorias: any[] = [];

  pessoas: any[] =  [];

  lancamento = new Lancamento();

  formulario: FormControl | any;

  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' },
  ];


  constructor(
    private categoriaService: CategoriaService,
    private lancamentoService: LancamentoService,
    private messageService: MessageService,
    private erroHandler: ErrorHandlerService,
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title,
    private formBuild: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.configurarFormulario();

    const codigoLancamento = this.route.snapshot.params['codigo'];

    this.title.setTitle('Novo de lançamento');

    if(codigoLancamento && codigoLancamento !== 'novo'){
    this.carregarLanchamento(codigoLancamento);
    }

    this.carregarCategorias();
    this.carregarPessoas();
  }

  configurarFormulario(){
    
    this.formulario = this.formBuild.group({
      codigo: [null],
      tipo: ['RECEITA', Validators.required],
      dataVencimento: [null, Validators.required],
      dataPagamento: [],
      descricao: [null, [Validators.required, Validators.minLength(5)]],
      valor: [null, Validators.required],
      categoria: this.formBuild.group({
        codigo: [null, Validators.required],
        nome: []
      }), 
      pessoa: this.formBuild.group({
        codigo: [null, Validators.required],
        nome: []
      }),
      observacao: []
    });
  }


  get editando(){
    return Boolean(this.lancamento.codigo);
  }

  carregarLanchamento(codigo: number) {

    this.lancamentoService.buscarPorCodigo(codigo)
    .then(lancamento => {
      this.lancamento = lancamento;
      this.atualizarTituloEdicao();
    })
    .catch(erro => this.erroHandler.handle(erro));
  }

  salvar(form: NgForm) {

    if(this.editando){
      this.atualizarLancamento(form);
    }else{
      this.adicionarLancamento(form);
    }

}

atualizarLancamento(form: NgForm){
  this.lancamentoService.atualizar(this.lancamento)
  .then(lancamento => {
    this.lancamento = lancamento;

    this.messageService.add({severity: 'success', detail: 'Lançamento alterado com sucesso!'});
    this.atualizarTituloEdicao();
  })
  .catch(erro => this.erroHandler.handle(erro));

}

  adicionarLancamento(form: NgForm) {
    this.lancamentoService.adicionar(this.lancamento)
      .then(lanchamentoAdicionado => {
        this.messageService.add({ severity: 'success', detail: 'Lançamento adicionado com sucesso!' });

        // form.reset();
        // this.lancamento = new Lancamento();

        this.router.navigate(['/lancamentos', lanchamentoAdicionado.codigo]);

      })
      .catch(erro => this.erroHandler.handle(erro));
}

  carregarCategorias(){
    return this.categoriaService.listarTodas()
    .then( categorias => {
      this.categorias = categorias.map((c: any) => ({ label: c.nome, value: c.codigo }));
     })
    .catch(erro => this.erroHandler.handle(erro));
  }

  carregarPessoas(){
    return this.pessoaService.listarTodas()
    .then( pessoas => {
      this.pessoas = pessoas.map( (p: any) => ({ label: p.nome, value: p.codigo }));
    })
    .catch(erro => this.erroHandler.handle(erro));
  }

  novo(form: NgForm) {
    form.reset();

    setTimeout(() => {
      this.lancamento = new Lancamento();
    }, 1);

    this.router.navigate(['lancamentos/novo']);
  }

  atualizarTituloEdicao(){
    this.title.setTitle(`Edição de lançamento: ${this.lancamento.descricao}`);
  }


}
