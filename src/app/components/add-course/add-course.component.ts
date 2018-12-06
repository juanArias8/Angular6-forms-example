import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgForm} from '@angular/forms/src/directives/ng_form';

import * as M from 'materialize-css/dist/js/materialize';

import {CourseService} from '../../services/course.service';
import {CourseInterface} from '../../models/course.interface';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit, OnChanges {

  @Input() courseEdit: CourseInterface;

  course: CourseInterface = {
    name: '', date: '', description: '', price: null, teacher: '', language: '', technology: ''
  };

  constructor(private courseService: CourseService) {
  }

  ngOnInit() {
  }

  ngOnChanges(simple: SimpleChanges) {
    if (simple.courseEdit.currentValue) {
      this.course = simple.courseEdit.currentValue;
    }
  }

  saveCourse(formData: NgForm) {
    if (formData.valid) {
      this.course.date = Date().slice(0, 15);
      if (this.courseEdit) {
        this.courseService.updateCourse(this.course);
        this.courseEdit = null;
      } else {
        this.courseService.saveCourse(this.course);
      }
      formData.resetForm();
      this.course = {name: '', date: '', description: '', price: null, teacher: '', language: '', technology: ''};
    } else {
      M.toast({html: 'Campos inválidos', classes: 'rounded red lighten-2 black-text'});
    }
  }
}
