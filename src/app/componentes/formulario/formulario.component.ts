import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListaComponent } from '../lista/lista.component';
import { Objeto } from '../../modelos/objetos';
import { ComunicacionService } from '../../services/comunicacion.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule, ListaComponent],
  providers: [ComunicacionService],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {
  miId: number = 0;
  miNombre: string = '';
  miDescripcion: string = '';
  miObjeto: Objeto = { id: 0, nombre: '', descripcion: '' };
  msgComunicacion: string = '';

  constructor(private comunicacionService: ComunicacionService) {
    this.msgComunicacion = this.comunicacionService.getMessage();
  }

  click() {
    this.comunicacionService.saveData('id', this.miId);
    this.comunicacionService.saveData('nombre', this.miNombre);
    this.comunicacionService.saveData('descripcion', this.miDescripcion);
    this.miObjeto = {
      id: this.miId,
      nombre: this.miNombre,
      descripcion: this.miDescripcion,
    };
    this.limpiar();
  }

  limpiar = () => {
    this.miId = 0;
    this.miNombre = '';
    this.miDescripcion = '';
  };

  cargarDatos = (e: Objeto) => {
    this.miDescripcion = e.descripcion;
    this.miNombre = e.nombre;
  };
}
