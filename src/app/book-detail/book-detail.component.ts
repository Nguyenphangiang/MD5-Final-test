import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../model/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: Book = {};
  constructor(private bookService: BookService,
              private activated: ActivatedRoute) {
    this.activated.paramMap.subscribe((paraMap) => {
      const id = +paraMap.get('id');
      this.showBookDetail(id);
    });
  }

  ngOnInit() {
  }
  showBookDetail(id) {
    this.bookService.findOneBook(id).subscribe((book) => {
      this.book = book;
    });
  }
}
