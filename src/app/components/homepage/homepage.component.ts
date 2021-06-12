import { AfterViewInit, Component, ElementRef, Inject, LOCALE_ID, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

export interface LangTranslation {
  locale: string,
  text: string
}

export interface LangTranslationMultiple {
  locale: string,
  text: string[]
}

export interface Diplomas {
  degree: LangTranslation[],
  course: LangTranslation[],
  startDate: Date,
  endDate: Date,
  institutionAvatar: string,
  institutionPicture: string,
  institutionName: string,
  description: LangTranslation[],
  institutionURL: string,
  courseURL: string
}

export interface Project {
  title: LangTranslation[],
  imageURL?: string,
  description: LangTranslation[],
  activities: LangTranslationMultiple[],
  technologies: string[]
}

export interface Experience {
  type: LangTranslation[],
  place: string,
  position: string,
  startDate: Date,
  endDate: Date,
  description: LangTranslation[],
  workplaceAvatar: string,
  workplaceURL: string,
  projects: Project
}

export interface Technologies {
  name: string,
  helper?: string,
  icon: string,
  level: number
}

export interface TechnologiesGroup {
  type: LangTranslation[],
  tech: Technologies[]
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  locale: string;

  currentDiplomas: Diplomas[] = [
    {
      degree: [{ locale: 'en', text: "Master's Degree" }, { locale: 'pt', text: "Mestrado" }],
      course: [{ locale: 'en', text: "Software Engineering" }, { locale: 'pt', text: "Engenharia de Software" }],
      startDate: new Date('10/01/2018'), endDate: new Date('10/31/2020'),
      institutionAvatar: "assets/images/isep_avatar.png", institutionPicture: "assets/images/isep.jpg", institutionName: "Instituto Superior de Engenharia do Porto",
      description: [{ locale: 'en', text: "Master's degree specialize in Software Engineering with a duration of 2 years, consisting of 11 different curricular units, focused on software architecture and quality, as well as software innovation and team enviroment." },
      { locale: 'pt', text: "Mestrado em Engenharia de Software com uma duração de 2 anos, constituido por 11 unidades curriculares diferentes, focado na arquitetura de software e na qualidade de software, mas também na inovação de software e no ambiente de equipa." }],
      institutionURL: "https://www.isep.ipp.pt", courseURL: "https://www.isep.ipp.pt/Course/Course/87"
    },
    {
      degree: [{ locale: 'en', text: "Bachelor Degree" }, { locale: 'pt', text: "Licenciatura" }],
      course: [{ locale: 'en', text: "Computer Engineering" }, { locale: 'pt', text: "Engenharia Informática" }],
      startDate: new Date('09/01/2015'), endDate: new Date('09/30/2018'),
      institutionAvatar: "assets/images/isep_avatar.png", institutionPicture: "assets/images/isep.jpg", institutionName: "Instituto Superior de Engenharia do Porto",
      description: [{ locale: 'en', text: "Bachelor Degree in Computer Engineering with a duration of 3 years, consisting of 30 different curricular units, focused on the development of computer software, information systems, network administration and security and data processing." },
      { locale: 'pt', text: "Licenciatura em Engenharia Informática com uma duração de 3 anos, constituída por 30 unidades curriculares diferentes, focada no desenvolvimento de software, sistemas de informação, administração de redes e na segurança e processamento de dados." }],
      institutionURL: "https://www.isep.ipp.pt", courseURL: "https://www.isep.ipp.pt/Course/Course/26"
    }
  ]

  projects: Project[] = [
    {
      title: [{ locale: 'en', text: "eGYM: Engineer's Gym" }, { locale: 'pt', text: "eGYM: Engineer's Gym" }], imageURL: "assets/images/eGYM Languages.png",
      description: [{ locale: 'en', text: "Reengineering of the previous “eGYM – Engineer's Gym” developed in 2018, aiming to achieve a better and more robust Learning Management System (LMS), allowing the possibility to integrate new concepts and new functionalities that could eliminate limitations from previous systems and met the new objectives proposed.\n\nContrary to the previous application developed in 2018, all services and micro services were deployed on a local Linux client, provided by Instituto Superior de Engenharia do Porto, using the institution DNS" },
      { locale: 'pt', text: "Reengenharia do “eGYM – Engineer's Gym” desenvolvido em 2018, com o objetivo de alcançar um Learning Management System (LMS) mais robusto, permitindo a possibilidade de integração de novos conceitos e de novas funcionalidades que conseguissem eliminar as limitações dos sistemas anterior e cumprir os novos objetivos propostos.\n\nContrariamente à aplicação desenvolvida em 2018, todos os serviços e micro serviços foram implantados num servidor Linux, fornecido pelo Instituto Superior de Engenharia do Porto, utilizando o DNS da universidade." }],
      activities: [{ locale: 'en', text: ["Analysis and architecture reengineering", "Web Development", "Database handling and maintenance", "Cloud implementation (Internal Linux Server)", "Communication with shareholders & product owners"] },
      { locale: 'pt', text: ["Análise e reengenharia arquitetural", "Desenvolvimento Web", "Manutenção e controlo da base de dados", "Implantação na Cloud (Servidor Interno de Linux)", "Comunicação com o cliente & partes interessadas"] }],
      technologies: ["Angular", "HTML", "CSS", "Node.js", "Express.js", "REST", "Nginx", "Postman", "Scrum", "Git", "Mocha", "Chai.js", "Socket.IO", "CI/CD (Continuous Integration/Continuous Delivery"]
    },
    {
      title: [{ locale: 'en', text: "Tire Communication Portal" }, { locale: "pt", text: "Portal de Comunicação de Pneus" }],
      description: [{ locale: 'en', text: "Project with emphasis in web development of a portal where employees from different stations and hierarchies could communicate tire information and protocols, between each other, using Continental’s intranet.\n\nData handling, such as employee login credentials and tire information, was achieved using LDAP and Microsoft SQL Server, respectively. " },
      { locale: 'pt', text: "Projecto com ênfase no desenvolvimento web de um portal onde os funcionários de diferentes postos e hierarquias podiam comunicar todas as informações e os protocolos de pneus, entre si, utilizando a rede interna da Continental.\n\nO tratamento de dados, tais como credenciais de login e todas as informações sobre os pneus, foi conseguido através da utilização do LDAP e do Microsoft SQL Server, respetivamente." }],
      activities: [{ locale: 'en', text: ["Analysis and architecture design", "Web Development", "Database handling and maintenance", "Communication with shareholders & product owners"] },
      { locale: 'pt', text: ["Análise e desenho arquitetural", "Desenvolvimento Web", "Manutenção e controlo da base de dados", "Comunicação com o cliente & partes interessadas"] }],
      technologies: ["PHP", "JavaScript", "HTML", "CSS", "Microsoft SQL Server"]
    },
    {
      title: [{ locale: 'en', text: "eGYM: Engineer's Gym" }, { locale: 'pt', text: "eGYM: Engineer's Gym" }], imageURL: "assets/images/eGYM PESTI.png",
      description: [{ locale: 'en', text: "“eGYM – Engineer's Gym” project aimed to develop a web platform that promoted the critical thinking of students attending Engineering courses, through the availability of numerous and diverse content and activities, such as virtual classes and games.\n\nThe architecture designed and implemented was based on the renown MVC pattern. For this specific project two main applications were developed, known as Front Office and Back Office.\n\nThe first one was the application where students could consume the various content and activities and the latter was the application where the teachers and administrators could manage both students and content available.\n\nTo support those two applications, multiple micro services APIs were developed to handle all the communication between clients and servers, using REST and HTTPs. Both applications and services were deployed on the cloud, using Microsoft Azure." },
      { locale: 'pt', text: "“eGYM – Engineer's Gym” visava desenvolver uma plataforma web que promovesse o pensamento crítico dos estudantes que frequentassem os cursos de Engenharia, através da disponibilização de diversos e numerosos conteúdos e atividades, tais como video aulas e jogos virtuais.\n\nA arquitetura desenvolvida e implementada baseou-se no conhecido padrão MVC. Para este projeto específico, foram desenvolvidas duas aplicações principais, denominadas de Front Office e Back Office. A primeira era a aplicação onde os estudantes podiam consumir os diversos conteúdos e atividades, enquanto que a segunda era uma aplicação onde os professores e administradores do sistema podiam gerir tanto os estudantes como os conteúdos existentes.\n\nPara apoiar estas aplicações, foram desenvolvidas múltiplas APIs, para lidar com toda a comunicação entre o cliente e o servidor, utilizado pedidos REST e HTTPs. Tanto as aplicações como os serviços foram implantados na nuvem, através do Microsoft Azure." }],
      activities: [{ locale: 'en', text: ["Analysis and architecture planning", "Web Development", "Database handling and maintenance", "Cloud implementation (Microsoft Azure Server)", "Communication with shareholders & product owners"] },
      { locale: 'en', text: ["Análise e desenho arquitetural", "Desenvolvimento Web", "Manutenção e controlo da base de dados", "Implantação na Cloud (Microsoft Azure Server)", "Comunicação com o cliente & partes interessadas"] }],
      technologies: ["AngularJS", "Angular", "HTML", "CSS", "Node.js", "Express.js", "REST", "Microsoft Azure", "Postman", "Scrum", "Git", "Mocha", "Chai.js", "Socket.IO"]
    }
  ]

  currentExperiences: Experience[] = [
    {
      type: [{ locale: 'en', text: "Master's Degree Internship" }, { locale: 'pt', text: "Estágio de Mestrado" }], place: 'Instituto Superior de Engenharia do Porto',
      position: "Full Stack Web Developer", startDate: new Date('02/01/2020'), endDate: new Date('10/01/2020'),
      description: [{ locale: 'en', text: "Masters internship focused on the reengineering of “eGYM – Engineer's Gym” developed in 2018." },
      { locale: 'pt', text: "Estágio de Mestrado focado na reengenharia do sistema “eGYM – Engineer's Gym” já desenvolvido em 2018 na Licenciatura. " }], workplaceAvatar: "assets/images/isep_avatar.png", workplaceURL: "https://www.isep.ipp.pt",
      projects: this.projects[0]
    },
    {
      type: [{ locale: 'en', text: "Summer Internship" }, { locale: 'pt', text: 'Estágio de Verão' }], place: 'Continental Mabor',
      position: 'Full Stack Web Developer', startDate: new Date('06/01/2018'), endDate: new Date('08/01/2018'),
      description: [{ locale: 'en', text: "Short Summer internship, focused on smaller scale internal projects, with the intentional of gaining professional experience." },
      { locale: 'pt', text: "Pequeno estágio de Verão, com um foco em projetos internos de menor escala, com a intenção de adquirir experência profissional." }], workplaceAvatar: "assets/images/continental_avatar.jpg", workplaceURL: "https://www.continental.com/",
      projects: this.projects[1]
    },
    {
      type: [{ locale: 'en', text: "Bachelor's Degree Internship" }, { locale: 'pt', text: "Estágio da Licenciatura" }], place: 'Instituto Superior de Engenharia do Porto',
      position: "Full Stack Web Developer", startDate: new Date('02/01/2018'), endDate: new Date('09/01/2018'),
      description: [{ locale: 'en', text: "nternship of the Degree, that paved way for the creation of a new and ambitious project called “eGYM – Engineer's Gym”." },
      { locale: 'pt', text: "Estágio da Licenciatura, que abriu caminho à criação de um novo e ambicioso projeto denominado de “eGYM – Engineer's Gym”." }], workplaceAvatar: "assets/images/isep_avatar.png", workplaceURL: "https://www.isep.ipp.pt",
      projects: this.projects[2]
    }
  ]

  programmingTechnologies: Technologies[] = [
    { name: "JavaScript + TypeScript", icon: 'fab fa-js', level: 3 },
    { name: "HTML", icon: 'fab fa-html5', level: 3 },
    { name: "CSS", icon: 'fab fa-css3', level: 3 },
    { name: "Java", icon: 'fab fa-java', level: 2 },
    { name: "PHP", icon: 'fab fa-php', level: 2 },
    { name: "C", icon: 'icon-c', level: 1 },
    { name: "C++", icon: 'icon-cplusplus', level: 1 },
    { name: "C#", icon: 'icon-csharp', level: 1 },
  ]

  frameworkTechnologies: Technologies[] = [
    { name: 'Angular', icon: 'fab fa-angular', level: 3 },
    { name: 'Node.js (+ Express.js)', icon: 'fab fa-node', level: 3 },
    { name: 'Bootstrap', icon: 'fab fa-bootstrap', level: 3 }
  ]

  databaseTechnologies: Technologies[] = [
    { name: 'MongoDB', icon: 'icon-mongodb', level: 3 },
    { name: 'Microsoft SQL Server', icon: 'icon-mssql', level: 2 },
    { name: 'Oracle', icon: 'icon-oracle', level: 1 },
  ]

  toolsTechnologies: Technologies[] = [
    { name: 'Visual Studio Code', icon: 'fab fa-tools', level: 3 },
    { name: 'Postman', icon: 'fab fa-tools', level: 3 },
    { name: 'Sourcetree', icon: 'fab fa-tools', level: 3 },
    { name: 'Git', icon: 'fab fa-tools', level: 3 },
  ]

  operatingSystemsTechnologies: Technologies[] = [
    { name: 'Windows', icon: 'fab fa-windows', level: 1 },
    { name: 'Linux', icon: 'fab fa-linux', level: 1 }
  ]

  currentTech: TechnologiesGroup[] = [
    { type: [{ locale: 'en', text: 'Programming Languages' }, { locale: 'pt', text: "Linguagens de Programação" }], tech: this.programmingTechnologies },
    { type: [{ locale: 'en', text: 'Frameworks' }, { locale: 'pt', text: "Frameworks" }], tech: this.frameworkTechnologies },
    { type: [{ locale: 'en', text: 'Databases' }, { locale: 'pt', text: "Bases de Dados" }], tech: this.databaseTechnologies },
    { type: [{ locale: 'en', text: 'Operating Systems' }, { locale: 'pt', text: "Sistemas Operativos" }], tech: this.operatingSystemsTechnologies },
  ]

  @ViewChild('academic') education!: ElementRef;
  @ViewChild('experience') experience!: ElementRef;
  @ViewChild('technologies') technologies!: ElementRef;
  @ViewChild('stack') favStack!: ElementRef;
  constructor(public dialog: MatDialog, @Inject(LOCALE_ID) locale: string) {
    this.locale = locale;
  }

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

  courseInformationRedirect(courseURL: string): void {
    window.location.href = courseURL;
  }

  openDialog(projectInfo: Project): void {
    const dialogRef =
      this.dialog.open(DialogComponent, {
        data: {
          title: projectInfo.title.find(x => x.locale === this.locale)!.text,
          imageURL: projectInfo.imageURL,
          description: projectInfo.description.find(x => x.locale === this.locale)!.text,
          activities: projectInfo.activities.find(x => x.locale === this.locale)?.text,
          technologies: projectInfo.technologies
        }
      });

    dialogRef.afterClosed().subscribe(result => {

    });
  }

  scroll(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  scrollFromNav(section: string): void {
    switch (section) {
      case 'Education':
      case 'Educação': {
        this.scroll(this.education.nativeElement);
        break;
      }
      case 'Experience':
      case 'Experiência': {
        this.scroll(this.experience.nativeElement);
        break;
      }
      case 'Technologies':
      case 'Tecnologias': {
        this.scroll(this.technologies.nativeElement);
        break;
      }
      case 'Favorite Stack':
      case 'Stack Favorita': {
        this.scroll(this.favStack.nativeElement);
        break;
      }
    }
  }

  getDegree(d: Diplomas): string {
    return d.degree.find(x => x.locale === this.locale)!.text;
  }

  getCourse(d: Diplomas): string {
    return d.course.find(x => x.locale === this.locale)!.text;
  }

  getDiplomaDescription(d: Diplomas): string {
    return d.description.find(x => x.locale === this.locale)!.text;
  }

  getExperienceDescription(e: Experience): string {
    return e.description.find(x => x.locale === this.locale)!.text;
  }

  getTechType(t: TechnologiesGroup): string {
    return t.type.find(x => x.locale === this.locale)!.text;
  }

  teste(section: string): void {
    console.log("entrei")
    this.scroll(this.experience.nativeElement);
  }

}
