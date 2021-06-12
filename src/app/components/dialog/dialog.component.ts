import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../homepage/homepage.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  projectInfo: Project;
  breakpoint: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.projectInfo = data;
  }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 400) ? 2 : 3;
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;
  }
}
