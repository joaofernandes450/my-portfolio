import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/dialog/dialog.component';

export interface Diplomas {
  degree: string,
  course: string,
  startDate: Date,
  endDate: Date,
  institutionAvatar: string,
  institutionPicture: string,
  institutionName: string,
  description: string,
  institutionURL: string,
  courseURL: string
}

export interface Project {
  title: string,
  imageURL?: string,
  description: string,
  activities: string[],
  technologies: string[]
}

export interface Experience {
  type: string,
  place: string,
  position: string,
  startDate: Date,
  endDate: Date,
  description: string,
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
  type: string,
  tech: Technologies[]
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  currentDiplomas: Diplomas[] = [
    {
      degree: 'Master Degree', course: 'Software Engineering', startDate: new Date('10/01/2018'), endDate: new Date('10/31/2020'),
      institutionAvatar: "https://recipp.ipp.pt/retrieve/31671", institutionPicture: "https://cdn-static-new.uniplaces.com/colleges/16/05-edificio-principal.jpg", institutionName: "Instituto Superior de Engenharia do Porto",
      description: "Master's degree specialize in Software Engineering with a duration of 2 years, consisting of 11 different curricular units, focused on software architecture and software quality as well as software innovation and team enviroment.",
      institutionURL: "https://www.isep.ipp.pt", courseURL: "https://www.isep.ipp.pt/Course/Course/87"
    },
    {
      degree: 'Bachelor Degree', course: 'Computer Engineering', startDate: new Date('09/01/2015'), endDate: new Date('09/30/2018'),
      institutionAvatar: "https://recipp.ipp.pt/retrieve/31671", institutionPicture: "https://cdn-static-new.uniplaces.com/colleges/16/05-edificio-principal.jpg", institutionName: "Instituto Superior de Engenharia do Porto",
      description: "Bachelor Degree with a duration of 3 years, consisting of 30 different curricular units, focused on the development of computer software, information systems, network administration and security and data processing.",
      institutionURL: "https://www.isep.ipp.pt", courseURL: "https://www.isep.ipp.pt/Course/Course/26"
    }
  ]

  projects: Project[] = [
    {
      title: "eGYM: Engineer's Gym", imageURL: "/assets/images/eGYM Languages.png",
      description: "Reengineering of the previous “eGYM – Engineer's Gym” developed in 2018, aiming to achieve a better and more robust Learning Management System (LMS), allowing the possibility to integrate new concepts and new functionalities that could eliminate limitations from previous systems and met the new objectives proposed.\n\nContrary to the previous application developed in 2018, all services and micro- services were deployed on a local Linux client, provided by Instituto Superior de Engenharia do Porto, using the institution DNS",
      activities: ["Analysis and architecture reengineering", "Web Development", "Database handling and maintenance", "Cloud implementation (Internal Linux Server)", "Communication with shareholders & product owners"],
      technologies: ["Angular", "HTML", "CSS", "Node.js", "Express.js", "REST", "Nginx", "Postman", "Scrum", "Git", "Mocha", "Chai.js", "Socket.IO", "CI/CD (Continuous Integration/Continuous Delivery"]
    },
    {
      title: "Tire Communication Portal",
      description: "Project with emphasis in web development where employees from different stations could communicate tire information and protocols, between each other, using Continental’s intranet.\n\nData handling, such as employee login credentials and tire information, was achieved using LDAP and Microsoft SQL Server, respectively. ",
      activities: ["Analysis and architecture planning", "Web Development", "Database handling and maintenance", "Communication with shareholders & product owners"],
      technologies: ["PHP", "JavaScript", "HTML", "CSS", "Microsoft SQL Server"]
    },
    {
      title: "eGYM: Engineer's Gym", imageURL: "/assets/images/eGYM PESTI.png",
      description: "“eGYM – Engineer's Gym” project aimed to develop a web platform that promoted the critical thinking of students attending Engineering courses, through the availability of numerous and diverse content and activities, such as virtual classes and games.\n\nThe architecture designed and implemented was based on the renown MVC pattern. For this specific project two main applications were developed, known as Front Office and Back Office. The first one was the application where students could consume the various content and activities and the latter was the application where the teachers and administrators could manage both students and content available. To support those two applications, multiple micro services APIs were developed to handle all the communication between clients and servers, using REST and HTTPs. Both applications and services were deployed on the cloud, using Microsoft Azure.",
      activities: ["Analysis and architecture planning", "Web Development", "Database handling and maintenance", "Cloud implementation (Microsoft Azure Server)", "Communication with shareholders & product owners"],
      technologies: ["AngularJS", "Angular", "HTML", "CSS", "Node.js", "Express.js", "REST", "Microsoft Azure", "Postman", "Scrum", "Git", "Mocha", "Chai.js", "Socket.IO"]
    }
  ]

  currentExperiences: Experience[] = [
    {
      type: "Master's Degree Internship", place: 'Instituto Superior de Engenharia do Porto', position: "Full Stack Web Developer", startDate: new Date('02/01/2020'), endDate: new Date('10/01/2020'),
      description: "Master's degree internship where I tried to re engineer the previous developed 'eGYM: Engineer's Gym' in 2018.", workplaceAvatar: "https://recipp.ipp.pt/retrieve/31671", workplaceURL: "https://www.isep.ipp.pt",
      projects: this.projects[0]
    },
    {
      type: "Summer Internship", place: 'Continental Mabor', position: 'Full Stack Web Developer', startDate: new Date('06/01/2018'), endDate: new Date('08/01/2018'),
      description: "Small summer internship, where I got the possibility to work on a professional environment and develop small projects.", workplaceAvatar: "https://pbs.twimg.com/profile_images/1065885011851780096/AXxPjeP4_400x400.jpg", workplaceURL: "https://www.continental.com/",
      projects: this.projects[1]
    },
    {
      type: "Bachelor's Degree Internship", place: 'Instituto Superior de Engenharia do Porto', position: "Full Stack Web Developer", startDate: new Date('02/01/2018'), endDate: new Date('09/01/2018'),
      description: "Bachelor's degree internship, where I was able to work on a new and ambitious project called 'eGYM: Engineer's Gym'.", workplaceAvatar: "https://recipp.ipp.pt/retrieve/31671", workplaceURL: "https://www.isep.ipp.pt",
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
    { type: 'Programming Languages', tech: this.programmingTechnologies },
    { type: 'Frameworks', tech: this.frameworkTechnologies },
    { type: 'Databases', tech: this.databaseTechnologies },
    { type: 'Operating Systems', tech: this.operatingSystemsTechnologies },
  ]

  constructor(public dialog: MatDialog) { }

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
          project: projectInfo
        }
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  scroll(element: HTMLElement): void {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

}
