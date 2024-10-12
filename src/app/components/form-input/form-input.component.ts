import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-input',
  standalone: true,
  imports: [],
  templateUrl: './form-input.component.html',
  styleUrl: './form-input.component.scss'
})
export class FormInputComponent {
  @Input() inputType?: string;
  @Input() inputName?: string;
}
