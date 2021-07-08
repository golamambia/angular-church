import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { SermonComponent } from './sermon/sermon.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SermonDetailsComponent } from './sermon-details/sermon-details.component';
import { ServiceComponent } from './service/service.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { StaffComponent } from './staff/staff.component';
import { OurHistoryComponent } from './our-history/our-history.component';
import { BecomeMemberComponent } from './become-member/become-member.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
//import { RouteReuseStrategy } from '@angular/router';
import { NgxSpinnerModule } from "ngx-spinner";
import { StatementOfFaithComponent } from './statement-of-faith/statement-of-faith.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotfoundComponent } from './notfound/notfound.component';
import { ServiceLiveComponent } from './service-live/service-live.component';
import { MissionsComponent } from './missions/missions.component';
import { MissionsDetailsComponent } from './missions-details/missions-details.component';
import { BecomeContentComponent } from './become-content/become-content.component';
//import { AlertsModule } from 'angular-alert-module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    BlogComponent,
    SermonComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    SermonDetailsComponent,
    ServiceComponent,
    ServiceDetailsComponent,
    StaffComponent,
    OurHistoryComponent,
    BecomeMemberComponent,
    WhoWeAreComponent,
    StatementOfFaithComponent,
    BlogDetailsComponent,
    EventDetailsComponent,
    NotfoundComponent,
    ServiceLiveComponent,
    MissionsComponent,
    MissionsDetailsComponent,
    BecomeContentComponent


  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    NgxSpinnerModule,
    FormsModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
