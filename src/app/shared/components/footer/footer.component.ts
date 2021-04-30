import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField: FormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  constructor() {
    // this.emailField.valueChanges
    //   .subscribe((value) => {
    //     console.log(value);
    //   })
  }

  ngOnInit(): void {
  }

  sendEmail() {
    if (this.emailField.valid) {
      console.log(this.emailField.value);
      this.emailField.reset
    }
  }

}
