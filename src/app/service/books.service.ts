import { Injectable } from '@angular/core';
import { Books } from '../class/books';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class BooksService {
  

  public ApiUrl:string = 'http://localhost:9191'
  public ApiUrlsave:string="http://localhost:9191/save";
  public ApiUrlget:string="http://localhost:9191/books";
  public addbookUrl:string = 'save'
  public getbookUrl:string = 'books'

  

  constructor(private httpClient:HttpClient ) { }


  getBookList(){
    return this.httpClient.get(`${environment.baseUrl}/${this.getbookUrl}`);
  }
  
  addBook(books:Books):Observable<object>{
    return this.httpClient.post(`${environment.baseUrl}/${this.addbookUrl}`,books);

  }
  deleteBook(id:number):Observable<object>{
    return this.httpClient.delete(this.ApiUrl+'/'+id);

  }
  getBookById(id:number):Observable<Books>{
    return this.httpClient.get<Books>(this.ApiUrl+'/'+id);
  }
  updateBook(id: number, books: Books):Observable<Object> {
    return this.httpClient.put(this.ApiUrl+ '/' + id, books);
  }

}
