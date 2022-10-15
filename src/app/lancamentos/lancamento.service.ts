import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Lancamento } from '../core/model';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';


export class LancamentoFiltro {
  descricao?: string;
  dataVencimentoInicio?: Date;
  dataVencimentoFim?: Date;
  pagina = 0;
  itensPorPagina = 10;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl: string;

  constructor(
    private http: HttpClient,

  ) {
    this.lancamentosUrl = `${environment.apiUrl}/lancamentos`
  }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {

    let params = new HttpParams()
    .set('page', filtro.pagina)
    .set('size', filtro.itensPorPagina);

    if (filtro.descricao) {
      params = params.set('descricao', filtro.descricao);
    }

    if(filtro.dataVencimentoInicio) {
      params = params.set('dataVencimentoDe',
      moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'))
    }

    if(filtro.dataVencimentoFim) {
      params = params.set('dataVencimentoAte',
      moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'))
    }

    return this.http.get(`${this.lancamentosUrl}?resumo`, { params })
      .toPromise()
      .then((response: any)=> {
        const lancamentos = response['content'];

        const resultado = {
          lancamentos,
          total: response['totalElements']
        };

        return resultado;
      });
  }

  excluir(codigo: number): Promise<any> {

      return this.http.delete(`${this.lancamentosUrl}/${codigo}`)
      .toPromise()
      .then( () => null);
  }

  adicionar(lancamento: Lancamento): Promise<Lancamento | any>{


    return this.http.post<Lancamento>(this.lancamentosUrl, lancamento, )
    .toPromise();

  }

  atualizar(lancamento: Lancamento): Promise<Lancamento | any> {

    return this.http.put<Lancamento>(`${this.lancamentosUrl}/${lancamento.codigo}`, lancamento)
      .toPromise();
  }

  buscarPorCodigo(codigo: number): Promise<Lancamento> {


    return this.http.get(`${this.lancamentosUrl}/${codigo}`)
      .toPromise()
      .then((response: any) => {
        this.converterStringsParaDatas([response]);

        return response;
      });
  }

  private converterStringsParaDatas(lancamentos: Lancamento[]) {
    for (const lancamento of lancamentos) {
      let offset = new Date().getTimezoneOffset() * 60000;

      lancamento.dataVencimento = new Date(new Date(lancamento.dataVencimento!).getTime() + offset);

      if (lancamento.dataPagamento) {
        lancamento.dataPagamento = new Date(new Date(lancamento.dataPagamento).getTime() + offset);
      }
    }
  }

  uploadHeaders() {
    return new HttpHeaders()
      .append('Authorization', 'Bearer ' + localStorage.getItem('token'))
  }

  urlUploadAnexo(): string {
    return `${this.lancamentosUrl}/anexo`;
  }

}
