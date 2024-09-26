import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { MovieComponent } from "../movie/movie.component";

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [MovieComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent implements OnInit{
  
  
  private postService = inject(PostService);
  posts: any = [];
  
  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts(){
    this.postService.getPosts().subscribe({
      next: (posts: any) => {
        this.posts = posts
      },
      error: (error) => console.log("Error fetching posts: ",error)      
    });
  }

}

