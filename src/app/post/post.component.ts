import { Component, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { Comment } from '../models/comment.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  @Input() posts : Post;
  @Input() comments : Comment;
  commentss : Comment[];
  commenti: boolean;
  commURL = 'https://my-json-server.typicode.com/FrancoDiego21/facebook/comments';
  oComm: Observable<Comment[]>;

  constructor(public http: HttpClient){
    this.commenti = false;
    
  }

  addLike(){
    this.posts.like = this.posts.like + 1
  }

  visuaCommenti(){
    if (this.commenti == false){
      this.commenti = true
      this.makeRequestComm()
    }else{
      this.commenti = false
    }
  }

  makeRequestComm():void{
    this.oComm = this.http.get<Comment[]>(this.commURL);
    this.oComm.subscribe(d => {this.commentss = d;});
  }

  
}
