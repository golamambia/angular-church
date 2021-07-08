import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

service_url = "https://api.wpbca.com/index.php/api/staff-list";
res:any;
file_list:any;
img_url:any="https://api.wpbca.com/public/upload/";
  constructor(private http: Http, private httpClient: HttpClient,private loading: NgxSpinnerService) { }

  ngOnInit(): void {
  	this.listing();
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

}
