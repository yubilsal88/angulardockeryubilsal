import { Component, OnInit } from '@angular/core';
import { BooksService } from '../service/books.service';
import { Books } from '../class/books';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public books: any;
  public users: any;
 

  constructor(private bookService: BooksService) { }

  ngOnInit(): void {
    this.getAllBook();
    // this.books = new Books();
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
  deleteBook(id:number){
    this.bookService.deleteBook(id).subscribe(data=>{
      console.log('data',data);
      this.getAllBook();
    })
  }
  public key :string ='id';
  public reverse:boolean=false;
  sort(key:any){
    this.key=key;
    this.reverse=!this.reverse;

  }
}
