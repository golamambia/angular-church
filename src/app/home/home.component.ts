import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
declare var window: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
appurl = "https://api.wpbca.com/index.php/api/gallery-list-home";
service_url = "https://api.wpbca.com/index.php/api/service-list";
slider_url = "https://api.wpbca.com/index.php/api/hm-slider-list";
event_url = "https://api.wpbca.com/index.php/api/event-list";
app_url = "https://api.wpbca.com/index.php/api/become-member-post";
app_urlprayerbg = "https://api.wpbca.com/index.php/api/prayer_bg_update_view";
appurl_sermon = "https://api.wpbca.com/index.php/api/get-last-sermon";
latest_message = "https://api.wpbca.com/index.php/api/latest-message-get";
ministry_app = "https://api.wpbca.com/index.php/api/ministry-content";
service_data:any;
res:any;
gallery_list:any;
slider_data:any;
left_slider_data:any;
about_info_data:any;
event_list:any;
event_data:any;
name:any;
email:any;
phone:any;
message:any;
pray_bg:any;
last_sermon:any;
last_msg:any;
ministry_con:any;
img_url="https://api.wpbca.com/public/upload/";
   constructor(private http: Http, private httpClient: HttpClient,private loading: NgxSpinnerService) { }

  ngOnInit(): void {
  	//console.log(window.jQuery)
 this.listing_gallery();
 this.listing_service();
 this.listing_slider();
  this.listing_event();
   this.prayer_bg();
   this.get_last_sermon();
   this.get_last_message();
   this.ministry_content();
  this.loading.hide();
  	
  }

  loadSlider(){
    var sync1 = window.jQuery("#sync1");
  var sync2 = window.jQuery("#sync2");
  var slidesPerPage = 4; //globaly define number of elements per page
  var syncedSecondary = true;

  sync1
    .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: false,
      autoplay: true,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      
    })
    .on("changed.owl.carousel", syncPosition);

  sync2
    .on("initialized.owl.carousel", function () {
      sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      items: slidesPerPage,
      dots: false,
      nav: false,
      autoplay: true,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
      responsiveRefreshRate: 100,
      margin:0,
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el: any) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find(".owl-item.active").length - 1;
    var start = sync2.find(".owl-item.active").first().index();
    var end = sync2.find(".owl-item.active").last().index();

    if (current > end) {
      sync2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      sync2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  
  }





  function syncPosition2(el: any) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data("owl.carousel").to(number, 100, true);
    }
  }
  console.log(sync2);
  sync2.on("click", ".owl-item", function (e: any) {
    e.preventDefault();
    var number = window.jQuery(e.currentTarget).index();
    sync1.data("owl.carousel").to(number, 300, true);
  });
// });

  }
async listing_gallery(){
            
   this.http.get(this.appurl)
  .subscribe(res => {
    //console.log(res);
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.gallery_list =this.res;
   
    //loading.dismiss();    
    }else{
    alert("Server error");
    //loading.dismiss();
    }
  }, (err) => {
    console.log(err);
    //loading.dismiss();
  });
    
  } 
  async listing_service(){
          var headers = new Headers();
  
   this.http.get(this.service_url)
  .subscribe(res => {
    //console.log(res);
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.service_data =this.res;
   
    //loading.dismiss();    
    }else{
    alert("Server error");
    //loading.dismiss();
    }
  }, (err) => {
    console.log(err);
    //loading.dismiss();
  });
    
  }
  async listing_slider(){
            this.loading.show();
   this.http.get(this.slider_url)
  .subscribe(res => {
    //console.log(res);
    this.res = res.json();
    //console.log(this.res);
     if(this.res){
         this.loading.hide();
this.left_slider_data=this.res.content_info;
this.about_info_data=this.res.about_info;
 this.slider_data =this.res.slider_list;
 if(this.slider_data){

   setTimeout(()=>{
      this.loadSlider();
   },300)
  
 }
   
    //loading.dismiss();    
    }else{
    alert("Server error");
    //loading.dismiss();
      this.loading.hide();
    }
  }, (err) => {
      this.loading.hide();
    console.log(err);
    //loading.dismiss();
  });
    
  }
   async listing_event(){
            
   this.http.get(this.event_url)
  .subscribe(res => {
    //console.log(res);
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.event_data =this.res;
   
    //loading.dismiss();    
    }else{
    alert("Server error");
    //loading.dismiss();
    }
  }, (err) => {
    console.log(err);
    //loading.dismiss();
  });
    
  }
   async prayer_bg(){
            
   this.http.get(this.app_urlprayerbg)
  .subscribe(res => {
    //console.log(res);
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.pray_bg =this.res;
   
    //loading.dismiss();    
    }else{
    alert("Server error");
    //loading.dismiss();
    }
  }, (err) => {
    console.log(err);
    //loading.dismiss();
  });
    
  }
  async ministry_content(){
            
   this.http.get(this.ministry_app)
  .subscribe(res => {
    //console.log(res);
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.ministry_con =this.res;
   
    //loading.dismiss();    
    }else{
    alert("Server error");
    //loading.dismiss();
    }
  }, (err) => {
    console.log(err);
    //loading.dismiss();
  });
    
  }
 async get_last_sermon(){
            
   this.http.get(this.appurl_sermon)
  .subscribe(res => {
    //console.log(res);
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.last_sermon =this.res;
   
    //loading.dismiss();    
    }else{
    //alert("Server error");
    //loading.dismiss();
    }
  }, (err) => {
    //console.log(err);
    //loading.dismiss();
  });
    
  }
async get_last_message(){
            
   this.http.get(this.latest_message)
  .subscribe(res => {
    //console.log(res);
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.last_msg =this.res;
   
    //loading.dismiss();    
    }else{
    //alert("Server error");
    //loading.dismiss();
    }
  }, (err) => {
    //console.log(err);
    //loading.dismiss();
  });
    
  }
  async becomMember(){
  if(this.name == '' || this.name == null){
     alert('Enter your name');
   
    
  }else if(this.phone == '' || this.phone == null){
alert(this.name);
    
  }else if(this.email == '' || this.email == null){
  
    alert('Enter your email');
  }else if(this.message == '' || this.message == null){
  alert('Enter message');
    
  }else{
  var data={
    "name":this.name,
    "email":this.email,
    "phone":this.phone,
    "message":this.message
  }
            this.loading.show();
   this.http.post(this.app_url,data)
  .subscribe(res => {
    
    this.res = res.json();
    //console.log(this.res);
     if(this.res.status==1){
       
         this.loading.hide();
          this.name='';
    this.email='';
    this.phone='';
    this.message='';
   alert(' '+this.res.msg); 
    }else{
    alert("Something went wrong please try again");
    //loading.dismiss();
      this.loading.hide();
    }
  }, (err) => {
      this.loading.hide();
    console.log(err);
    //loading.dismiss();
  });
}
    
  }
onlyNumberKey(event:any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}

}
