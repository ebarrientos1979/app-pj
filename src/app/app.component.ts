import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = ' Operaciones entres dos variables ';
  primerNumero: number = 0;
  segundoNumero: number = 0;

  clickBoton() {
    console.log(this.primerNumero);
    console.log(this.segundoNumero);
  }
}
