import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

private urlBase = "http://localhost:8080/empleados"

  constructor(private clienteHttp:HttpClient ) { }


  obtenerEmpleadosLista(): Observable<Empleado[]>{
    return this.clienteHttp.get<Empleado[]>(this.urlBase);
  }
  insertarEmpleado(nombreEmpleado:String, apellidoEmpleado: String, emailEmpleado: String, telefonoEmpleado: String ): Observable<any>{
    return this.clienteHttp.post<any>(this.urlBase, { nombre: nombreEmpleado, apellidos:apellidoEmpleado, correoElectronico: emailEmpleado, telefono:telefonoEmpleado });

  }
  modificarEmpleado(idEmpleado:Number,nombreEmpleado:String, apellidoEmpleado: String, emailEmpleado: String, telefonoEmpleado: String ): Observable<any>{
    return this.clienteHttp.put<any>(this.urlBase, {id:idEmpleado ,nombre: nombreEmpleado, apellidos:apellidoEmpleado, correoElectronico: emailEmpleado, telefono:telefonoEmpleado });

  }

  borrarEmpleado(id:number){
    return this.clienteHttp.delete<any>(this.urlBase + "/"+id);
  }


  login(nombreUsuario: String ,contrasenaUsuario: String ): Observable<any>{
    return this.clienteHttp.post<any>(this.urlBase, {nombre: nombreUsuario, contrasena:contrasenaUsuario});

  }

  

}
