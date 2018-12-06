import {NgModule} from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {BrowserModule} from '@angular/platform-browser';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {FormsModule} from '@angular/forms';

import {environment} from '../environments/environment';
import {CourseService} from './services/course.service';

import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CoursesComponent} from './components/courses/courses.component';
import {AddCourseComponent} from './components/add-course/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoursesComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'courses'),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
