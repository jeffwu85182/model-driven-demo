import {Component} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  formSubject: Subject<any> = new Subject();
  toggle = false;
  emailPattern =
      '^[a-zA-Z0-9.!#$%&』*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$';

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({formAr: this._fb.array([this.buildGroup()])});
    window['myForm'] = this.form;
    this.form.get('formAr').get('0').get('phone').valueChanges.subscribe(obj => {

      if (obj &&
          this.form.get('formAr').get('0').get('firstName').disable) {
        this.form.get('formAr').get('0').get('firstName').enable({
          emitEvent: false
        });
      } else {
        this.form.get('formAr').get('0').get('firstName').disable({
          emitEvent: false
        });
      }

    });
  }

  buildGroup(): FormGroup {
    return this._fb.group({
      firstName: new FormControl({value: '', disabled: true}),
      nickName: 'crazy',
      email: '',
      phone: new FormControl('', Validators.required),
      birthday: '',
      interest: this._fb.group(
          {movie: '', music: '', technology: '', sports: '', games: ''}),
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

  disableInput(obj) {
    // const firstName =
    //     <FormArray>this.form.get('formAr').get('0').get('firstName');
    // if (!this.toggle) {
    //   firstName.disable();
    // } else {
    //   firstName.enable();
    // }
    // this.toggle = !this.toggle;

    if (obj.formAr[0].phone && obj.formAr[0].firstName.disabled) {
      this.form.get('formAr').get('0').get('firstName').enable();
    } else {
      this.form.get('formAr').get('0').get('firstName').disable();
    }
  }
}
