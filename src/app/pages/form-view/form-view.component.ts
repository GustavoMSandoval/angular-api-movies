import { Component } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";

@Component({
  selector: 'app-form-view',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './form-view.component.html',
  styleUrl: './form-view.component.scss'
})
export class FormViewComponent {

}
