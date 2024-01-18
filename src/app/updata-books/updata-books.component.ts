import { Component, OnInit } from '@angular/core';
import { Books } from '../class/books';
import { BooksService } from '../service/books.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';




@Component({
  selector: 'app-updata-books',
  templateUrl: './updata-books.component.html',
  styleUrls: ['./updata-books.component.css']
})
export class UpdataBooksComponent implements OnInit {
  public id!: number;
  public books: Books = new Books();

  constructor(private activedRoute: ActivatedRoute, private router: Router, private bookService: BooksService) { }

  ngOnInit(): void {
    this.id = this.activedRoute.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(data => {
      this.books = data;
    });

  }
  saveBook() {
    this.bookService.updateBook(this.id, this.books).subscribe(data => {
      console.log(data);
      this.goToHome();

    }, error => console.log(error));
    console.log("not exist");
  }
  goToHome() {
    this.router.navigate(['/home']);
  }
}
