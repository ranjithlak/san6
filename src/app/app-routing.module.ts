import * as core from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/homeComponent";
import { serviceComponent } from './components/service/service.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { serviceprofileComponent} from './components/service-profile/service-profile.component';
const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Services', component: serviceComponent },
  { path:'service/:fname' ,component:  serviceprofileComponent},
  
  {
    path: "",
    component: SidebarComponent,
    outlet: "sidebar"
  },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
];
@core.NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

