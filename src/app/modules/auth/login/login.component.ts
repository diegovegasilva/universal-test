import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  id: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(data => {
      console.log('component', data);
      this.id = data.id;
    });
  }

  login() {
    if (this.loginForm.value.email && this.loginForm.value.password) {
      const userData = {
        username: this.loginForm.value.email,
        password: this.loginForm.value.password
      };
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(data => {
        console.log('component', data);
        this.id = data.id;
      });
    }
  }

}
