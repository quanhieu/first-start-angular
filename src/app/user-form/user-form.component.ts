import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  name = '';
  isHighlight = false;
  evenStyle = { color: 'red', fontSize: '40px' };
  oddStyle = { color: 'blue', fontSize: '20px' };
  currentStyle = { circle: !this.isHighlight, square: this.isHighlight };
  constructor() {
  }

  ngOnInit(): void {
  }

}
