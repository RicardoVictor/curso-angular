import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    {
      name: 'scooby',
      type: 'cachorro',
      age: 25,
      showAge: false,
      changeShowAge() {
        this.showAge = !this.showAge;
      },
    },
    {
      name: 'garfield',
      type: 'gato',
      age: 15,
      showAge: false,
      changeShowAge() {
        this.showAge = !this.showAge;
      },
    },
    {
      name: 'pica-pau',
      type: 'pássaro',
      age: 50,
      showAge: false,
      changeShowAge() {
        this.showAge = !this.showAge;
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
