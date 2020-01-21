import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history/history.service';
import { History, HistoryReponse } from 'src/app/models/history.models';

@Component({
  selector: 'app-historico-alunos',
  templateUrl: './historico-alunos.component.html',
  styleUrls: ['./historico-alunos.component.scss']
})
export class HistoricoAlunosComponent implements OnInit {
  histories = new Array<History>()
  eventos = [
    {data: '02/01/2020', alunos:[
      {nome: 'Davi', idade: 5, classe: 'teste', pai: 'teste', entrada: '00/00/0000', saida: '00/00/0000', liberador: 'teste'},
      {nome: 'Bryan', idade: 0, classe: '', pai: '', entrada: '', saida: '', liberador: ''},
      {nome: 'Julinho', idade: 0, classe: '', pai: '', entrada: '', saida: '', liberador: ''},
      {nome: 'Nathally', idade: 0, classe: '', pai: '', entrada: '', saida: '', liberador: ''},
    ]},
    {data: '02/01/2020', alunos:[
      {nome: 'José', idade: 0, classe: '', pai: '', entrada: '', saida: '', liberador: ''},
      {nome: 'João', idade: 0, classe: '', pai: '', entrada: '', saida: '', liberador: ''},
    ]},
    {data: '02/01/2020', alunos:[
      {nome: 'Ruivo', idade: 0, classe: '', pai: '', entrada: '', saida: '', liberador: ''},
    ]},
  ]; //Populado pelo banco

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.historyService.getHistory().subscribe((histories: Array<HistoryReponse>) => {
      console.log(histories)
      histories.map(history => {
        this.histories.push(new History(history))
      })
    })
  }

}
