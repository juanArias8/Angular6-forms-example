import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';

import {CourseService} from '../../services/course.service';
import {CourseInterface} from '../../models/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, AfterViewInit {

  @Output() public edit: EventEmitter<any> = new EventEmitter<any>();
  courses: CourseInterface[];

  constructor(private  courseService: CourseService) {
  }

  ngOnInit() {
    this.courseService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }

  ngAfterViewInit() {

  }

  editCourse(course: CourseInterface) {
    this.edit.emit(course);
  }

  deleteCourse(event, course: CourseInterface) {
    this.courseService.deleteCourse(course);
  }
}
