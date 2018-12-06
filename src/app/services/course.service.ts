import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';

import {CourseInterface} from '../models/course.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courcesCollection: AngularFirestoreCollection<CourseInterface>;
  courses: Observable<CourseInterface[]>;
  courseDocument: AngularFirestoreDocument<CourseInterface>;

  constructor(public angularFirestore: AngularFirestore) {
    this.courcesCollection = angularFirestore.collection<CourseInterface>('courses');
    this.courses = this.courcesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as CourseInterface;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  getCourses() {
    return this.courses;
  }

  saveCourse(course: CourseInterface) {
    this.courcesCollection.add(course);
  }

  updateCourse(course: CourseInterface) {
    this.courseDocument = this.angularFirestore.doc(`courses/${course.id}`);
    this.courseDocument.update(course);
  }

  deleteCourse(course: CourseInterface) {
    this.courseDocument = this.angularFirestore.doc(`courses/${course.id}`);
    this.courseDocument.delete();
  }
}
