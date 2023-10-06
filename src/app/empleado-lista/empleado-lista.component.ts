import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-empleado-lista',
  templateUrl: './empleado-lista.component.html',
  //styleUrls: ['./empleado-lista.component.css']
})
export class EmpleadoListaComponent {
  empleados: Empleado[];

  constructor(private empleadoServicio: EmpleadoService) {}

  ngOnInit() {
    this.obtenerEmpleados();
  }

  private obtenerEmpleados() {
    this.empleadoServicio.obtenerEmpleadosLista().subscribe(datos => {
      this.empleados= datos;
    });
  }

  onClickSubmit(data:any) {
    //alert("Nombre del empleado : " + data.nombreEmpleado);

    this.empleadoServicio.insertarEmpleado(data.nombreEmpleado, data.apellidoEmpleado,data.emailEmpleado, data.telefonoEmpleado).subscribe(datos =>{})
    
  
 }

}
