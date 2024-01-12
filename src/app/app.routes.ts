import { Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostListComponent } from './components/post-list/post-list.component';

export const routes: Routes = [
    { path: '', component: PostListComponent },
    { path: 'post/:id', component: PostDetailComponent },
    { path: 'add-post', component: AddPostComponent},
];
