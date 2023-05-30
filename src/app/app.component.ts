import { Component } from '@angular/core';
import { Post } from './models/post.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { serviceResponse } from './models/serviceResponse.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Facebook';
  posts: Post[]
  oServiceResponse: Observable<serviceResponse>;
  serviceURL= 'https://my-json-server.typicode.com/PaoloCarugati/facebook';

  constructor(public http: HttpClient){
    this.makeRequest()
  }
  
  makeRequest(): void {
    this.oServiceResponse = this.http.get<serviceResponse>(this.serviceURL);
    this.oServiceResponse.subscribe(d => {this.posts = d.data;});
  }

}

