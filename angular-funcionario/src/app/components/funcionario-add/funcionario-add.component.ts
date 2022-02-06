import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/enumerators/genero.enum';
import { Endereco } from 'src/app/models/endereco.model';
import { Funcionario } from 'src/app/models/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-add',
  templateUrl: './funcionario-add.component.html',
  styleUrls: ['./funcionario-add.component.css']
})
export class FuncionarioAddComponent implements OnInit {

  funcionario = new Funcionario();
  endereco = new Endereco();
  data = '';
  salvo = false;
  generos = [{value: Genero.MASCULINO, name: Genero.MASCULINO.toString()},
             {value: Genero.FEMININO, name: Genero.FEMININO.toString()},
             {value: Genero.OUTROS, name: Genero.OUTROS.toString()}]

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
  }

  save(): void {
    this.funcionario.endereco = this.endereco;
    Genero.MASCULINO
    this.funcionarioService.create(this.funcionario)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.salvo = true;
        },
        error: (e) => console.error(e)
      });
  }

  newFuncionario(): void {
    this.salvo = false;
    this.funcionario = new Funcionario();
    this.endereco = new Endereco();
  }

}
