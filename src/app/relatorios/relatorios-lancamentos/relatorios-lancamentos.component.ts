import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorios-lancamentos',
  templateUrl: './relatorios-lancamentos.component.html',
  styleUrls: ['./relatorios-lancamentos.component.css']
})
export class RelatoriosLancamentosComponent implements OnInit {

  periodoInicio?: Date;
  periodoFim?: Date;

  constructor() { }

  ngOnInit(): void {
  }

  gerar() {
    console.log(this.periodoInicio);
    console.log(this.periodoFim);
  }

}
