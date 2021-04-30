import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../service/data/user-data.service';

export class User {
  constructor(public username: string, public password: string) {}
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  user: User = new User(null, null);
  created: boolean = false;
  successMessage: string = 'Account created, Redirecting to login page.';

  constructor(private router: Router, private service: UserDataService) {}

  ngOnInit(): void {}

  onSave() {
    this.service.createUser(this.user).subscribe((resp) => {
      this.created = true;
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
    });
  }
}
