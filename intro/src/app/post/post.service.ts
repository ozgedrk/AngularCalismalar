// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Post } from './post';

// @Injectable({
//   providedIn: 'root'
// })
// export class PostService {
//   path: string = "https://jsonplaceholder.typicode.com/";
//   path2: string = "https://jsonplaceholder.typicode.com/users";
//   constructor(  
//     private http: HttpClient) {}

//   getPosts(userid: any) {

//     if (userid) {
//       let newPath = this.path + "posts/?userId=" + userid;
//       debugger;
//       this.http.get<Post[]>(newPath).subscribe(response => {
//         this.posts = response;
//       });
//     } else {
//       this.http.get<Post[]>(this.path + "posts").subscribe(response => {
//         this.posts = response;
//       });
//     }

//   }
// }
