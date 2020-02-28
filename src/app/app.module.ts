import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MarketingComponent } from './marketing/marketing.component';
import { AboveFooterComponent } from './above-footer/above-footer.component';
import { FooterComponent } from './footer/footer.component';
import { RiderLoginComponent } from './rider-login/rider-login.component';
import { DriverLoginComponent } from './driver-login/driver-login.component';
import { RiderSignUpComponent } from './rider-sign-up/rider-sign-up.component';
import { DriverSignUpComponent } from './driver-sign-up/driver-sign-up.component';
import { HomeComponentComponent } from './home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    MarketingComponent,
    AboveFooterComponent,
    FooterComponent,
    RiderLoginComponent,
    DriverLoginComponent,
    RiderSignUpComponent,
    DriverSignUpComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'home' ,component: HomeComponentComponent},
      {path:'riderLogin', component:RiderLoginComponent },
      {path:'driverLogin', component:DriverLoginComponent },
      {path:'riderSignUp', component:RiderSignUpComponent },
      {path:'driverSignUp', component:DriverSignUpComponent },
      {path:'**', component: AppComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
