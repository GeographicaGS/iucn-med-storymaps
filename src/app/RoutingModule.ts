import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/HomeComponent';
import { StoryGuard } from '../guard/StoryGuard';
import { StoryComponent } from './story/StoryComponent';
import { IUCNInfoComponent } from './info/IUCNInfoComponent';
import { StoriesComponent } from './stories/StoriesComponent';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [StoryGuard]},
  {path: 'info', component: IUCNInfoComponent, canActivate: [StoryGuard]},
  {path: 'stories', component: StoriesComponent, canActivate: [StoryGuard]},
  {path: 'story/:slug', component: StoryComponent, canActivate: [StoryGuard]},
  {path: '**', component: HomeComponent, canActivate: [StoryGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule {
}
