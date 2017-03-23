import {Component, Inject, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {StoryService} from "../services/StoryService";

@Component({
    templateUrl: '../template/views/routes/story.html',
})
export class StoryController implements OnInit {
    story: any;
    type: string = 'No type';

    constructor(@Inject(ActivatedRoute) private _routes: ActivatedRoute,
                @Inject(Router) private _router: Router,
                @Inject(StoryService) private _service: StoryService) {
    }
    ngOnInit(){
        this._routes.params.subscribe((params) => {
            this.type = params['type'];
            this._service.get(params['type']).subscribe((data: any) => {
                this.story = data;
            }, (error: any) => {
                this._router.navigate(['/not-found'])
            });
        });
    }
}