import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

   app_url = "https://api.wpbca.com/index.php/api/footer-contact";
   conmsg_url = "https://api.wpbca.com/index.php/api/contact-message-post";
res:any;

coninfo_data:any;
name:any;
email:any;
phone:any;
message:any;
img_url="https://api.wpbca.com/public/upload/";
 constructor(private http: Http, private httpClient: HttpClient,private loading: NgxSpinnerService) { }

  ngOnInit(): void {
  	 this.getData();
  }

   async getData(){
            this.loading.show();
   this.http.get(this.app_url)
  .subscribe(res => {
    
    this.res = res.json();
    //console.log(this.res);
     if(this.res){
         this.loading.hide();

this.coninfo_data=this.res;
 
 
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
   this.http.post(this.conmsg_url,data)
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
