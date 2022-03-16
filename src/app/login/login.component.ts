import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('form') loginForm!: NgForm;

  subscriptionTypes = ['Basic', 'Advanced', 'Pro']
  defaultSubscription = 'Basic';

  email: string = '';
  subscription: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private currentRoute: ActivatedRoute
  ){ }

  onSubmit(form: Form){
    console.log('form submitted');
    console.log(form);
    this.loginForm.reset();
    this.router.navigate(['../logged'], {relativeTo: this.currentRoute});
  }

  passValid(): boolean {
    return this.password.length > 4;
  }
}
