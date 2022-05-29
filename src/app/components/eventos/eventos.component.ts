import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
})
export class EventosComponent implements OnInit {
  show: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  showMessage(): void {
    this.show = !this.show; // toggle: travalhar c o inverso do valor, assim nao é preciso criar dois eventos
  }
}