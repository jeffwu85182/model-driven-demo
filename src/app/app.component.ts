import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data = [
    {
      id: '1',
      firstName: 'John',
      nickName: 'John',
      email: 'test@qqqq',
      phone: '123456789',
      birthday: '2020-01-01',
      interest: {
        movie: false,
        music: false,
        technology: false,
        sports: false,
        games: false,
      },
    },
  ];
  form: FormGroup;
  emailPattern =
    '^[a-zA-Z0-9.!#$%&』*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      profiles: this.fb.array([this.buildGroup()]),
    });
  }

  ngOnInit() {
    this.form.patchValue({
      profiles: this.data,
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
