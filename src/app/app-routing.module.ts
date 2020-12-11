import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProdutoComponent } from './produto/add-produto/add-produto.component';
import { EditaProdutoComponent } from './produto/edita-produto/edita-produto.component';
import { ListaProdutoComponent } from './produto/lista-produto/lista-produto.component';

const routes: Routes = [
  { path: 'criar-produto', component: AddProdutoComponent}, 
  { path: 'listar-produtos', component: ListaProdutoComponent}, 
  { path: 'editar-produto/:id', component: EditaProdutoComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
