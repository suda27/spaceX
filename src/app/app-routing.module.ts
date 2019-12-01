import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionsComponent } from './modules/missions/missions.component';
import { CompanyComponent } from './modules/company/company.component';
import { LaunchesComponent } from './modules/launches/launches.component';


const routes: Routes = [
  { path: 'missions', component: MissionsComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'launches', component: LaunchesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
