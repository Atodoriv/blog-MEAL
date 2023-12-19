import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatExpansionModule} from '@angular/material/expansion'

import { Post } from "../post.model";

@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    standalone: true,
    styleUrls: [
        './post-list.component.css'
    ],
    imports: [
        CommonModule,
        MatExpansionModule
    ]
})
export class PostListComponent {
    // posts = [
    //     {
    //         title: 'First Post',
    //         content: 'This is a first post content'
    //     },
    //     {
    //         title: 'Second Post',
    //         content: 'This is a second post content'
    //     },
    //     {
    //         title: 'Third Post',
    //         content: 'This is a third post content'
    //     },
    // ];
    @Input() posts: Post[] = [];
}