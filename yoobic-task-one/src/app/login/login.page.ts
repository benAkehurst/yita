import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  signUpInView: Boolean = false;
  loginInView: Boolean = true;
  showError: Boolean = true;
  errorMessage: String = '';

  email: string = null;
  password: string = null;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.signUpInView = false;
    this.loginInView = true;
  }

  /**
   * This is the login function that is called when the user clicks the sign in button
   * The first If checks if the user is in the sign up view
   * The second If checks if there are details in the email and password to allow the user to move
   * to the home screen
   */
  public login(): void {
    if (this.loginInView === false && this.signUpInView === true) {
      this.loginInView = true;
      this.signUpInView = false;
    }

    if (this.email && this.password !== null) {
      // console.log('login success');
      this.router.navigateByUrl('/home');
    } else {
      this.showError = true;
      this.errorMessage = 'Please enter email and/or password';
    }
  }

  /**
   * This function changes the view to a sign up page.
   */
  public changeToSignUp(): void {
    this.signUpInView = true;
    this.loginInView = false;
  }

}
