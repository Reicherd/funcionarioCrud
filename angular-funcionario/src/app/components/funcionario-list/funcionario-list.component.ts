import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.css']
})
export class FuncionarioListComponent implements OnInit {

  funcionarios?: Funcionario[];
  funcionarioAtual: Funcionario = {};
  indexAtual = -1;
  nome = '';

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.findFuncionarios();
  }

  findFuncionarios(): void {
    this.funcionarioService.findAll()
      .subscribe({
        next: (res) => {
          this.funcionarios = res;
          console.log(res);
        },
        error: (e) => console.error(e)
      });
  }

  recarrega(): void {
    this.findFuncionarios();
    this.funcionarioAtual = {};
    this.indexAtual = -1;
  }

  selecionaFuncionario(funcionario: Funcionario, index: number): void {
    this.funcionarioAtual = funcionario;
    this.indexAtual = index;
  }

  encontraPorNome(): void {
    this.funcionarioAtual = {};
    this.indexAtual = -1;

    this.funcionarioService.findByNome(this.nome)
      .subscribe({
        next: (res) => {
          this.funcionarios = res;
          console.log("Purque");
          console.log(res);
        },
        error: (e) => console.error(e)
      });
  }
}
