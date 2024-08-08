import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListaComponent } from '../lista/lista.component';
import { Objeto } from '../../modelos/objetos';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule, ListaComponent],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {
  miId: number = 0;
  miNombre: string = '';
  miDescripcion: string = '';
  miObjeto: Objeto = { id: 0, nombre: '', descripcion: '' };

  click() {
    this.miObjeto = {
      id: this.miId,
      nombre: this.miNombre,
      descripcion: this.miDescripcion,
    };
    //console.log(this.miObjeto);
    this.limpiar();
  }

  limpiar = () => {
    this.miId = 0;
    this.miNombre = '';
    this.miDescripcion = '';
  };
}
