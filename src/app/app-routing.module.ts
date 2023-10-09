import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './addproduct/addcustomer.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { CartComponent } from './cart/cart.component';
import { CustomerdashComponent } from './customerdash/customerdash.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ListbycategoryComponent } from './listbycategory/listbycategory.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  {path:"addcustomer",component:AddcustomerComponent},
  {path:"admindash",component:AdmindashComponent},
  {path:"cart",component:CartComponent},
  {path:"customerdash",component:CustomerdashComponent},
  {path:"customerlist",component:CustomerlistComponent},
  {path:"homepage",component:HomepageComponent},
  {path:"listbycategory",component:ListbycategoryComponent},
  {path:"login",component:LoginComponent},
  {path:"newuser",component:NewuserComponent},
  {path:"productlist",component:ProductlistComponent},
  {path:"productupdate",component:ProductupdateComponent},
  {path:"userprofile", component:UserprofileComponent},
  {path:"**",redirectTo:"/login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
