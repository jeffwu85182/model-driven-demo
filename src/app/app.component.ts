import { Component } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormArray,
  FormControl,
} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form: FormGroup;
  emailPattern =
    '^[a-zA-Z0-9.!#$%&』*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      profiles: this.fb.array([this.buildGroup()]),
    });
  }

  get formAr(): FormArray {
    return this.form.get('profiles') as FormArray;
  }

  buildGroup(): FormGroup {
    return this.fb.group({
      id: uuidv4(),
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      nickName: '',
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailPattern),
      ]),
      phone: '',
      birthday: '',
      interest: this.fb.group({
        movie: '',
        music: '',
        technology: '',
        sports: '',
        games: '',
      }),
      sex: '',
    });
  }

  add() {
    const control = <FormArray>this.form.controls['profiles'];
    control.push(this.buildGroup());
  }

  remove(i: number) {
    // remove address from the list
    const control = <FormArray>this.form.controls['profiles'];
    control.removeAt(i);
  }
}
