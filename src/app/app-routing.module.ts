import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonutsComponent } from './donuts/donuts.component';
import { DonutDetailComponent } from './donut-detail/donut-detail.component';
import { FamousPeopleComponent } from './famous-people/famous-people.component';
import { FamousPersonDetailComponent } from './famous-person-detail/famous-person-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  { path: 'donut/:id', component:DonutDetailComponent },
  { path: 'donut', component:DonutsComponent},
  { path: 'people/:id', component:FamousPersonDetailComponent},
  { path: 'people', component:FamousPeopleComponent},
  { path: '**', component:PageNotFoundComponent},
  // { path: '', redirectTo: '/donuts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
