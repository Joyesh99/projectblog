import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormBuilder, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [FormsModule,CommonModule,CommentComponent],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {
  @Input() comments: Comment[] = [];
commentForm: any;

constructor(private fb: FormBuilder) {
  this.commentForm = this.fb.group({
    text: ['', Validators.required],
  
    author: ['', Validators.required],
    // Add more fields as needed
  });
}

onSubmit() {
  // Handle comment submission logic here
}
}