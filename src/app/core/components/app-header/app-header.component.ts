import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {AppService} from '../../../app.service';
import {catchError} from 'rxjs/operators';
import {fromEvent} from 'rxjs';
@Component({
  selector: 'hccc-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements AfterViewInit {
  @ViewChild('menuButton') menuButton: any;
  constructor(
    public appService: AppService) {

  }
  ngAfterViewInit() {
    this.appService.sideNavMenuClick$ = fromEvent(this.menuButton._elementRef.nativeElement, 'click');
  }

}
