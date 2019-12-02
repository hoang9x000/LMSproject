import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header1Component } from './Homepage/header1/header1.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ThongtinComponent } from './Homepage/thongtin/thongtin.component';
import { QuydinhComponent } from './Homepage/quydinh/quydinh.component';
import { GioithieuComponent } from './Homepage/gioithieu/gioithieu.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { TailieuComponent } from './Homepage/tailieu/tailieu.component';
import { ChangepassComponent } from './changepass/changepass.component';
import { Header2Component } from './Userpage/header2/header2.component';
import { UsersComponent } from './Userpage/users/users.component';
import { ProfileComponent } from './Userpage/profile/profile.component';
import { DetailbookComponent } from './Userpage/detailbook/detailbook.component';
import { GiahanComponent } from './Userpage/giahan/giahan.component';
import { DattruocComponent } from './Userpage/dattruoc/dattruoc.component';
import { ProductComponent } from './Components/product/product.component';


@NgModule({
  declarations: [
    AppComponent,
    Header1Component,
    FooterComponent,
    HomeComponent,
    ThongtinComponent,
    QuydinhComponent,
    GioithieuComponent,
    DangnhapComponent,
    TailieuComponent,
    ChangepassComponent,
    Header2Component,
    UsersComponent,
    ProfileComponent,
    DetailbookComponent,
    GiahanComponent,
    DattruocComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
