import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {
  miId: number = 0;
  miNombre: string = '';
  miDescripcion: string = '';

  click() {
    this.miId = this.obtenerNuevoId();
    /*this.miLista.push({
      id: this.miId,
      nombre: this.miNombre,
      descripcion: this.miDescripcion,
    });*/
    this.limpiar();
  }

  obtenerNuevoId = (): number => {
    let valorMaximo: number = 0;
    /*this.miLista.forEach((e) => {
      valorMaximo = e.id > valorMaximo ? e.id : valorMaximo;
      /*
      if (valorMaximo < e.id) {
        valorMaximo = e.id;
      }      
    });*/
    valorMaximo++;
    return valorMaximo;
  };

  limpiar = () => {
    this.miId = 0;
    this.miNombre = '';
    this.miDescripcion = '';
  };
}
