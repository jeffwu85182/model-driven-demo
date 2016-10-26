import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({
      firstName: new FormControl(),
      nickName: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      birthday: new FormControl(),
      interest: new FormGroup({
        movie: new FormControl(),
        music: new FormControl(),
        technology: new FormControl(),
        sports: new FormControl(),
        games: new FormControl()
      }),
      sex: new FormControl()
    });
}
