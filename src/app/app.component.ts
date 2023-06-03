import { Component } from '@angular/core';
import { Post } from './models/post.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Comment } from './models/comment.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[];
 /*  data : serviceResponse[]; */
  oPost: Observable<Post[]>;

  serviceURL= 'https://my-json-server.typicode.com/FrancoDiego21/facebook/posts';
 
  

  constructor(public http: HttpClient){
    this.makeRequest()
    
  }
  
  makeRequest(): void {
    this.oPost = this.http.get<Post[]>(this.serviceURL);
    this.oPost.subscribe(d => {this.posts = d;});

    
  }

  addPost(autore: HTMLInputElement, testo: HTMLInputElement): void{
    if(autore.value != "" && testo.value != ""){
      const id = this.posts.length + 1
      const pubbPost = new Post(id, autore.value, testo.value, 0)
      this.posts.push(pubbPost)
    }else{
      alert("Inserisci l'autore e il testo prima di pubblicare")
    }
  }

  ordinaPost(): Post[]{
    return this.posts.sort((a: Post, b: Post) => b.like - a.like)
  }

  

}

