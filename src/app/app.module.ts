import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoListaComponent } from './empleado-lista/empleado-lista.component';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InsertarEmpleadoComponent } from './insertar-empleado/insertar-empleado.component';
import { ModificarEmpleadoComponent } from './modificar-empleado/modificar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoListaComponent,
    InsertarEmpleadoComponent,
    ModificarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
