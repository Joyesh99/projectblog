import { Component } from '@angular/core';
import { Post } from '../../model/Post';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
   // posts: Array<Post> - Assume Post interface/model is defined
   posts: Post[] // Assuming posts array is populated with data
   

}
