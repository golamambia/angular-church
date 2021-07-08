import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
declare var window: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
service_url = "https://api.wpbca.com/index.php/api/service-list";

res:any;
service_list:any;
 app_url = "https://api.wpbca.com/index.php/api/footer-contact";

info_head_data:any;
img_url:any="http://api.wpbca.com/public/upload/";
  constructor(private http: Http, private httpClient: HttpClient) { }

  ngOnInit(): void {
  	this.listing_menu();
    this.getData();
   
  }
async listing_menu(){
          var headers = new Headers();
  
   this.http.get(this.service_url)
  .subscribe(res => {
    //console.log(res);
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.service_list =this.res;
   
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

  closeMenu(){
    window.jQuery( ".menuButton" ).toggleClass("arrow_change");
		window.jQuery(".menuButton + ul").slideToggle(); 
  }
  async getData(){
            //this.loading.show();
   this.http.get(this.app_url)
  .subscribe(res => {
    
    this.res = res.json();
    //console.log(this.res);
     if(this.res){
        // this.loading.hide();

this.info_head_data=this.res;

    //loading.dismiss();    
    }else{
    alert("Server error");
    //loading.dismiss();
      //this.loading.hide();
    }
  }, (err) => {
      //this.loading.hide();
    console.log(err);
    //loading.dismiss();
  });
    
  }

}
