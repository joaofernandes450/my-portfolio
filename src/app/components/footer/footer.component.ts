import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  redirectLinkedIn(): void {
    window.location.href = "https://www.linkedin.com/in/joaofernandes450/";
  }

  redirectGitHub(): void {
    window.location.href = "https://github.com/joaofernandes450";
  }

  redirectInstitution(institutionURL: string): void {
    window.location.href = institutionURL;
  }
}
