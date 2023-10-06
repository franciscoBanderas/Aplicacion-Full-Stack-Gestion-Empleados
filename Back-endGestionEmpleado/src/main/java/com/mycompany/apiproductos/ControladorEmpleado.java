package com.mycompany.apiproductos;

import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
@CrossOrigin(value = "http://localhost:4200")
public class ControladorEmpleado {

    private final EmpleadoRepository repository;

    public ControladorEmpleado(EmpleadoRepository repository) {
        this.repository = repository;
    }

    // Te devuelve una tabla de personas en formato json
    @GetMapping("/empleados")
    Iterable<Empleado> listarEmpleados() {
        return repository.findAll();
    }
//Con esta anotación reconoce el formato json @RequestBody
    @PostMapping("/empleados")
    void insertarEmpleado(@RequestBody Empleado empleado) {
        repository.save(empleado);
    }
    
    @PutMapping("/empleados")
    void modificarEmpleado(@RequestBody Empleado empleado){
        
        repository.save(empleado);
    }
    
    @DeleteMapping("/empleados/{id}")
    void borrarEmpleado(@PathVariable("id") Long id){
        
        repository.deleteById(id);
    }

}
