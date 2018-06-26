import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyDetailComponent } from './lazy-detail/lazy-detail.component';
import { LazyListComponent } from './lazy-list/lazy-list.component';

@NgModule({
  imports: [
    CommonModule,
    LazyRoutingModule
  ],
  declarations: [LazyDetailComponent, LazyListComponent]
})
export class LazyModule { }
