import { Component, OnInit } from '@angular/core';
import { BooksService } from '../service/books.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {

  public books:any;

  constructor(private bookService:BooksService) { }

  ngOnInit(): void {
    this.getAllBook();
  }

  public getAllBook() {
    try {
      this.bookService.getBookList().subscribe((data) => {
        console.log("data", data);
        this.books = data;
      }

      );
    } catch (error) {
      alert("error occurreed");
    }
  }

}
