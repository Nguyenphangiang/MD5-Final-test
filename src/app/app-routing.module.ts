import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookAddComponent} from './book-add/book-add.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';
import {BookDetailComponent} from './book-detail/book-detail.component';


const routes: Routes = [
  {
    path: '',
    component: BookListComponent
  },
  {
    path: 'add',
    component: BookAddComponent
  },
  {
    path: 'update/:id',
    component: BookEditComponent
  },
  {
    path: 'delete/:id',
    component: BookDeleteComponent
  },
  {
    path: 'detail/:id',
    component: BookDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
