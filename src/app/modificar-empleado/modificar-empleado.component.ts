import { Component } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-empleado',
  templateUrl: './modificar-empleado.component.html',
  styleUrls: ['./modificar-empleado.component.css']
})
export class ModificarEmpleadoComponent {


  constructor(private empleadoServicio: EmpleadoService,private enrutador:Router ) {}

  onClickSubmit(data:any) {
    //alert("Nombre del empleado : " + data.nombreEmpleado);

    this.empleadoServicio.modificarEmpleado(data.idEmpleado,data.nombreEmpleado, data.apellidoEmpleado,data.emailEmpleado, data.telefonoEmpleado).subscribe({

      next:(datos) =>{
        this.irListaPersonas();
       }



    })
    
  
 }
 irListaPersonas() {
  this.enrutador.navigate(['/empleados']);
 }
}
