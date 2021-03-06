import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [BasicAuthenticationService],
})
export class LoginComponent implements OnInit {
  username = 'sarthak';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  ngOnInit(): void {}

  handleLogin() {
    if (
      this.hardcodedAuthenticationService.authenticate(
        this.username,
        this.password
      )
    ) {
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleJWTAuthLogin() {
    this.basicAuthenticationService
      .executeJWTAuthenticationService(this.username, this.password)
      .subscribe(
        (resp) => {
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        (err) => {
          this.invalidLogin = true;
        }
      );
  }

  handleBasicAuthLogin() {
    this.basicAuthenticationService
      .executeBasicAuthenticationService(this.username, this.password)
      .subscribe(
        (resp) => {
          this.router.navigate(['welcome', this.username]);
          this.invalidLogin = false;
        },
        (err) => {
          this.invalidLogin = true;
        }
      );
  }
}
