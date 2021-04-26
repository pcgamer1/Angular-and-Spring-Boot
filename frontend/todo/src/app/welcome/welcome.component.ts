import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  name = '';
  welcomeMessageFromService: string;

  constructor(
    private route: ActivatedRoute,
    private service: WelcomeDataService
  ) {}

  ngOnInit(): void {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessage() {
    this.service
      .executeHelloWorldBeanService()
      .subscribe((resp) => this.handleResp(resp));
  }

  getWelcomeMessageWithParameter() {
    this.service
      .executeHelloWorldServiceWithPathVariable(this.name)
      .subscribe((resp) => this.handleResp(resp));
  }

  handleResp(resp) {
    this.welcomeMessageFromService = resp.message;
  }
}
