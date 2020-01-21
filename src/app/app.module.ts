import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SharedModule } from './shared/shared.module';
import { TeacherCourseComponent } from './projects/teacher/course/teacher-course.component';
import { StudentCourseComponent } from './projects/student/course/student-course.component';
import { TeacherQuizComponent, DialogComponent as DialogComponentQuizz, DialogComponent2, DetailSheet } from './projects/teacher/quiz/teacher-quiz.component';
import { StudentQuizComponent, QuizSolverDialog } from './projects/student/quiz/student-quiz.component';
import { TeacherHomeworkComponent, DialogComponent } from './projects/teacher/homework/teacher-homework.component';
import { StudentHomeworkComponent, HomeworkSolverDialogComponent } from './projects/student/homework/student-homework.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule, MatTableModule } from '@angular/material';
// tslint:disable-next-line: max-line-length
import { TeacherQuestionComponent, DialogComponent as DialogComponentQuestion, LockedQuestionDialog } from './projects/teacher/question/teacher-question.component';
import { TeacherStudentComponent } from './projects/teacher/student/teacher-student.component';

const material = [
  MatDatepickerModule,
  MatNativeDateModule
];

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    TeacherCourseComponent,
    StudentCourseComponent,
    TeacherQuizComponent,
    StudentQuizComponent,
    TeacherHomeworkComponent,
    StudentHomeworkComponent,
    DialogComponentQuizz,
    DialogComponent,
    DialogComponentQuestion,
    TeacherQuestionComponent,
    DialogComponent2,
    DetailSheet,
    LockedQuestionDialog,
    HomeworkSolverDialogComponent,
    QuizSolverDialog,
    TeacherStudentComponent
  ],
  entryComponents: [
    DialogComponentQuizz,
    DialogComponentQuestion,
    DialogComponent,
    DialogComponent2,
    DetailSheet,
    LockedQuestionDialog,
    HomeworkSolverDialogComponent,
    QuizSolverDialog
  ],
  providers: [HomeworkSolverDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
