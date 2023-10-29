import { Component } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-insertar-empleado',
  templateUrl: './insertar-empleado.component.html',
  styleUrls: ['./insertar-empleado.component.css']
})
export class InsertarEmpleadoComponent {

  constructor(private empleadoServicio: EmpleadoService, private enrutador:Router) {}

  onClickSubmit(data:any) {
   

    this.empleadoServicio.insertarEmpleado(data.nombreEmpleado, data.apellidoEmpleado,data.emailEmpleado, data.telefonoEmpleado).subscribe({

         next:(datos) =>{
          this.irListaPersonas();
         }



    })
    
  
 }
  irListaPersonas() {
   this.enrutador.navigate(['/empleados']);
  }

}
