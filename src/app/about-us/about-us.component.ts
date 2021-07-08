import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
declare var window: any;
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
app_url = "https://api.wpbca.com/index.php/api/about-page-data";
app_urlprayerbg = "https://api.wpbca.com/index.php/api/prayer_bg_update_view";
prayer_request = "https://api.wpbca.com/index.php/api/become-member-post";
service_url = "https://api.wpbca.com/index.php/api/staff-list";
res:any;
file_list:any;
about_info_data:any;

img_url="https://api.wpbca.com/public/upload/";
name:any;
email:any;
phone:any;
message:any;
pray_bg:any;
  constructor(private http: Http, private httpClient: HttpClient,private loading: NgxSpinnerService) { }

  ngOnInit(): void {
  	 this.getData();
     this.prayer_bg();
     this.listing();
     //this.loadSlider();
  }

   async getData(){
            this.loading.show();
   this.http.get(this.app_url)
  .subscribe(res => {
    
    this.res = res.json();
    //console.log(this.res);
     if(this.res){
         this.loading.hide();

this.about_info_data=this.res;
  setTimeout(()=>{
      this.loadSlider();
   },300)
  
 // if(this.slider_data){

 //   setTimeout(()=>{
 //      this.loadSlider();
 //   },300)
  
 // }
   
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
   this.http.post(this.prayer_request,data)
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
  async listing(){
  this.loading.show(); 
          var headers = new Headers();
  
   this.http.get(this.service_url)
  .subscribe(res => {
    //console.log(res);
    this.res = res.json();
    //console.log(this.res);
     if(this.res){
 this.file_list =this.res;
   this.loading.hide();
    //loading.dismiss();    
    }else{
    alert("Server error");
    //loading.dismiss();
    this.loading.hide();
    }
  }, (err) => {
    console.log(err);
    this.loading.hide();
    //loading.dismiss();
  });
    
  }
  onlyNumberKey(event:any) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
}
loadSlider(){
   var sync1 = window.jQuery(".team-slider");
sync1.owlCarousel({
        loop:false,
        margin:40,
        nav:false,
        dots:false,
       
        autoplay:true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 5000,
        smartSpeed: 2550,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
}
}
