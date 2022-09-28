import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  

  pieChartData: any;
  lineChartData: any;

  basicData = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'April', 'Maio', 'Junho', 'Julho', 'Agosto'],
    datasets: [
        {
            label: 'Receitas',
            backgroundColor: '#109618',
            data: [18000, 18000, 18000, 18000, 18000, 18000, 18000, 18000]
        },
        {
            label: 'Despesas',
            backgroundColor: '#D62B00',
            data: [12000, 17000, 14678, 16900, 14567, 12345, 16543, 15600]
        }
    ]
};


  constructor(private dashboardService: DashboardService) { }


  ngOnInit() {

    this.configurarGraficoPizza();
    this.configurarGraficoLinha();
  }

  configurarGraficoPizza(){
    this.dashboardService.lancamentosPorCategoria()
    .then(dados => {
      this.pieChartData = {
        labels: dados.map(dado => dado.categoria.nome),
        datasets: [
          {
            data: dados.map(dado => dado.total),
            backgroundColor: ['#FF9900', '#109618', '#990099', '#3B3EAC', '#0099C6',
                '#DD4477', '#3366CC', '#DC3912', '##ADD8E6', '	#2F4F4F', '	#FFFF00', '#FFC0CB', '#4B0082']
          }
        ]
      };
    });
  }
  configurarGraficoLinha() {
    this.dashboardService.lancamentosPorDia()
      .then(dados => {
        const diasDoMes = this.configurarDiasMes();

        const totaisReceitas = this.totaisPorCadaDiaMes(
          dados.filter(dado => dado.tipo === 'RECEITA'), diasDoMes);

        const totaisDespesas = this.totaisPorCadaDiaMes(
          dados.filter(dado => dado.tipo === 'DESPESA'), diasDoMes);

        this.lineChartData = {
          labels: diasDoMes,
          datasets: [
            {
              label: 'Receitas',
              data: totaisReceitas,
              borderColor: '#109618'
            }, {
              label: 'Despesas',
              data: totaisDespesas,
              borderColor: '#D62B00'
            }
          ]
        }
      });
  }

  private totaisPorCadaDiaMes(dados: any, diasDoMes: any) {
    const totais: number[] = [];
    for (const dia of diasDoMes) {
      let total = 0;

      for (const dado of dados) {
        if (dado.dia.getDate() === dia) {
          total = dado.total;
          break;
        }
      }

      totais.push(total);
    }

    return totais;
  }

  private configurarDiasMes() {
    const mesReferencia = new Date();
    mesReferencia.setMonth(mesReferencia.getMonth() + 1);
    mesReferencia.setDate(0);
    const quantidade = mesReferencia.getDate();

    const dias: number[] = [];
    for (let i = 1; i <= quantidade; i++) {
      dias.push(i);
    }

    return dias;
  }
}


