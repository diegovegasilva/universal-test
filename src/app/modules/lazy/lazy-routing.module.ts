import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyDetailComponent } from './lazy-detail/lazy-detail.component';
import { LazyListComponent } from './lazy-list/lazy-list.component';

const routes: Routes = [
  { path: '', component: LazyListComponent },
  { path: 'detail', component: LazyDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
