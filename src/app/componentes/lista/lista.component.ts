import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Objeto } from '../../modelos/objetos';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
})
export class ListaComponent implements OnInit {
  @Input() miObjetoRec: Objeto = { id: 0, nombre: '', descripcion: '' };
  miLista = [
    { id: 1, nombre: 'Dato 1', descripcion: 'Descripcion 1' },
    { id: 2, nombre: 'Dato 2', descripcion: 'Descripcion 2' },
    { id: 3, nombre: 'Dato 3', descripcion: 'Descripcion 3' },
    { id: 4, nombre: 'Dato 4', descripcion: 'Descripcion 4' },
  ];

  ngOnInit(): void {
    console.log('Method not implemented.');
  }

  eliminar = (_id: number) => {
    this.miLista = this.miLista.filter((e) => e.id !== _id);
  };
}
