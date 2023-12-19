import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { MatInputModule } from  '@angular/material/input';
import { MatCardModule } from  '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import { CommonModule } from "@angular/common";

import { Post } from "../post.model";


@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css'],
    standalone: true,
    imports: [FormsModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule],
    
})
export class PostCreateComponent {

    enteredContent = '';
    enteredTitle = '';
    @Output() postCreated = new EventEmitter<Post>();

    onAddPost(form: NgForm) {
        if (form.invalid) {return;}
        const post: Post = {
            title: form.value.title,
            content: form.value.content
        };
        this.postCreated.emit(post);
    }
}