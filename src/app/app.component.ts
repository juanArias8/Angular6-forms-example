import {Component} from '@angular/core';
import {CourseInterface} from './models/course.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courseForm: CourseInterface;

  sendCourseForm(course: CourseInterface) {
    this.courseForm = course;
  }
}
