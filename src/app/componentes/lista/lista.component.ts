import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Objeto } from '../../modelos/objetos';
import { ComunicacionService } from '../../services/comunicacion.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers: [ComunicacionService],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss',
})
export class ListaComponent implements OnInit {
  miLista: Array<Objeto> = [];
  msgComunicacion: string = '';
  @Output() modificarEvent = new EventEmitter<Objeto>();

  @Input()
  set miObjetoRec(value: Objeto) {
    if (value.nombre.trim().length > 0) {
      value.id = this.miLista.length + 1;
      this.comunicacionService.saveData('objeto', JSON.stringify(value));
      this.miLista.push(value);
    }
  }

  constructor(private comunicacionService: ComunicacionService) {
    this.msgComunicacion = this.comunicacionService.getMessage();
  }

  modificar = (e: Objeto) => {
    let obj: Objeto = JSON.parse(this.comunicacionService.getData('objeto'));
    console.log(obj);
    this.modificarEvent.emit(obj);
  };

  ngOnInit(): void {
    console.log('Method not implemented.');
  }

  eliminar = (_id: number) => {
    this.miLista = this.miLista.filter((e) => e.id !== _id);
  };
}
