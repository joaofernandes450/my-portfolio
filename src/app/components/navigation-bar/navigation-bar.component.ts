import { Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';

import { LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';

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
    { locale: 'en', name: "English", flag: "flag-icon flag-icon-gb", selected: false, href: "https://joaofernandes450.github.io/my-portfolio/en/" },
    { locale: 'pt', name: "Portuguese", flag: "flag-icon flag-icon-pt", selected: false, href: "https://joaofernandes450.github.io/my-portfolio/pt/" }
  ]

  constructor(@Inject(LOCALE_ID) locale: string, private router: Router) {
    this.locale = locale;
    const temp = location.href.split('/');
    if (temp[temp.length - 2] == this.locale) {
      this.languagesAvailable.find(x => x.locale === this.locale)!.selected = true
    } else {
      this.languagesAvailable.find(x => x.locale != this.locale)!.selected = true;
      localStorage.setItem('Language', locale);
    }
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
