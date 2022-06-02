import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Book} from '../model/book';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book = {};
  id: number;
  bookForm: FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });
  constructor(private bookService: BookService,
              private activated: ActivatedRoute) {
    this.activated.paramMap.subscribe((paraMap) => {
      const id = +paraMap.get('id');
      this.id = id;
      this.findOneBookById(id);
    });
  }
  ngOnInit() {
  }
  findOneBookById(id) {
    this.bookService.findOneBook(id).subscribe((book) => {
      this.bookForm = new FormGroup({
          id: new FormControl(book.title),
          title: new FormControl(book.title),
          author: new FormControl(book.author),
          description: new FormControl(book.description)
      });
    });
  }
  editBook() {
    this.bookService.editBook(this.id, this.bookForm.value).subscribe(() => {
      Swal.fire('Cập nhập thành công !!! ');
    });
  }
}
