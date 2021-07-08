import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
service_url = "https://api.wpbca.com/index.php/api/service-list";
res:any;
service_list:any;
img_url:any="https://api.wpbca.com/public/upload/";
  constructor(private http: Http, private httpClient: HttpClient,private loading: NgxSpinnerService) { }

  ngOnInit(): void {
  	this.listing_menu();
  }
async listing_menu(){
  this.loading.show(); 
          var headers = new Headers();
  
   this.http.get(this.service_url)
  .subscribe(res => {
    //console.log(res);
    this.res = res.json();
    //console.log(this.res);
     if(this.res){
 this.service_list =this.res;
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
}
