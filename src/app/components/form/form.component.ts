import { Component } from '@angular/core';
import { FormInputComponent } from "../form-input/form-input.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormInputComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

  islogin: boolean = true;

  isLogin(is: boolean) {
    this.islogin = !is;
  }

}
