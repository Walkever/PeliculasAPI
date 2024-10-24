import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
  manejarClick(_t2: number) {
    this.ratingSelecionado = _t2 + 1;
    this.ratingAnterior = this.ratingSelecionado;
    this.votado.emit(this.ratingSelecionado);
  }
  manejarMouseLeave() {
    if(this.ratingAnterior !== 0){
      this.ratingSelecionado = this.ratingAnterior;
    } 
    else{
      this.ratingSelecionado = 0;
    }
  }
  manejarMouseEnter(_t2: number) {
    this.ratingSelecionado = _t2 + 1;
  }

  @Output()
  votado = new EventEmitter<number>();

  @Input({ required: true, transform: (valor: number) => Array(valor).fill(0)})
  maximoRating!: number[];

  @Input()
  ratingSelecionado = 0;


  ratingAnterior = 0;
}
