import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  @Input() name: string;
  @Input() age: number;
  @Output() removePerson = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  removeByClick() {
    this.removePerson.emit(this.name);
  }

}
