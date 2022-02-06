import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genero } from 'src/app/enumerators/genero.enum';
import { Endereco } from 'src/app/models/endereco.model';
import { Funcionario } from 'src/app/models/funcionario.model';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-edit',
  templateUrl: './funcionario-edit.component.html',
  styleUrls: ['./funcionario-edit.component.css']
})
export class FuncionarioEditComponent implements OnInit {

  @Input() selecionado = false;

  @Input() funcionarioAtual: Funcionario = new Funcionario();
  
  funcionarioEndereco: Endereco = new Endereco();
  message = '';
  generos = [{value: Genero.MASCULINO, name: "Masculino"},
             {value: Genero.FEMININO, name: "Feminino"},
             {value: Genero.OUTROS, name: "Outro"}]

  constructor(
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.selecionado) {
      this.message = '';
      this.findFuncionario(this.route.snapshot.params["id"]);
    } else if (this.funcionarioAtual.endereco) {
      this.funcionarioEndereco = this.funcionarioAtual.endereco;
    }

    console.log("this.funcionarioAtual");
    console.log(this.funcionarioAtual);
    
  }

  findFuncionario(id: string): void {
    this.funcionarioService.findById(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.funcionarioAtual = res;
          if (res.endereco) {
            this.funcionarioEndereco = res.endereco;
          }
        },
        error: (e) => console.error(e)
      });
  }

  atualiza(): void {
    this.message = '';
    if (this.funcionarioAtual.id) {
      this.funcionarioService.update(this.funcionarioAtual.id, this.funcionarioAtual)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.message = 'Funcionário Atualizado com Sucesso';
          },
          error: (e) => console.error(e)
        });
    }
  }

  delete(): void {
    this.funcionarioService.delete(this.funcionarioAtual.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/funcionarios']);
        },
        error: (e) => console.error(e)
      });
  }
}
