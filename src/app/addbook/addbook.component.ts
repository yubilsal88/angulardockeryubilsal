import { Component, OnInit } from '@angular/core';
import { Books } from '../class/books';
import { BooksService } from '../service/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  public data:any;
  public books:Books= new Books();

  constructor(private booksService:BooksService,private router:Router) { }

  ngOnInit(): void {
  }
addBook(){
  console.log(this.books);
  this.booksService.addBook(this.books).subscribe(data=>{
    console.log(this.data);
    this.gotoBooklist();
  })

}
gotoBooklist(){
  this.router.navigate(['/home']);
}
}
