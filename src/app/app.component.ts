import { Component } from '@angular/core';
import { Post } from './models/post.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Facebook';
  posts : Post[]
  URL = "https://my-json-server.typicode.com/PaoloCarugati/facebook/posts"
  data:Post
  oPost : Observable<Post>

  constructor(public http:HttpClient){
      this.ngOnInit()
  }
  ngOnInit(): void {
    this.oPost = this.http.get<Post>(this.URL);
    this.oPost.subscribe( d => {
      this.data = d;
    });
  }
}
