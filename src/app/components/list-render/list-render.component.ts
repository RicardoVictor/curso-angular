import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

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

  constructor(private listService: ListService) {}

  removeAnimal(animal: Animal) {
    console.log(`Removendo animal: ${JSON.stringify(animal)}`);
    this.animals = this.listService.remove(this.animals, animal);
  }

  ngOnInit(): void {}
}
