import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {

  constructor(private bookService: BookService,
              private activated: ActivatedRoute,
              private router: Router) {
    this.activated.paramMap.subscribe((paraMap) =>{
      const id = +paraMap.get('id');
      this.deleteBookById(id);
    });
  }

  ngOnInit() {
  }
  deleteBookById(id) {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      });

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          this.bookService.deleteBook(id).subscribe(() => {
            this.router.navigateByUrl('/');
          });
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          this.router.navigateByUrl('/');
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          );
        }
      });
  }
}
