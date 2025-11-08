import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionsComponent } from './modules/missions/missions.component';
import { CompanyComponent } from './modules/company/company.component';
import { LaunchesComponent } from './modules/launches/launches.component';
import { LaunchesViewComponent } from './views/launches-view/launches-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/launches', pathMatch: 'full' },
  { path: 'missions', component: MissionsComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'launches', component: LaunchesComponent },
  { path: 'launches/next', component: LaunchesViewComponent, data: { viewType: 'next' } },
  { path: 'launches/latest', component: LaunchesViewComponent, data: { viewType: 'latest' } },
  { path: 'launches/upcoming', component: LaunchesViewComponent, data: { viewType: 'upcoming' } },
  { path: 'launches/past', component: LaunchesViewComponent, data: { viewType: 'past' } },
  { path: 'launches/all', component: LaunchesViewComponent, data: { viewType: 'all' } },
  { path: 'launches/find', component: LaunchesViewComponent, data: { viewType: 'find' } },
  { path: 'launches/:id', component: LaunchesViewComponent, data: { viewType: 'single' } },
  { path: '**', redirectTo: '/launches' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
