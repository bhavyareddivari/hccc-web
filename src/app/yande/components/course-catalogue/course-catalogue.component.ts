import {Component, OnInit} from '@angular/core';
import {AppService} from '../../../app.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Course} from '../../models/course';

@Component({
  selector: 'app-course-catalogue',
  templateUrl: './course-catalogue.component.html',
  styleUrls: ['./course-catalogue.component.scss']
})
export class CourseCatalogueComponent implements OnInit {
  public courses;

  constructor(public appService: AppService,
              private router: Router,
              private route: ActivatedRoute) {
    this.appService = appService;
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { courses: Course[] }) => {
        this.courses = data.courses;
      });
  }

  // onClickAddNew() {
  //     this.router.navigate(['../create'], {relativeTo: this.route});
  // }
}
