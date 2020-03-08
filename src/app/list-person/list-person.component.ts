import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.scss']
})
export class ListPersonComponent implements OnInit {
    arrPeople = [
        { name: 'Teo', age: 23 },
        { name: 'Ti', age: 20 },
        { name: 'Tun', age: 22 },
    ];

  constructor() { }

  ngOnInit(): void {
  }
  removePersonByName(name: string) {
      const index = this.arrPeople.findIndex(e => e.name === name);
      this.arrPeople.splice(index, 1);
  }

}
