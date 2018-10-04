import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private url = 'http://jsonplaceholder.typicode.com/posts?userId=';

  constructor(private http: HttpClient) {}

  getUser(id: Number): Observable<any> {
    return this.http.get<any>(this.url + id);
  }
}
