import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado-lista',
  templateUrl: './empleado-lista.component.html',
  styleUrls: ['./empleado-lista.component.css']
})
export class EmpleadoListaComponent {
  empleados: Empleado[];

  constructor(private empleadoServicio: EmpleadoService) {}

  ngOnInit() {
    this.obtenerEmpleados();
  }

  private obtenerEmpleados() {
    this.empleadoServicio.obtenerEmpleadosLista().subscribe((datos) => {
      this.empleados = datos;
    });
  }

  public borrarEmpleado(id: number) {
    this.empleadoServicio.borrarEmpleado(id).subscribe((datos) => {this.obtenerEmpleados()});
  }
}
