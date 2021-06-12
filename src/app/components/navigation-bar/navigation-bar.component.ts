import { Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';

import { LOCALE_ID } from '@angular/core';

export interface Language {
  locale: string,
  name: string,
  flag: string,
  selected: boolean,
  href: string,
}

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  private locale: string = '';

  languagesAvailable: Language[] = [
    { locale: 'en', name: "English", flag: "flag-icon flag-icon-gb", selected: false, href: "en" },
    { locale: 'pt', name: "Portuguese", flag: "flag-icon flag-icon-pt", selected: false, href: "pt" }
  ]

  constructor(@Inject(LOCALE_ID) locale: string) {
    this.locale = locale;
    this.languagesAvailable.find(x => x.locale === this.locale)!.selected = true;
  }

  ngOnInit(): void {
  }

  downloadCV() {
    window.open('assets/Joao_Fernandes_CV.pdf', '_blank');
  }

  changeLanguage(locale: any): void {
    this.languagesAvailable.find(x => x.locale === locale)!.selected = true;
    this.languagesAvailable.find(x => x.locale != locale)!.selected = false;
    localStorage.setItem('Language', locale);
  }
}
