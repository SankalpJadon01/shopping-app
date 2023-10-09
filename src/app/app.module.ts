import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { CustomerdashComponent } from './customerdash/customerdash.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ListbycategoryComponent } from './listbycategory/listbycategory.component';
import { CartComponent } from './cart/cart.component';
import { AddcustomerComponent } from './addproduct/addcustomer.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    NewuserComponent,
    CustomerdashComponent,
    AdmindashComponent,
    ProductlistComponent,
    UserprofileComponent,
    ListbycategoryComponent,
    CartComponent,
    AddcustomerComponent,
    CustomerlistComponent,
    ProductupdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
