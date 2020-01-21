import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherHomeworkComponent } from './projects/teacher/homework/teacher-homework.component';
import { TeacherQuizComponent } from './projects/teacher/quiz/teacher-quiz.component';
import { StudentGuard } from './shared/guard/student.guard';
import { StudentHomeworkComponent } from './projects/student/homework/student-homework.component';
import { StudentQuizComponent } from './projects/student/quiz/student-quiz.component';
import { TeacherCourseComponent } from './projects/teacher/course/teacher-course.component';
import { StudentCourseComponent } from './projects/student/course/student-course.component';
import { TeacherGuard } from './shared/guard/teacher.guard';
import { LoginComponent } from './login/login.component';
import { TeacherQuestionComponent } from './projects/teacher/question/teacher-question.component';
import { TeacherStudentComponent } from './projects/teacher/student/teacher-student.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  {
    path: 'teacher',
    canActivate: [TeacherGuard],
    children: [
      { path: '', component: TeacherCourseComponent },
      {
        path: ':id',
        children: [
          //{ path: '', component:  }, TODO
          { path: 'student', component: TeacherStudentComponent },
          { path: 'homework', component: TeacherHomeworkComponent },
          { path: 'quiz', component: TeacherQuizComponent },
          { path: 'question', component: TeacherQuestionComponent }
        ],
      },
    ],
  },
  {
    path: 'student',
    canActivate: [StudentGuard],
    children: [
      { path: '', component: StudentCourseComponent },
      {
        path: ':id',
        children: [
          //{ path: '', component:  }, TODO
          { path: 'homework', component: StudentHomeworkComponent },
          { path: 'quiz', component: StudentQuizComponent}
        ],
      },
    ],
  },
  { path: '*', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
