import { Component } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
@Component({
  selector: 'app-insertar-empleado',
  templateUrl: './insertar-empleado.component.html',
  styleUrls: ['./insertar-empleado.component.css']
})
export class InsertarEmpleadoComponent {

  constructor(private empleadoServicio: EmpleadoService) {}

  onClickSubmit(data:any) {
    //alert("Nombre del empleado : " + data.nombreEmpleado);

    this.empleadoServicio.insertarEmpleado(data.nombreEmpleado, data.apellidoEmpleado,data.emailEmpleado, data.telefonoEmpleado).subscribe(datos =>{})
    
  
 }

}
