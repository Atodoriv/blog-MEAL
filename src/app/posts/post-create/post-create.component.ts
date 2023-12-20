import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { MatInputModule } from  '@angular/material/input';
import { MatCardModule } from  '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { CommonModule } from "@angular/common";

import { PostsService } from "../posts.service";


@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css'],
    standalone: true,
    imports: [FormsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        CommonModule],
    
})
export class PostCreateComponent {

    enteredContent = '';
    enteredTitle = '';

    constructor(public postsService: PostsService) {}

    onAddPost(form: NgForm) {
        if (form.invalid) return;
    
        this.postsService.addPost(form.value.title, form.value.content);
        form.resetForm();
    }
}