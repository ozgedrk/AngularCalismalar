import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
//import { PostService } from './post.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  //providers:[PostService]

})
export class PostComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private alertifyService: AlertifyService,
  ) { }

  path: string = "https://jsonplaceholder.typicode.com/";
  path2: string = "https://jsonplaceholder.typicode.com/users";
  posts: Post[] | undefined;
  users: User[] | undefined;
  title: any;
  filterText:string=""
  today = new Date(2023,8,16)

  ngOnInit(): void {

    this.getUsers()
    this.activatedRoute.params.subscribe(params => {
      this.getPosts(params["userid"])
    })
  }

  getPosts(userid: any) {

    if (userid) {
      let newPath = this.path + "posts/?userId=" + userid;
      debugger;
      this.http.get<Post[]>(newPath).subscribe(response => {
        this.posts = response;
      });
    } else {
      this.http.get<Post[]>(this.path + "posts").subscribe(response => {
        this.posts = response;
      });
    }

  }
  getUsers() {
    this.http.get<User[]>(this.path2).subscribe(response => {
      this.users = response;
    })
  }

  addToFavorites(post: Post) {
    this.alertifyService.success("added to favs :" + post.title)
  }


}
