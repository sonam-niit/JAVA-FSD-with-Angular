import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { ListComponent } from './list/list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'addcustomer',component:RegisterComponent},
  {path:'list',component:ListComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'edit/:id',component:EditcustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
