import {Component} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-Input',
  templateUrl: './Input.component.html',
  styleUrls: ['./Input.component.css'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
})
export class InputComponent {

  constructor() { }

}
