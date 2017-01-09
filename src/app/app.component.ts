import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  emailPattern = '^[a-zA-Z0-9.!#$%&』*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$';

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      formAr: this._fb.array([
        this.buildGroup()
      ])
    });
  }

  buildGroup(): FormGroup {
    return this._fb.group({
      firstName: '',
      nickName: 'crazy',
      email: '',
      phone: '0912345678',
      birthday: '',
      interest: this._fb.group({
        movie: '',
        music: '',
        technology: '',
        sports: '',
        games: ''
      }),
      sex: ''
    });
  }

  add() {
    const control = <FormArray>this.form.controls['formAr'];
    control.push(this.buildGroup());
  }

  remove(i: number) {
    // remove address from the list
    const control = <FormArray>this.form.controls['formAr'];
    control.removeAt(i);
  }
}
