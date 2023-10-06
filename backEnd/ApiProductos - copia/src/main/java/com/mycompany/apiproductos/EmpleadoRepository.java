
package com.mycompany.apiproductos;

import org.springframework.data.repository.CrudRepository;

// Con la clase predeterminada  CrudRepository la cual usamos para guardar datos en la base de datos, le pasamos datos de tipo Empleado cuya clave primaria es de tipo Long
public interface EmpleadoRepository extends CrudRepository <Empleado, Long> {
    
    
    
    
}
