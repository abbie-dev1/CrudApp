import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './component/add/add.component';
import { DetailsComponent } from './component/details/details.component';
import { EditComponent } from './component/edit/edit.component';
import { HomeComponent } from './component/home/home.component';
import { ListComponent } from './component/list/list.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'add', component: AddComponent},
  {path:'edit', component: EditComponent},
  {path:'list', component: ListComponent},
  {path:'detail', component: DetailsComponent},
  {path:'**', redirectTo: '', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
