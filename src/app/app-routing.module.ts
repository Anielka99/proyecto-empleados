import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';

const routes: Routes = [
  {path: '', redirectTo: 'list-empleado', pathMatch: 'full'},
  {path: 'list-empleado', component: ListEmpleadosComponent},
  {path: 'create-empleado', component: CreateEmpleadoComponent},
  {path: 'editEmpleado/:id', component: CreateEmpleadoComponent},
  {path: '**', redirectTo: 'list-empleado', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
