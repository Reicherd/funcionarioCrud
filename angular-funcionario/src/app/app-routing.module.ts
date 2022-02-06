import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioAddComponent } from './components/funcionario-add/funcionario-add.component';
import { FuncionarioEditComponent } from './components/funcionario-edit/funcionario-edit.component';
import { FuncionarioListComponent } from './components/funcionario-list/funcionario-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'funcionarios', pathMatch: 'full' },
  { path: 'funcionarios', component: FuncionarioListComponent },
  { path: 'funcionario/:id', component: FuncionarioEditComponent },
  { path: 'add', component: FuncionarioAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
