import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
})
export class ListaComponent {
  miLista = [
    { id: 1, nombre: 'Dato 1', descripcion: 'Descripcion 1' },
    { id: 2, nombre: 'Dato 2', descripcion: 'Descripcion 2' },
    { id: 3, nombre: 'Dato 3', descripcion: 'Descripcion 3' },
    { id: 4, nombre: 'Dato 4', descripcion: 'Descripcion 4' },
  ];
  miId: number = 0;
  miNombre: string = '';
  miDescripcion: string = '';

  click() {
    this.miId = this.obtenerNuevoId();
    this.miLista.push({
      id: this.miId,
      nombre: this.miNombre,
      descripcion: this.miDescripcion,
    });
    this.limpiar();
  }

  obtenerNuevoId = (): number => {
    let valorMaximo: number = 0;
    this.miLista.forEach((e) => {
      valorMaximo = e.id > valorMaximo ? e.id : valorMaximo;
      /*
      if (valorMaximo < e.id) {
        valorMaximo = e.id;
      }
      */
    });
    valorMaximo++;
    return valorMaximo;
  };

  limpiar = () => {
    this.miId = 0;
    this.miNombre = '';
    this.miDescripcion = '';
  };

  eliminar = (_id: number) => {
    this.miLista = this.miLista.filter((e) => e.id !== _id);
  };
}
