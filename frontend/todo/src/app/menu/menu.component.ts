import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [BasicAuthenticationService],
})
export class MenuComponent implements OnInit {
  constructor(public basicAuthenticationService: BasicAuthenticationService) {}

  ngOnInit(): void {}
}
