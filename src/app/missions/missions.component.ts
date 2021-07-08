import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";

import { saveAs } from 'file-saver';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit {

   appurl = "https://api.wpbca.com/index.php/api/missions-list";

 ghg = "https://api.wpbca.com/index.php/api/download";
res:any;
data_missions:any;
img_url="https://api.wpbca.com/public/upload/";
error:any;
headers:any;
  constructor(private http: Http, private httpClient: HttpClient,private loading: NgxSpinnerService) { }

  ngOnInit(): void {
  	this.listing();
  }
async listing(){
            this.loading.show();
   this.http.get(this.appurl)
  .subscribe(res => {
    //console.log(res);
    this.res = res.json();
    //console.log(this.res);
     if(this.res){

 this.data_missions =this.res;
   this.loading.hide();
    //loading.dismiss();    
    }else{
    alert("Server error");
    this.loading.hide();
    //loading.dismiss();
    }
  }, (err) => {
    this.loading.hide();
    //console.log(err);
    //loading.dismiss();
  });
    
  }


}
