import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { SermonComponent } from './sermon/sermon.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SermonDetailsComponent } from './sermon-details/sermon-details.component';
import { ServiceComponent } from './service/service.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { StaffComponent } from './staff/staff.component';
import { OurHistoryComponent } from './our-history/our-history.component';
import { BecomeMemberComponent } from './become-member/become-member.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { StatementOfFaithComponent } from './statement-of-faith/statement-of-faith.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ServiceLiveComponent } from './service-live/service-live.component';
import { MissionsComponent } from './missions/missions.component';
import { MissionsDetailsComponent } from './missions-details/missions-details.component';
import { BecomeContentComponent } from './become-content/become-content.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
   // { path: 'login', component: LoginComponent },
   { path: 'about-us', component: AboutUsComponent },
   { path: 'contact-us', component: ContactUsComponent },
   { path: 'sermon', component: SermonComponent },
   { path: 'sermon-details', component: SermonDetailsComponent },
   { path: 'service', component: ServiceComponent },
   { path: 'service-details/:id', component: ServiceDetailsComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'staff', component: StaffComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: 'our-history', component: OurHistoryComponent },
    { path: 'send-prayer-request', component: BecomeMemberComponent },
    { path: 'who-we-are', component: WhoWeAreComponent },
    { path: 'statement-of-faith', component: StatementOfFaithComponent },
    { path: 'blog-details/:id', component: BlogDetailsComponent },
    { path: 'event-details/:id', component: EventDetailsComponent },
    { path: 'live', component: ServiceLiveComponent },
    { path: 'missions-details/:id', component: MissionsDetailsComponent },
    { path: 'missions', component: MissionsComponent },
    { path: 'become-a-member', component: BecomeContentComponent },
    {path: '404', component: NotfoundComponent},
    {path: '**', redirectTo: '/404'},



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
