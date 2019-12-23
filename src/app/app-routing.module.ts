import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSegment } from '@angular/router';
import { MissionsComponent } from './modules/missions/missions.component';
import { CompanyComponent } from './modules/company/company.component';
import { LaunchesComponent } from './modules/launches/launches.component';
import { LaunchesViewComponent } from './views/launches-view/launches-view.component';


const routes: Routes = [
  { path: 'missions', component: MissionsComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'launches', component: LaunchesComponent },
  { matcher: launchViews, component: LaunchesViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


} export function launchViews(url: UrlSegment[]) {
  // console.log(url)
  // var obj = url.length === 1 && url[0].path.endsWith('next') ? ({consumed: url}) : null;

  // console.log(obj);
  if (url.length > 1 && url[0].path == 'launches') {
    return ({ consumed: url });
  }

}




