import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Post } from '../../model/Post';
import { CommentComponent } from '../comment/comment.component';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule,CommentComponent ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  post: Post | undefined; 

}
