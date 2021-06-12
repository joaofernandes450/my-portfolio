import { Component, ElementRef, Inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { HomepageComponent } from '../homepage/homepage.component';

import { LOCALE_ID } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

export interface Language {
  locale: string,
  name: string,
  flag: string,
  selected: boolean,
  href: string,
}

export interface Section {
  locale: string,
  sections: string[]
}

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  private locale: string = '';
  reference!: HomepageComponent;

  languagesAvailable: Language[] = [
    { locale: 'en', name: "English", flag: "flag-icon flag-icon-gb", selected: false, href: "https://joaofernandes450.github.io/my-portfolio/en/" },
    { locale: 'pt', name: "Portuguese", flag: "flag-icon flag-icon-pt", selected: false, href: "https://joaofernandes450.github.io/my-portfolio/pt/" }
  ]

  sections: Section[] = [
    { locale: 'en', sections: ["Education", "Experience", "Technologies", "Favorite Stack"] },
    { locale: 'pt', sections: ["Educação", "Experiência", "Tecnologias", "Stack Favorita"] }]

  sectionSelection: string[] = [];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  @ViewChild(HomepageComponent) homepageComponent!: HomepageComponent;
  constructor(@Inject(LOCALE_ID) locale: string, private breakpointObserver: BreakpointObserver) {
    this.locale = locale;
    const temp = location.href.split('/');
    if (temp[temp.length - 2] == this.locale) {
      this.languagesAvailable.find(x => x.locale === this.locale)!.selected = true
      this.sectionSelection = this.sections.find(x => x.locale === this.locale)!.sections;
    } else {
      this.languagesAvailable.find(x => x.locale != this.locale)!.selected = true;
      this.sectionSelection = this.sections.find(x => x.locale != this.locale)!.sections;
      localStorage.setItem('Language', locale);
    }
  }

  ngOnInit(): void {
  }

  onActivate(componentRef: HomepageComponent) {
    this.reference = componentRef;
  }

  sectionScroll(section: string): void {
    this.reference.scrollFromNav(section);
  }

  changeLanguage(locale: any): void {
    this.languagesAvailable.find(x => x.locale === locale)!.selected = true;
    this.languagesAvailable.find(x => x.locale != locale)!.selected = false;
    localStorage.setItem('Language', locale);
  }
}
