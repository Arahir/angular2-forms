import {Component} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  AbstractControl
} from '@angular/forms';

@Component({
  selector: 'home',
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home {
  myForm: FormGroup;
  task: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'task': ['ABC123'],
      'type': ['doing']
    });
    this.task = this.myForm.controls['task'];
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
}
