import { Component,OnDestroy,OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatExpansionModule} from '@angular/material/expansion'
import { MatButtonModule } from "@angular/material/button";

import { Post } from "../post.model";
import { PostsService } from "../posts.service"
import { Subscription } from "rxjs";
import { HttpClient, HttpClientModule } from "@angular/common/http";


@Component({
    selector: 'app-post-list',
    templateUrl: './post-list.component.html',
    standalone: true,
    styleUrls: [
        './post-list.component.css'
    ],
    imports: [
        CommonModule,
        MatExpansionModule,
        MatButtonModule,
        HttpClientModule,
        // HttpClient
    ]
})
export class PostListComponent implements OnInit, OnDestroy {
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
    posts: Post[] = [];
    private postsSub: Subscription;

    constructor(public postsService: PostsService) {    }

    ngOnInit() {
        this.postsService.getPosts();
        this.postsSub = this.postsService.getPostUpdateListener()
        .subscribe((posts: Post[])=> {
            this.posts = posts;
        });
    }

    ngOnDestroy() {
        this.postsSub.unsubscribe();
    }
}