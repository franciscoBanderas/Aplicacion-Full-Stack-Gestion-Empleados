import { Component } from '@angular/core';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-modificar-empleado',
  templateUrl: './modificar-empleado.component.html',
  styleUrls: ['./modificar-empleado.component.css']
})
export class ModificarEmpleadoComponent {


  constructor(private empleadoServicio: EmpleadoService) {}

  onClickSubmit(data:any) {
    //alert("Nombre del empleado : " + data.nombreEmpleado);

    this.empleadoServicio.modificarEmpleado(data.idEmpleado,data.nombreEmpleado, data.apellidoEmpleado,data.emailEmpleado, data.telefonoEmpleado).subscribe(datos =>{})
    
  
 }

}
