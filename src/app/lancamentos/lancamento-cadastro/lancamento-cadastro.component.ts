import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
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

  //lancamento = new Lancamento();

  formulario: FormGroup | any;

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

  get urlUploadAnexo() {
    return this.lancamentoService.urlUploadAnexo();
  }

  get uploadHeaders() {
    return this.lancamentoService.uploadHeaders();
  }


  configurarFormulario(){
    
    this.formulario = this.formBuild.group({
      codigo: [null],
      tipo: ['RECEITA', Validators.required],
      dataVencimento: [null, Validators.required],
      dataPagamento: [],
      descricao: [null, [this.validarObrigatoriedade, this.validarTamanhoMinimo(5)]],
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

  validarObrigatoriedade(input: FormControl) {
    return (input.value ? null : { obrigatoriedade: true });
  }

  validarTamanhoMinimo(valor: number) {
    return (input: FormControl) => {
      return (!input.value || input.value.length >= valor) ? null : { tamanhoMinimo: { tamanho: valor } };
    };
  }


  get editando(){
    return Boolean(this.formulario.get('codigo').value);
  }

  carregarLanchamento(codigo: number) {

    this.lancamentoService.buscarPorCodigo(codigo)
    .then(lancamento => {
      // 
      this.formulario.patchValue(lancamento);
      this.atualizarTituloEdicao();
    })
    .catch(erro => this.erroHandler.handle(erro));
  }
  
  adicionarLancamento() {
      this.lancamentoService.adicionar(this.formulario.value)
        .then(lanchamentoAdicionado => {
          this.messageService.add({ severity: 'success', detail: 'Lançamento adicionado com sucesso!' });
  
          // form.reset();
          // this.lancamento = new Lancamento();
  
          this.router.navigate(['/lancamentos', lanchamentoAdicionado.codigo]);
  
        })
        .catch(erro => this.erroHandler.handle(erro));
  }

 

atualizarLancamento(){
  this.lancamentoService.atualizar(this.formulario.value)
  .then(lancamento => {
    // this.lancamento = lancamento;
    this.formulario.patchValue(lancamento);

    this.messageService.add({severity: 'success', detail: 'Lançamento alterado com sucesso!'});
    this.atualizarTituloEdicao();
  })
  .catch(erro => this.erroHandler.handle(erro));

}

salvar() {

  if(this.editando){
    this.atualizarLancamento();
  }else{
    this.adicionarLancamento();
  }

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

  novo() {
    this.formulario.reset();
    this.formulario.patchValue(new Lancamento())
    this.router.navigate(['lancamentos/novo']);
  }
  atualizarTituloEdicao(){
    this.title.setTitle(`Edição de lançamento: ${this.formulario.get('descricao').value}`);
  }

  


}
