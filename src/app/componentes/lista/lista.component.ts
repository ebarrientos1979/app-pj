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
}
