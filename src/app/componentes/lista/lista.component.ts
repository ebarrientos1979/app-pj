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
  miLista: Array<Objeto> = [];

  @Input()
  set miObjetoRec(value: Objeto) {
    if (value.nombre.trim().length > 0) {
      this.miLista.push(value);
    }
  }

  ngOnInit(): void {
    console.log('Method not implemented.');
  }

  eliminar = (_id: number) => {
    this.miLista = this.miLista.filter((e) => e.id !== _id);
  };
}
