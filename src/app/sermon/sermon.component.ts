import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from "ngx-spinner";

import { saveAs } from 'file-saver';
@Component({
  selector: 'app-sermon',
  templateUrl: './sermon.component.html',
  styleUrls: ['./sermon.component.scss']
})
export class SermonComponent implements OnInit {

 
 appurl = "https://api.wpbca.com/index.php/api/sermon-list";

 ghg = "https://api.wpbca.com/index.php/api/download";
res:any;
data_sermon:any;
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
    console.log(this.res);
     if(this.res){

 this.data_sermon =this.res;
   this.loading.hide();
    //loading.dismiss();    
    }else{
    alert("Server error");
    this.loading.hide();
    //loading.dismiss();
    }
  }, (err) => {
    this.loading.hide();
    console.log(err);
    //loading.dismiss();
  });
    
  }

 async download(file: any) {
    var fileName = file;
 var res = fileName.substr(fileName.lastIndexOf('/') + 1);
  ///res = res.substr(0, res.lastIndexOf('.')); 
  //console.log(res);
                   window.open('https://api.wpbca.com/index.php/api/download/'+file, '_self', '');
    }

    
}
