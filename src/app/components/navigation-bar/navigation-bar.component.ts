import { Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';

import {LOCALE_ID} from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  private locale: string;

  constructor(@Inject(LOCALE_ID) locale: string) {
    this.locale = locale;
    console.log(this.locale)
   }

  ngOnInit(): void {
  }

  downloadCV() {
    window.open('/assets/Joao_Fernandes_CV.pdf', '_blank');
  }

  teste(): void {
  }
}
