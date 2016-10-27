import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form;
  emailPattern = '^[a-zA-Z0-9.!#$%&』*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$';
  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(5)]],
      nickName: 'crazy',
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
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

}
