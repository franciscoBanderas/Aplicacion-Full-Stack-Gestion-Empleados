import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoListaComponent } from './empleado-lista/empleado-lista.component';
import { InsertarEmpleadoComponent } from './insertar-empleado/insertar-empleado.component';
import { ModificarEmpleadoComponent } from './modificar-empleado/modificar-empleado.component';
import { SigninComponent } from './signin/signin.component';


const routes: Routes = [
{path: 'empleados', component: EmpleadoListaComponent},
{path: 'insertar', component: InsertarEmpleadoComponent},
{path: 'modificar', component: ModificarEmpleadoComponent},
{path: 'signin',component:SigninComponent},
{path:'', redirectTo: 'empleados', pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
