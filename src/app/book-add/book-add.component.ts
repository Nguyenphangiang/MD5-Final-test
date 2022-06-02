import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Book} from '../model/book';
import {BookService} from '../service/book.service';
import {FormControl, FormGroup} from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });
  constructor(private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
  }
  addBook() {
    this.bookService.addNewBook(this.bookForm.value).subscribe(() => {
      Swal.fire('Thêm mới thành công !!! ');
      this.router.navigateByUrl('/');
    });
  }
}
