import { Component } from '@angular/core';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GenerosService } from '../generos.service';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { SERVICIO_CRUD_TOKEN } from '../../compartidos/proveedores/proveedores';
import { CrearEntidadComponent } from "../../compartidos/componentes/crear-entidad/crear-entidad.component";

@Component({
  selector: 'app-crear-generos',
  standalone: true,
  imports: [FormularioGeneroComponent, MostrarErroresComponent, CrearEntidadComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css',
  providers: [
    {provide: SERVICIO_CRUD_TOKEN, useClass: GenerosService}
  ]
})
export class CrearGenerosComponent {
  formulariosGeneros = FormularioGeneroComponent;
}
